import {IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator'

export class CreateEmployeeDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsString()
  @IsNotEmpty()
  lastName: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNumber()
  @IsNotEmpty()
  positionId: number
}
