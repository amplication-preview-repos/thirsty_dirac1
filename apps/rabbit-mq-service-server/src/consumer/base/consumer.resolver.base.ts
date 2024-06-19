/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Consumer } from "./Consumer";
import { ConsumerCountArgs } from "./ConsumerCountArgs";
import { ConsumerFindManyArgs } from "./ConsumerFindManyArgs";
import { ConsumerFindUniqueArgs } from "./ConsumerFindUniqueArgs";
import { DeleteConsumerArgs } from "./DeleteConsumerArgs";
import { ConsumerService } from "../consumer.service";
@graphql.Resolver(() => Consumer)
export class ConsumerResolverBase {
  constructor(protected readonly service: ConsumerService) {}

  async _consumersMeta(
    @graphql.Args() args: ConsumerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Consumer])
  async consumers(
    @graphql.Args() args: ConsumerFindManyArgs
  ): Promise<Consumer[]> {
    return this.service.consumers(args);
  }

  @graphql.Query(() => Consumer, { nullable: true })
  async consumer(
    @graphql.Args() args: ConsumerFindUniqueArgs
  ): Promise<Consumer | null> {
    const result = await this.service.consumer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Consumer)
  async deleteConsumer(
    @graphql.Args() args: DeleteConsumerArgs
  ): Promise<Consumer | null> {
    try {
      return await this.service.deleteConsumer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}