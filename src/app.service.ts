import { Injectable } from '@nestjs/common';
import { User, Userdocument } from './user.module';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class AppService {

  constructor(
    @InjectModel('user') private readonly usermodel: Model<Userdocument>
  ){}

  //create user
  async createUser(user: User): Promise<User>
  {
    const newUser = new  this.usermodel(user)
    return newUser.save()

    } 
    
    //read logic
    async readUser(){
      return this.usermodel.find({})
      .then((user)=>{return user})
      .catch((err)=>console.log(err))

      }

      //read user by id
      async readUserById(id){
        return this.usermodel.findById( id )
      }

      //update
      async updateUser(id,data):Promise<User>{
        return this.usermodel.findByIdAndUpdate(id,data,{new:true})
      }

      //delete
      async deleteUser(id){
        return this.usermodel.findByIdAndRemove(id)
      }
    }
  

