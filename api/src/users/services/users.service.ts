import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user/create-user.dto';
import { UpdateUserDto } from '../dto/update-user/update-user.dto';
import { convertCreateUserDtoToDao } from './convertCreateUserDtoToDao';
import { CreateUserDao } from '../interfaces/dao/createUserDao';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    const createUserDao: CreateUserDao = convertCreateUserDtoToDao(createUserDto);
    
    const user = this.prisma.user.create({
      data: createUserDao,
    })
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
