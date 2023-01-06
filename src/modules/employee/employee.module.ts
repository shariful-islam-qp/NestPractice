import { Module } from '@nestjs/common';
import { PositionService } from './domain/service/position.service';
import { PositionController } from './application/controllers/position.controller';

@Module({
  providers: [PositionService],
  controllers: [PositionController]
})
export class EmployeeModule {}
