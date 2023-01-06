import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AppController} from './app.controller'
import {AppService} from './app.service'

const env = require('dotenv').config()

if (env.error) {
  throw env.error
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.JAWSDB_URL,
      entities: ['dist/**/*.entity.js'],
      synchronize: Boolean(process.env.DB_SYNCHRONIZE),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
