import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './common/prisma/prisma.module'
import { UsersModule } from './users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { AdminsModule } from './admins/admins.module'
import { CustomersModule } from './customers/customers.module'
import { ManagersModule } from './managers/managers.module'
import { ValetsModule } from './valets/valets.module'
import { CompaniesModule } from './companies/companies.module'
import { GaragesModule } from './garages/garages.module'
import { AddressesModule } from './addresses/addresses.module'
import { SlotsModule } from './slots/slots.module'
import { BookingsModule } from './bookings/bookings.module'
import { ValetAssignmentsModule } from './valet-assignments/valet-assignments.module'
import { BookingTimelinesModule } from './booking-timelines/booking-timelines.module'
import { ReviewsModule } from './reviews/reviews.module'
import { VerificationsModule } from './verifications/verifications.module'
import { StripeModule } from './stripe/stripe.module'

// Todo: Move this to util lib.
const MAX_AGE = 24 * 60 * 60

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: MAX_AGE },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      //   buildSchemaOptions: {
      //      numberScalarMode: 'integer',
      //   },
    }),

    PrismaModule,

    StripeModule,

    UsersModule,
    // AdminsModule,
    // CustomersModule,
    // ManagersModule,
    // ValetsModule,
    // CompaniesModule,
    // GaragesModule,
    // AddressesModule,
    // SlotsModule,
    // BookingsModule,
    // ValetAssignmentsModule,
    // BookingTimelinesModule,
    // ReviewsModule,
    // VerificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
