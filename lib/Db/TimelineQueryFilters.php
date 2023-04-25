<?php

declare(strict_types=1);

namespace OCA\Memories\Db;

use OCA\Memories\Util;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\ITags;

trait TimelineQueryFilters
{
    public function transformFavoriteFilter(IQueryBuilder &$query, bool $aggregate)
    {
        if (Util::isLoggedIn()) {
            $query->innerJoin('m', 'vcategory_to_object', 'vcoi', $query->expr()->andX(
                $query->expr()->eq('vcoi.objid', 'm.fileid'),
                $query->expr()->in('vcoi.categoryid', $this->getFavoriteVCategoryFun($query)),
            ));
        }
    }

    public function addFavoriteTag(IQueryBuilder &$query)
    {
        if (Util::isLoggedIn()) {
            $query->leftJoin('m', 'vcategory_to_object', 'vco', $query->expr()->andX(
                $query->expr()->eq('vco.objid', 'm.fileid'),
                $query->expr()->in('vco.categoryid', $this->getFavoriteVCategoryFun($query)),
            ));
            $query->addSelect('vco.categoryid');
        }
    }

    public function transformVideoFilter(IQueryBuilder &$query, bool $aggregate)
    {
        $query->andWhere($query->expr()->eq('m.isvideo', $query->expr()->literal(true, \PDO::PARAM_BOOL)));
    }

    public function transformLimit(IQueryBuilder &$query, bool $aggregate, int $limit)
    {
        if ($limit >= 1 || $limit <= 100) {
            $query->setMaxResults($limit);
        }
    }

    private function applyAllTransforms(array $transforms, IQueryBuilder &$query, bool $aggregate): void
    {
        foreach ($transforms as &$transform) {
            $fun = \array_slice($transform, 0, 2);
            $params = \array_slice($transform, 2);
            array_unshift($params, $aggregate);
            array_unshift($params, $query);
            $fun(...$params);
        }
    }

    private function getFavoriteVCategoryFun(IQueryBuilder &$query)
    {
        return $query->createFunction(
            $query->getConnection()->getQueryBuilder()->select('id')->from('vcategory', 'vc')->where(
                $query->expr()->andX(
                    $query->expr()->eq('type', $query->expr()->literal('files')),
                    $query->expr()->eq('uid', $query->createNamedParameter(Util::getUID())),
                    $query->expr()->eq('category', $query->expr()->literal(ITags::TAG_FAVORITE)),
                )
            )->getSQL()
        );
    }
}
