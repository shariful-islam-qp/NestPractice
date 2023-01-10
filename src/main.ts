import {NestFactory} from '@nestjs/core'
import helmet from 'helmet'
import {AppModule} from './app.module'
import * as compression from 'compression'
import {Logger} from '@nestjs/common'

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const logger = new Logger('main.ts:bootstrap')

const environment = process.env.NODE_ENV

const validateEnvSetup = (): void => {
  if (!environment) {
    throw new Error('ENVIRONMENT variable is not setup')
  }

  logger.log('environment', environment)
}

async function bootstrap() {
  validateEnvSetup()

  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')

  /* Refer: https://docs.nestjs.com/security/helmet */
  app.use(helmet())

  app.use(compression())

  // enable CORS middleware
  app.enableCors()
  await app.listen(process.env.PORT || 3080)
  logger.log(
    `App is listening on port "${process.env.PORT}" in ${process.env.NODE_ENV} environment `,
  )
}

bootstrap()
