import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { HotelRouter } from './hotel.router';

import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  controllers: [HotelController],
  providers: [HotelRouter, TrpcService, HotelService],
  exports: [HotelRouter],
})
export class HotelModule {}
