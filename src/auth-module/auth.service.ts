import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { userModel } from 'src/anu/Entity/uesrEnitity.user';




@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(userModel)
    private readonly userRepository: Repository<userModel>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { userName} });
    if (user && await bcrypt.compare(password, user.password)) {
      // Create a new object excluding `password`
      const result = { ...user };
      delete result.password; // Remove the password field from the result object
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
