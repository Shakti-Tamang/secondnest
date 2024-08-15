
import { userModel } from "../Entity/uesrEnitity.user";

export interface shakti{
createUser(dto:userModel):Promise<void>;
}