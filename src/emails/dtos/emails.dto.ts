import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';


export class HandleEmailDto {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}