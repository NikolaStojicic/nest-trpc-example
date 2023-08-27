import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';

import * as trpcExpress from '@trpc/server/adapters/express';
import { HotelRouter } from '@server/hotel/hotel.router';
import { DeviceRouter } from '@server/device/device.router';

@Injectable()
export class TrpcMergerRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly hotelRouter: HotelRouter,
    private readonly deviceRouter: DeviceRouter,
  ) {}

  appRouter = this.trpc.router({
    hotel: this.hotelRouter.router,
    device: this.deviceRouter.router,
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcMergerRouter['appRouter'];
