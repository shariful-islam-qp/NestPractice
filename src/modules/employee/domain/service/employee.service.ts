import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateEmployeeDTO } from '../../application/dtos/create-employee.dto'
import { Employee } from '../entities/employee.entity'

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  // service to create new employee
  async createNewEmployee(
    createEmployeeDto: CreateEmployeeDTO,
  ): Promise<Employee> {
    const newEmployee = this.employeeRepository.create({
      ...createEmployeeDto,
    })

    return await this.employeeRepository.save(newEmployee)
  }

  // service to get all employees
  async getAllEmployees(): Promise<Employee[] | []> {
    return await this.employeeRepository.find({
      relations: { position: true },
    })
  }
}
