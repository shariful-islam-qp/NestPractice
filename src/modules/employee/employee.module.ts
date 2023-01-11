import {Module} from '@nestjs/common'
import {PositionService} from './domain/service/position.service'
import {PositionController} from './application/controllers/position.controller'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Position} from './domain/entities/position.entity'
import {EmployeeController} from './application/controllers/employee.controller'
import {EmployeeService} from './domain/service/employee.service'
import {Employee} from './domain/entities/employee.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Position, Employee])],
  providers: [PositionService, EmployeeService],
  controllers: [PositionController, EmployeeController],
})
export class EmployeeModule {}
