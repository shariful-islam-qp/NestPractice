import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TreeRepository } from 'typeorm'
import { CreatePositionDto } from '../../application/dtos/create-position.dto'
import { Position } from '../entities/position.entity'

@Injectable()
export class PositionService {
  // private readonly logger = new Logger(PositionService.name)
  constructor(
    @InjectRepository(Position)
    private positionRepository: TreeRepository<Position>,
  ) {}

  // Function to return all positions
  async getAllPositions(): Promise<Position[] | []> {
    return await this.positionRepository.find()
    // return await this.positionRepository.findTrees()
  }

  // service function to return position hierarchy
  async getPositionsHierarchy(): Promise<Position[] | []> {
    return await this.positionRepository.findTrees()
  }

  // service to return all Descendants by a positionId
  // async findPositionDescendants(positionId: number) {
  //   return await this.positionRepository.findDescendantsTree(Position)
  // }

  // function to get position by id
  async findOne(id: number): Promise<Position | undefined> {
    return await this.positionRepository.findOneBy({ id })
  }

  // function to create a new position
  async createNewPosition(
    createPositionDTO: CreatePositionDto,
  ): Promise<Position> {
    const newPosition = this.positionRepository.create({
      ...createPositionDTO,
    })
    return await this.positionRepository.save(newPosition)
  }
}
