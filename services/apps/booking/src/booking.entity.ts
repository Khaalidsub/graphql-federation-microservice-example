import { IBooking } from "@apps/common/interfaces";
import { ObjectType, Directive } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'
import * as mongoose from "mongoose";
export type BookingDocument = Booking & Document
@ObjectType({implements:()=>[IBooking]})
@Directive('@key(fields: "id")')
@Schema()
export class Booking implements IBooking{
    id:string
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    student: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    tutor: string;
    @Prop()
    date: Date;
}
export const BookingSchema = SchemaFactory.createForClass(Booking);