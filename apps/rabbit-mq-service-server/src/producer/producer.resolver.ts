import * as graphql from "@nestjs/graphql";
import { ProducerResolverBase } from "./base/producer.resolver.base";
import { Producer } from "./base/Producer";
import { ProducerService } from "./producer.service";

@graphql.Resolver(() => Producer)
export class ProducerResolver extends ProducerResolverBase {
  constructor(protected readonly service: ProducerService) {
    super(service);
  }
}
