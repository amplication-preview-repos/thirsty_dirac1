import * as graphql from "@nestjs/graphql";
import { ConsumerResolverBase } from "./base/consumer.resolver.base";
import { Consumer } from "./base/Consumer";
import { ConsumerService } from "./consumer.service";

@graphql.Resolver(() => Consumer)
export class ConsumerResolver extends ConsumerResolverBase {
  constructor(protected readonly service: ConsumerService) {
    super(service);
  }
}
