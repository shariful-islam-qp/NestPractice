import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common'
import {Employee} from '../../domain/entities/employee.entity'
import {EmployeeService} from '../../domain/service/employee.service'
import {PositionService} from '../../domain/service/position.service'
import {CreateEmployeeDTO} from '../dtos/create-employee.dto'

@Controller('employees')
export class EmployeeController {
  private logger = new Logger(EmployeeController.name)
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly positionService: PositionService,
  ) {}

  // endpoint to create a new Employee
  @Post()
  async createNewEmployee(
    @Body() createEmployeeDto: CreateEmployeeDTO,
  ): Promise<Employee> {
    // get position id from Payload
    const positionId = createEmployeeDto.positionId

    // check if position is valid or not
    const position = await this.positionService.findOne(positionId)
    if (!position)
      throw new HttpException('Invalid positionId', HttpStatus.BAD_REQUEST)

    createEmployeeDto['position'] = position

    const newEmployee = await this.employeeService.createNewEmployee(
      createEmployeeDto,
    )

    this.logger.log('New Employee created')
    return newEmployee
  }

  // endpoint to get all employee
  @Get()
  async GetAllEmployees(): Promise<Employee[] | []> {
    const employees = await this.employeeService.getAllEmployees()
    return employees
  }
}
