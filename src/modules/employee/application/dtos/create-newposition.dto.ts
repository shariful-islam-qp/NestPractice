import {IsString, IsNotEmpty, IsEmail} from 'class-validator'

export class CreatePositionDto {
  @IsNotEmpty()
  @IsString()
  firstName: string

  @IsNotEmpty()
  @IsString()
  lastName: string

  @IsNotEmpty()
  @IsEmail()
  email: string
}
