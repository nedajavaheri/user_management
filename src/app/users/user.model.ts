import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { AddressModel } from '../addresses/address.model'


@ObjectType()
@Entity()
export class UserModel {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column({ length: 400, nullable: false })
    name: string;

    @Field()
    @Column('text', { nullable: false })
    email: string;

    @Field(type => [AddressModel], { nullable: true })
    @OneToMany(type => AddressModel, address => address.user)
    addresses: AddressModel[];

    @Field()
    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Field()
    @Column()
    @UpdateDateColumn()
    updated_at: Date;
}