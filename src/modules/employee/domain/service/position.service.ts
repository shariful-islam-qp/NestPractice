import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {PositionRepository} from '../../repository/position.repository'
import {Position} from '../entities/employee.entity'

@Injectable()
export class PositionService {
  constructor(
    // @InjectRepository(Position) private userRepository: Repository<Position>,

    private readonly positionRepository: PositionRepository,
  ) {}
}
