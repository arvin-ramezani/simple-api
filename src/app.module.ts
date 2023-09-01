import { Module } from '@nestjs/common';
import { EmailsModule } from './emails/emails.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    EmailsModule,
  ],

  controllers: [],

  providers: [],
})
export class AppModule {}
