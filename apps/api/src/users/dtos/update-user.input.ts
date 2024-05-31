import { Field, InputType, PartialType } from '@nestjs/graphql'
import { User } from '../entity/user.entity'

@InputType()
export class UpdateUserInput extends PartialType(User) {
  @Field(() => String, { nullable: true })
  uid: User['uid']
}
