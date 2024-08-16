import { Body, Controller, HttpException, HttpStatus, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { userModel } from 'src/anu/Entity/uesrEnitity.user';
import { shakti } from 'src/anu/services/shakti.interface';
import { AuthService } from 'src/auth-module/auth.service';

@Controller('anu')
export class AnuController {
constructor(
    @Inject('shakti')private readonly shaktiErvice:shakti,
    private readonly authService:AuthService,
){

}

@Post('/saveUser')
@UsePipes(new ValidationPipe())
async create(@Body() dto:userModel){
    const one=await this.shaktiErvice.findOne(dto.email);
    if(one !=null){
throw new HttpException("user alreda",HttpStatus.CONFLICT);

    }
    else {
await this.shaktiErvice.createUser(dto);
return{message:'user created successfully'};
    }
}

@Post('/logIn')


async logIn(@Body() dto:userModel){
    try{

        // always await needed for asyn function
    const getOne=await this.shaktiErvice.findOne(dto.email);

    if(!getOne){
throw new HttpException('userNotFound',HttpStatus.CONFLICT);

    }
const {userName}=getOne;

const validUser=await this.authService.validateUser(userName,dto.password);
if(!validUser){

    throw new HttpException("no user",HttpStatus.CONFLICT);
}

const Gentoken= await this.authService.login(validUser);
return {
// its like variable string data
    message:'Login successFul',
    access_token:Gentoken.access_token,
    }
}
    catch(error){

        console.error('Error during login:', error);
        throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

}
