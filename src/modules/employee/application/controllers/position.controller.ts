import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common'
import { Position } from '../../domain/entities/position.entity'
import { PositionService } from '../../domain/service/position.service'
import { CreatePositionDto } from '../dtos/create-position.dto'

@Controller('positions')
export class PositionController {
  private readonly logger = new Logger(PositionController.name)
  constructor(private positionService: PositionService) {}

  // function to create a new position
  @Post()
  async CreatePosition(
    @Body() createPositionDto: CreatePositionDto,
  ): Promise<Position> {
    const parentId = createPositionDto.parentId

    if (parentId) {
      const parent = await this.positionService.findOne(parentId)

      if (!parent)
        throw new HttpException('Invalid ParentId', HttpStatus.BAD_REQUEST)

      createPositionDto['parent'] = parent
    }

    const newPosition = await this.positionService.createNewPosition(
      createPositionDto,
    )

    this.logger.log('new Position created')
    return newPosition
  }

  // function to get all positions
  @Get()
  async getAllPositions(): Promise<Position[] | []> {
    const data = await this.positionService.getAllPositions()
    this.logger.log('Returning all positions')
    return data
  }

  // endpoint to get all positions with hierarchy
  @Get('/hierarchy')
  async getPositionsHierarchy(): Promise<Position[] | []> {
    const data = await this.positionService.getPositionsHierarchy()
    this.logger.log('Returning all positions hierarchy')
    return data
  }

  // endpoint to get all Descendants by a given positionId
  // @Get('/:positionId/descendants')
  // async getDescendants(@Param('positionId', ParseIntPipe) positionId: number) {
  //   return await this.positionService.findPositionDescendants(positionId)
  // }

  // function to return position details by id
  // @Get(':id')
  // async getPositionDetailsById(
  //   @Param('id', ParseIntPipe) id: number,
  // ): Promise<Position | undefined> {
  //   return await this.positionService.findOne(id)
  // }
}
