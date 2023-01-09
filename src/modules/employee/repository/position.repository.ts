import {DataSource, Repository} from 'typeorm'
import {Injectable} from '@nestjs/common'
import {Position} from '../domain/entities/employee.entity'
import {BaseRepository} from './base.repository'

@Injectable()
export class PositionRepository extends BaseRepository<Position> {
  constructor(private dataSource: DataSource) {
    super(Position, dataSource.createEntityManager())
  }

  /**
   * Add a basic where clause to the query and return the first result.
   */
  async firstWhere(
    column: string,
    value: string | number,
    operator = '=',
  ): Promise<Position | undefined> {
    return await this.createQueryBuilder()
      .where(`Position.${column} ${operator} :value`, {value: value})
      .getOne()
  }
}
