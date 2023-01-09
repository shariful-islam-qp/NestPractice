import {Module} from '@nestjs/common'
import {PositionService} from './domain/service/position.service'
import {PositionController} from './application/controllers/position.controller'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Position} from './domain/entities/employee.entity'
import {PositionRepository} from './repository/position.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Position])],
  providers: [PositionService, PositionRepository],
  controllers: [PositionController],
})
export class EmployeeModule {}
