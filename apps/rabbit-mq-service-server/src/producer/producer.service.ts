import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProducerServiceBase } from "./base/producer.service.base";

@Injectable()
export class ProducerService extends ProducerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
