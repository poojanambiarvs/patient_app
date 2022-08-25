import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
//import { Userdocument } from "./user.module"
import { Document } from "mongoose";


export type Userdocument = User & Document

@Schema()
export class User {

    @Prop()
    Id:number;
    
    @Prop()
    fname: string;

    @Prop()
    sname: string;

    @Prop()
    gender: string;

    @Prop()
    disease: string;

    @Prop()
    age: number;

   @Prop({ default: Date.now })
   date_added: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)