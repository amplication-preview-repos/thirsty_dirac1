import { Module } from "@nestjs/common";
import { ProducerModuleBase } from "./base/producer.module.base";
import { ProducerService } from "./producer.service";
import { ProducerController } from "./producer.controller";
import { ProducerResolver } from "./producer.resolver";

@Module({
  imports: [ProducerModuleBase],
  controllers: [ProducerController],
  providers: [ProducerService, ProducerResolver],
  exports: [ProducerService],
})
export class ProducerModule {}
