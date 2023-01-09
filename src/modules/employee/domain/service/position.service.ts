import {Body, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {CreatePositionDto} from '../../application/dtos/create-newposition.dto'
import {Position} from '../entities/employee.entity'

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private positionRepository: Repository<Position>,
  ) {}

  // Function to return all positions
  async findUsers() {
    return await this.positionRepository.find()
  }

  // function to create a new position
  async createNewPosition(@Body() createPositionDTO: CreatePositionDto) {
    const newPosition = this.positionRepository.create({
      ...createPositionDTO,
    })
    return await this.positionRepository.save(newPosition)
  }
}
