import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './models/users/users.module';
import { AddressesModule } from './models/addresses/addresses.module';
import { AdminsModule } from './models/admins/admins.module';
import { BookingTimelinesModule } from './models/booking-timelines/booking-timelines.module';
import { BookingsModule } from './models/bookings/bookings.module';
import { CompaniesModule } from './models/companies/companies.module';
import { CustomersModule } from './models/customers/customers.module';
import { GaragesModule } from './models/garages/garages.module';
import { ManagersModule } from './models/managers/managers.module';
import { ReviewsModule } from './models/reviews/reviews.module';
import { SlotsModule } from './models/slots/slots.module';
import { StripeModule } from './models/stripe/stripe.module';
import { ValetAssignmentsModule } from './models/valet-assignments/valet-assignments.module';
import { ValetsModule } from './models/valets/valets.module';
import { VerificationsModule } from './models/verifications/verifications.module';

const MAX_AGE = 24 * 60 * 60;

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
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),
    StripeModule,

    UsersModule,
    AdminsModule,
    CustomersModule,
    ManagersModule,
    ValetsModule,
    CompaniesModule,
    GaragesModule,
    AddressesModule,
    SlotsModule,
    BookingsModule,
    ValetAssignmentsModule,
    BookingTimelinesModule,
    ReviewsModule,
    VerificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}