import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/users/schema/users.schema';
import { Model } from 'mongoose';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}
  async register(userObject: RegisterAuthDto) {
    const { email, password } = userObject;
    const findUser = await this.userModel.findOne({ email });
    if (findUser) throw new HttpException('User already registered', 409);
    const passHash = await hash(password, 10);
    userObject = { ...userObject, password: passHash };
    return this.userModel.create(userObject);
  }

  async login(userObjectLogin: LoginAuthDto) {
    const { email, password } = userObjectLogin;
    const findUser = await this.userModel.findOne({ email });
    if (!findUser) throw new HttpException('User not found', 404);
    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword) throw new UnauthorizedException();
    const payload = { email: findUser.email, username: findUser.username };
    return { access_token: await this.jwtService.signAsync(payload) };
  }

  findAll() {
    return this.userModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  /*   update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  } */

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
