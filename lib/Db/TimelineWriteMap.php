<?php

declare(strict_types=1);

namespace OCA\Memories\Db;

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

const CLUSTER_DEG = 0.0003;

trait TimelineWriteMap
{
    protected IDBConnection $connection;

    protected function getMapCluster(int $prevCluster, float $lat, float $lon): int
    {
        // Get all possible clusters within CLUSTER_DEG radius
        $query = $this->connection->getQueryBuilder();
        $query->select('id', 'lat', 'lon')
            ->from('memories_mapclusters')
            ->andWhere($query->expr()->gte('lat', $query->createNamedParameter($lat - CLUSTER_DEG, IQueryBuilder::PARAM_STR)))
            ->andWhere($query->expr()->lte('lat', $query->createNamedParameter($lat + CLUSTER_DEG, IQueryBuilder::PARAM_STR)))
            ->andWhere($query->expr()->gte('lon', $query->createNamedParameter($lon - CLUSTER_DEG, IQueryBuilder::PARAM_STR)))
            ->andWhere($query->expr()->lte('lon', $query->createNamedParameter($lon + CLUSTER_DEG, IQueryBuilder::PARAM_STR)))
        ;
        $rows = $query->executeQuery()->fetchAll();

        // Find cluster closest to the point
        $minDist = PHP_INT_MAX;
        $minId = -1;
        foreach ($rows as $r) {
            $clusterLat = (float) $r['lat'];
            $clusterLon = (float) $r['lon'];
            $dist = ($lat - $clusterLat) ** 2 + ($lon - $clusterLon) ** 2;
            if ($dist < $minDist) {
                $minDist = $dist;
                $minId = $r['id'];
            }
        }

        // If no cluster found, create a new one
        if ($minId <= 0) {
            $this->removeFromCluster($prevCluster, $lat, $lon);

            return $this->createMapCluster($lat, $lon);
        }

        // If the file was previously in the same cluster, return that
        if ($prevCluster === $minId) {
            return $minId;
        }

        // If the file was previously in a different cluster,
        // remove it from the first cluster and add it to the second
        $this->removeFromCluster($prevCluster, $lat, $lon);
        $this->addToCluster($minId, $lat, $lon);

        return $minId;
    }

    protected function addToCluster(int $clusterId, float $lat, float $lon): void
    {
        if ($clusterId <= 0) {
            return;
        }

        $query = $this->connection->getQueryBuilder();
        $query->update('memories_mapclusters')
            ->set('point_count', $query->createFunction('point_count + 1'))
            ->set('lat_sum', $query->createFunction("lat_sum + {$lat}"))
            ->set('lon_sum', $query->createFunction("lon_sum + {$lon}"))
            ->set('lat', $query->createFunction('lat_sum / point_count'))
            ->set('lon', $query->createFunction('lon_sum / point_count'))
            ->set('last_update', $query->createNamedParameter(time(), IQueryBuilder::PARAM_INT))
            ->where($query->expr()->eq('id', $query->createNamedParameter($clusterId, IQueryBuilder::PARAM_INT)))
        ;
        $query->executeStatement();
    }

    private function createMapCluster(float $lat, float $lon): int
    {
        $query = $this->connection->getQueryBuilder();
        $query->insert('memories_mapclusters')
            ->values([
                'point_count' => $query->createNamedParameter(1, IQueryBuilder::PARAM_INT),
                'lat_sum' => $query->createNamedParameter($lat, IQueryBuilder::PARAM_STR),
                'lon_sum' => $query->createNamedParameter($lon, IQueryBuilder::PARAM_STR),
                'lat' => $query->createNamedParameter($lat, IQueryBuilder::PARAM_STR),
                'lon' => $query->createNamedParameter($lon, IQueryBuilder::PARAM_STR),
                'last_update' => $query->createNamedParameter(time(), IQueryBuilder::PARAM_INT),
            ])
        ;
        $query->executeStatement();

        return (int) $query->getLastInsertId();
    }

    private function removeFromCluster(int $clusterId, float $lat, float $lon): void
    {
        if ($clusterId <= 0) {
            return;
        }

        $query = $this->connection->getQueryBuilder();
        $query->update('memories_mapclusters')
            ->set('point_count', $query->createFunction('point_count - 1'))
            ->set('lat_sum', $query->createFunction("lat_sum - {$lat}"))
            ->set('lon_sum', $query->createFunction("lon_sum - {$lon}"))
            ->set('lat', $query->createFunction('lat_sum / point_count'))
            ->set('lon', $query->createFunction('lon_sum / point_count'))
            ->set('last_update', $query->createNamedParameter(time(), IQueryBuilder::PARAM_INT))
            ->where($query->expr()->eq('id', $query->createNamedParameter($clusterId, IQueryBuilder::PARAM_INT)))
        ;
        $query->executeStatement();
    }
}
