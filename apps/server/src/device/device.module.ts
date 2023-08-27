import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { TrpcService } from '@server/trpc/trpc.service';
import { DeviceRouter } from './device.router';

@Module({
  controllers: [DeviceController],
  providers: [DeviceRouter, DeviceService, TrpcService],
  exports: [DeviceRouter],
})
export class DeviceModule {}
