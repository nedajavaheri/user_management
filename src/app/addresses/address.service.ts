import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressModel } from './address.model';
import { AddressDTO } from './address.dto';
import { UserService } from '../users/user.service';


@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressModel)
        private addressRepository: Repository<AddressModel>,
        private userService: UserService
    ) { }

    create(detail: AddressDTO): Promise<AddressModel> {
        const user = this.userService.findOne(detail.user);
        return this.addressRepository.save({
            ...detail,
            user
        } as any);
    }

    findOne(id: string): Promise<AddressModel> {
        return this.addressRepository.findOne(id);
    }

    findAll(): Promise<AddressModel[]> {
        return this.addressRepository.find();
    }


    findByUser(id: string): Promise<AddressModel[]> {
        return this.addressRepository.createQueryBuilder("address")
            .where("address.user= :id", { id }).getMany();
    }

}

