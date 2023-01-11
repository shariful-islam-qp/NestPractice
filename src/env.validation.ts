import { plainToInstance } from 'class-transformer'
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator'

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

enum DatabaseType {
  MYSQL = 'mysql',
  POSTGRESQL = 'postgresql',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment

  @IsNumber()
  PORT: number

  @IsEnum(DatabaseType)
  DB_TYPE: DatabaseType

  @IsString()
  DB_HOST: string

  @IsNumber()
  DB_PORT: number

  @IsString()
  DB_USER: string

  @IsString()
  DB_PASSWORD: string

  @IsString()
  DA_NAME: string
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  })
  const errors = validateSync(validatedConfig, { skipMissingProperties: false })

  if (errors.length > 0) {
    throw new Error(errors.toString())
  }
  return validatedConfig
}
