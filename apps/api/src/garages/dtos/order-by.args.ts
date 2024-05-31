import { Field, InputType, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { RestrictProperties } from 'src/common/dtos/common.input'
import { AddressOrderByWithRelationInput } from 'src/addresses/dtos/order-by.args'
import { CompanyOrderByWithRelationInput } from 'src/companies/dtos/order-by.args'
import { ReviewOrderByRelationAggregateInput } from 'src/reviews/dtos/order-by.args'
import { SlotOrderByRelationAggregateInput } from 'src/slots/dtos/order-by.args'
import { VerificationOrderByWithRelationInput } from 'src/verifications/dtos/order-by.args'

@InputType()
export class GarageOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      GarageOrderByWithRelationInputStrict,
      Prisma.GarageOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  displayName: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  description: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  images: Prisma.SortOrder
  @Field(() => Prisma.SortOrder)
  companyId: Prisma.SortOrder
  Company: CompanyOrderByWithRelationInput
  Address: AddressOrderByWithRelationInput
  Verification: VerificationOrderByWithRelationInput
  Reviews: ReviewOrderByRelationAggregateInput
  Slots: SlotOrderByRelationAggregateInput
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class GarageOrderByWithRelationInput extends PartialType(
  GarageOrderByWithRelationInputStrict,
) {}

@InputType()
export class GarageOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder
}
