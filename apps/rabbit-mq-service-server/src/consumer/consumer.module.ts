import { Module } from "@nestjs/common";
import { ConsumerModuleBase } from "./base/consumer.module.base";
import { ConsumerService } from "./consumer.service";
import { ConsumerController } from "./consumer.controller";
import { ConsumerResolver } from "./consumer.resolver";

@Module({
  imports: [ConsumerModuleBase],
  controllers: [ConsumerController],
  providers: [ConsumerService, ConsumerResolver],
  exports: [ConsumerService],
})
export class ConsumerModule {}
