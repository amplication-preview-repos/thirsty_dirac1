/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConsumerWhereInput } from "./ConsumerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ConsumerOrderByInput } from "./ConsumerOrderByInput";

@ArgsType()
class ConsumerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ConsumerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ConsumerWhereInput, { nullable: true })
  @Type(() => ConsumerWhereInput)
  where?: ConsumerWhereInput;

  @ApiProperty({
    required: false,
    type: [ConsumerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ConsumerOrderByInput], { nullable: true })
  @Type(() => ConsumerOrderByInput)
  orderBy?: Array<ConsumerOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ConsumerFindManyArgs as ConsumerFindManyArgs };
