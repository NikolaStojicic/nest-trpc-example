import { Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';

import { HotelService } from '@server/hotel/hotel.service';

@Injectable()
export class HotelRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly hotelService: HotelService,
  ) {}

  router = this.trpc.router({
    test: this.trpc.procedure.query(() => {
      return this.hotelService.findAll();
    }),
  });
}
