import { Repository } from "typeorm";
import { userModel } from "../Entity/uesrEnitity.user";

export interface userRepo extends Repository<userModel>{

}