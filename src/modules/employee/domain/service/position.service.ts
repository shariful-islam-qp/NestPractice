import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Position} from '../entities/employee.entity'

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position) private userRepository: Repository<Position>,
  ) {}
}
