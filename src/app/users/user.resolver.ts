import { UserModel } from './user.model';
import { InvoiceService } from '../services/';
import { CustomerService } from './customer.service';
import { AddressModel } from '../addresses/address.model';
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver(of => UserModel)
export class UserResolver {
    constructor() {

    }
    @Query(returns => UserModel)
    async user(@Args('id') id:string):Promise<UserModel>{
        return await 
    }
}