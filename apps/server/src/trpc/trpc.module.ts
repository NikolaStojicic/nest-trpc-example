import { Module } from '@nestjs/common';
import { TrpcMergerRouter } from './trpc.router';

import { TrpcService } from '@server/trpc/trpc.service';
import { HotelModule } from '@server/hotel/hotel.module';
import { DeviceModule } from '@server/device/device.module';

@Module({
  imports: [HotelModule, DeviceModule],
  providers: [TrpcMergerRouter, TrpcService],
})
export class TrpcMergerModule {}
