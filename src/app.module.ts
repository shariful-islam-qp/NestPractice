import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {AuthModule} from './modules/auth/auth.module'
import {EmployeeModule} from './modules/employee/employee.module'

// const env = require('dotenv').config()

// if (env.error) {
//   throw env.error
// }

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password123!',
      database: 'practise',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    AuthModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
