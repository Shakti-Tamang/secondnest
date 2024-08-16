import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnuController } from './controllers/anu/anu.controller';
import { AnuService } from './services/anu/anu.service';
import { userModel } from './Entity/uesrEnitity.user';
import { AuthModule } from 'src/auth-module/auth-module.module';

@Module({

    imports:[TypeOrmModule.forFeature([userModel]), AuthModule],
    controllers:[AnuController],
    providers:[{
        provide: 'shakti',
        useClass: AnuService,
    },
    AnuService
],
})
export class AnuModule {

    
}
