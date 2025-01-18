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
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.prisma.user.update({
      where: { id },
      data: updateUserDto
    })
    return user;
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id }
    });
  }
}
