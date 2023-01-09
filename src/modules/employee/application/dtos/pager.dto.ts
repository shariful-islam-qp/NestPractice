import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator'

export class PagerDto {
  @IsNumber()
  @Min(1)
  @IsOptional()
  pageNumber?: number

  @IsNumber()
  @Min(1)
  @Max(100)
  @IsOptional()
  perPage?: number

  @IsString()
  @IsOptional()
  view?: string

  @IsString()
  @IsOptional()
  period?: string

  @IsString()
  @IsOptional()
  notificationStatus?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsOptional()
  @IsString()
  priority?: string

  @IsString()
  @IsOptional()
  assignToId?: string

  @IsString()
  @IsOptional()
  source?: string

  @IsDateString()
  @IsOptional()
  fromDate?: string

  @IsDateString()
  @IsOptional()
  toDate?: string

  @IsOptional()
  sort?: string
}
