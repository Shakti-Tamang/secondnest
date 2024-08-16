import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userModel } from 'src/anu/Entity/uesrEnitity.user';
import { AuthService } from './auth.service';
import { JwtStrategy } from './auth.stratigy';

@Module({
    imports: [
      TypeOrmModule.forFeature([userModel]), // Register the jina entity here
      JwtModule.register({
        secret: 'Qk1gM1vA3mOdK5QZp2Fz6nJ4u/1q+q5gL5YeV9HQhb7mt5IvkmK0RUcGV7F4AbdO', // Replace with your own secret
        signOptions: { expiresIn: '60m' }, // Adjust expiration as needed
      }),
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService, JwtModule],
  })
  export class AuthModule {}
  