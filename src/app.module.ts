import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://poojakashvi94:79mnx3t4J3jW7xoM@atlascluster.dc5ceym.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'user', schema:UserSchema}])

    
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
