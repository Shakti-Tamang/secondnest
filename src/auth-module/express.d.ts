import { userModel } from 'src/anu/Entity/uesrEnitity.user';


declare global {
  namespace Express {
    interface Request {
      user?: userModel;
    }
  }
}
