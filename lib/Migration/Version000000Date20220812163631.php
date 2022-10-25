<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2022 Varun Patil <radialapps@gmail.com>
 * @author Varun Patil <radialapps@gmail.com>
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

namespace OCA\Memories\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

class Version000000Date20220812163631 extends SimpleMigrationStep
{
    /**
     * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
     *
     * @return null|ISchemaWrapper
     */
    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options)
    {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if (!$schema->hasTable('memories')) {
            $table = $schema->createTable('memories');
            $table->addColumn('id', 'integer', [
                'autoincrement' => true,
                'notnull' => true,
            ]);
            $table->addColumn('uid', 'string', [
                'notnull' => true,
                'length' => 200,
            ]);
            $table->addColumn('datetaken', Types::DATETIME, [
                'notnull' => false,
            ]);
            $table->addColumn('fileid', Types::BIGINT, [
                'notnull' => true,
                'length' => 20,
            ]);
            $table->addColumn('dayid', Types::INTEGER, [
                'notnull' => true,
            ]);
            $table->addColumn('isvideo', Types::BOOLEAN, [
                'notnull' => false,
                'default' => false,
            ]);
            $table->addColumn('mtime', Types::INTEGER, [
                'notnull' => true,
            ]);

            $table->setPrimaryKey(['id']);
            $table->addIndex(['uid'], 'memories_uid_index');
            $table->addIndex(['uid', 'dayid'], 'memories_ud_index');
            $table->addUniqueIndex(['uid', 'fileid'], 'memories_day_uf_ui');
        }

        return $schema;
    }
}
