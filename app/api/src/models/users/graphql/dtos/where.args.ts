import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class UserWhereUniqueInput {
  uid: string;
}

@InputType()
export class UserWhereInputStrict
  implements
    RestrictProperties<
      UserWhereInputStrict,
      Omit<Prisma.UserWhereInput, 'Credentials' | 'AuthProvider' | 'Admin'>
    >
{
  uid: string | Prisma.StringFilter<'User'>;
  createdAt: string | Date | Prisma.DateTimeFilter<'User'>;
  updatedAt: string | Date | Prisma.DateTimeFilter<'User'>;
  name: string | Prisma.StringNullableFilter<'User'>;
  image: string | Prisma.StringNullableFilter<'User'>;
  Manager:
    | (Prisma.Without<
        Prisma.ManagerNullableRelationFilter,
        Prisma.ManagerWhereInput
      > &
        Prisma.ManagerWhereInput)
    | (Prisma.Without<
        Prisma.ManagerWhereInput,
        Prisma.ManagerNullableRelationFilter
      > &
        Prisma.ManagerNullableRelationFilter);
  Valet:
    | (Prisma.Without<
        Prisma.ValetNullableRelationFilter,
        Prisma.ValetWhereInput
      > &
        Prisma.ValetWhereInput)
    | (Prisma.Without<
        Prisma.ValetWhereInput,
        Prisma.ValetNullableRelationFilter
      > &
        Prisma.ValetNullableRelationFilter);
  Customer:
    | (Prisma.Without<
        Prisma.CustomerNullableRelationFilter,
        Prisma.CustomerWhereInput
      > &
        Prisma.CustomerWhereInput)
    | (Prisma.Without<
        Prisma.CustomerWhereInput,
        Prisma.CustomerNullableRelationFilter
      > &
        Prisma.CustomerNullableRelationFilter);
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: UserWhereInput[];
  OR: UserWhereInput[];
  NOT: UserWhereInput[];
}

@InputType()
export class UserWhereInput extends PartialType(UserWhereInputStrict) {}

@InputType()
export class UserListRelationFilter {
  every?: UserWhereInput;
  some?: UserWhereInput;
  none?: UserWhereInput;
}

@InputType()
export class UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}
