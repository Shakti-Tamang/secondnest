import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class userModel{
@PrimaryGeneratedColumn()
id:number;

@Column()
@IsNotEmpty()
userName:string;

@Column()
@IsNotEmpty()
email:string;

@Column()
password:string;

@Column()
@IsNotEmpty()
role:string;



}