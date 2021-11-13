import { AddressModel } from "./addresses/address.model";
import { UserModel } from "./users/user.model";

type Query {
    user: UserModel
    address: AddressModel
}