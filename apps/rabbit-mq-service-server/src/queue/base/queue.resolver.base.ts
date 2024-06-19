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
import { Queue } from "./Queue";
import { QueueCountArgs } from "./QueueCountArgs";
import { QueueFindManyArgs } from "./QueueFindManyArgs";
import { QueueFindUniqueArgs } from "./QueueFindUniqueArgs";
import { DeleteQueueArgs } from "./DeleteQueueArgs";
import { QueueService } from "../queue.service";
@graphql.Resolver(() => Queue)
export class QueueResolverBase {
  constructor(protected readonly service: QueueService) {}

  async _queuesMeta(
    @graphql.Args() args: QueueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Queue])
  async queues(@graphql.Args() args: QueueFindManyArgs): Promise<Queue[]> {
    return this.service.queues(args);
  }

  @graphql.Query(() => Queue, { nullable: true })
  async queue(
    @graphql.Args() args: QueueFindUniqueArgs
  ): Promise<Queue | null> {
    const result = await this.service.queue(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Queue)
  async deleteQueue(
    @graphql.Args() args: DeleteQueueArgs
  ): Promise<Queue | null> {
    try {
      return await this.service.deleteQueue(args);
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
