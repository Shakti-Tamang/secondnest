import { Injectable } from '@nestjs/common';
import { shakti } from '../shakti.interface';
import { userModel } from 'src/anu/Entity/uesrEnitity.user';
import { InjectRepository } from '@nestjs/typeorm';
import { userRepo } from 'src/anu/Repository/newrepo.repo';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AnuService implements shakti{
    private readonly saltRound=10;
    constructor(
@InjectRepository(userModel)
private readonly jinaRepository1: userRepo, 

    ){

    }

    async createUser(dto: userModel): Promise<void> {
        const hashPassword=await bcrypt.hash(dto.password,this.saltRound);
        const jinna=this.jinaRepository1.create({...dto,password:hashPassword});

     await  this.jinaRepository1.save(jinna);
    }

    async findOne(email:string):Promise<userModel>{
 return await this.jinaRepository1.findOne({where:{email}});
    }

    
}
