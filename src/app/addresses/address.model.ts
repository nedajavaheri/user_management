import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { UserModel } from '../users/user.model'

@ObjectType()
@Entity()
export class AddressModel {
    @Field()
    @Column()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column('string', { nullable: false })
    country: string;

    @Field()
    @Column('string', { nullable: false })
    county: string;

    @Field()
    @Column('string', { nullable: false })
    city: string;

    @Field()
    @Column('string', { nullable: true })
    block: string;

    @Field()
    @Column('string', { nullable: true })
    street: string;

    @Field()
    @Column('string', { nullable: true })
    zip_code: string;

    @Field(type => [UserModel], { nullable: false })
    @ManyToOne(type => UserModel, user => user.addresses)
    user: UserModel;

    @Field()
    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Field()
    @Column()
    @UpdateDateColumn()
    updated_at: Date;

}