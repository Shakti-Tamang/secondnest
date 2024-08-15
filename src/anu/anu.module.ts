import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnuController } from './controllers/anu/anu.controller';
import { AnuService } from './services/anu/anu.service';
import { userModel } from './Entity/uesrEnitity.user';

@Module({

    imports:[TypeOrmModule.forFeature([userModel]),],
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
