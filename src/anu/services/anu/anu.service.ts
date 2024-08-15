import { Injectable } from '@nestjs/common';
import { shakti } from '../shakti.interface';
import { userModel } from 'src/anu/Entity/uesrEnitity.user';
import { InjectRepository } from '@nestjs/typeorm';
import { userRepo } from 'src/anu/Repository/newrepo.repo';

@Injectable()
export class AnuService implements shakti{
    private readonly saltRound=10;
    constructor(
@InjectRepository(userModel)
private readonly jinaRepository1: userRepo, 

    ){

    }

    async createUser(dto: userModel): Promise<void> {

        
    }
    
}
