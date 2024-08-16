import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AnuModule } from './anu/anu.module';
import { AuthModule } from './auth-module/auth-module.module';




@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
  }),
  TypeOrmModule.forRootAsync({
imports:[ConfigModule],
useFactory: (configService: ConfigService) => ({
  type: 'postgres',
  host: configService.get<string>('POSTGRES_HOST'),
  port: +configService.get<number>('POSTGRES_PORT'),
  username: configService.get<string>('POSTGRES_USER'),
  password: configService.get<string>('POSTGRES_PASSWORD'),
  database: configService.get<string>('POSTGRES_DB'),

  // for all entity   it will san all entity
  
  // autoLoadEntities: true, // Automatically load all entities

  entities: [join(__dirname, '**/*.entity.{js,ts}')], // Add your entity classes here
  autoLoadEntities: true,
  synchronize:true,
  }),
  inject: [ConfigService],
}),

AnuModule,
AuthModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
