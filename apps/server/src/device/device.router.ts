import { Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';

import { DeviceService } from './device.service';

@Injectable()
export class DeviceRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly deviceService: DeviceService,
  ) {}

  router = this.trpc.router({
    deviceRoute: this.trpc.procedure.query(() => {
      return [1, 2, 3, 4, this.deviceService.findAll()];
    }),
  });
}
