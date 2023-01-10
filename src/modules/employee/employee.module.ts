import {Module} from '@nestjs/common'
import {PositionService} from './domain/service/position.service'
import {PositionController} from './application/controllers/position.controller'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Position} from './domain/entities/position.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Position])],
  providers: [PositionService],
  controllers: [PositionController],
})
export class EmployeeModule {}
