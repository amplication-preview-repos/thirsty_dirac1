/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Producer as PrismaProducer } from "@prisma/client";

export class ProducerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProducerCountArgs, "select">): Promise<number> {
    return this.prisma.producer.count(args);
  }

  async producers(
    args: Prisma.ProducerFindManyArgs
  ): Promise<PrismaProducer[]> {
    return this.prisma.producer.findMany(args);
  }
  async producer(
    args: Prisma.ProducerFindUniqueArgs
  ): Promise<PrismaProducer | null> {
    return this.prisma.producer.findUnique(args);
  }
  async createProducer(
    args: Prisma.ProducerCreateArgs
  ): Promise<PrismaProducer> {
    return this.prisma.producer.create(args);
  }
  async updateProducer(
    args: Prisma.ProducerUpdateArgs
  ): Promise<PrismaProducer> {
    return this.prisma.producer.update(args);
  }
  async deleteProducer(
    args: Prisma.ProducerDeleteArgs
  ): Promise<PrismaProducer> {
    return this.prisma.producer.delete(args);
  }
}