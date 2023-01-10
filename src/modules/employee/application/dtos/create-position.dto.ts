import {IsString, IsNotEmpty, IsNumber, IsOptional} from 'class-validator'
import {Position} from '../../domain/entities/position.entity'

export class CreatePositionDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsOptional()
  parentId?: number

  @IsOptional()
  parent?: Position
}
