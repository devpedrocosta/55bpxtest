import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: 'mongodb+srv://57OYrfAxCPHHNAXd:57OYrfAxCPHHNAXd@cluster0.7hhfjmh.mongodb.net/?retryWrites=true&w=majority',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
