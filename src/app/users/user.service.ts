import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from './user.model';
import { UserDTO } from './user.dto';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserModel)
        private userRepository: Repository<UserModel>,
    ) { }

    create(detail: UserDTO): Promise<UserModel> {
        return this.userRepository.save(detail);
    }

    findAll(): Promise<UserModel[]> {
        return this.userRepository.find();
    }

    findOne(id: string): Promise<UserModel> {
        return this.userRepository.findOne(id);
    }
}

