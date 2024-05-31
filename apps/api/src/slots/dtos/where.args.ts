import { Field, InputType, PartialType } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingListRelationFilter } from 'src/bookings/dtos/where.args'
import { GarageRelationFilter } from 'src/garages/dtos/where.args'

@InputType()
export class SlotWhereUniqueInput {
  id: number
}

@InputType()
export class EnumSlotTypeFilter {
  @Field(() => $Enums.SlotType, { nullable: true })
  equals?: $Enums.SlotType;
  @Field(() => [$Enums.SlotType], { nullable: true })
  in?: $Enums.SlotType[]
  @Field(() => [$Enums.SlotType], { nullable: true })
  notIn?: $Enums.SlotType[]
  @Field(() => $Enums.SlotType, { nullable: true })
  not?: $Enums.SlotType
}

@InputType()
export class SlotWhereInputStrict
  implements RestrictProperties<SlotWhereInputStrict, Prisma.SlotWhereInput>
{
  @Field(() => IntFilter)
  id: IntFilter

  @Field(() => DateTimeFilter)
  createdAt: DateTimeFilter

  @Field(() => DateTimeFilter)
  updatedAt: DateTimeFilter

  @Field(() => StringFilter)
  displayName: StringFilter

  @Field(() => FloatFilter)
  pricePerHour: FloatFilter

  @Field(() => IntFilter)
  length: IntFilter

  @Field(() => IntFilter)
  width: IntFilter

  @Field(() => IntFilter)
  height: IntFilter

  @Field(() => EnumSlotTypeFilter)
  type: EnumSlotTypeFilter

  @Field(() => IntFilter)
  garageId: IntFilter

  @Field(() => GarageRelationFilter)
  Garage: GarageRelationFilter

  @Field(() => BookingListRelationFilter)
  Bookings: BookingListRelationFilter

  @Field(() => [SlotWhereInput], { nullable: true })
  AND: SlotWhereInput[]

  @Field(() => [SlotWhereInput], { nullable: true })
  OR: SlotWhereInput[]

  @Field(() => [SlotWhereInput], { nullable: true })
  NOT: SlotWhereInput[]
}

@InputType()
export class SlotWhereInput extends PartialType(SlotWhereInputStrict) {}

@InputType()
export class SlotListRelationFilter {
  every?: SlotWhereInput
  some?: SlotWhereInput
  none?: SlotWhereInput
}

@InputType()
export class SlotRelationFilter {
  is?: SlotWhereInput
  isNot?: SlotWhereInput
}
