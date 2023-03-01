import { IsNotEmpty } from "@nestjs/class-validator";

export class CreateNewsDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    category: string;

    @IsNotEmpty()
    description: string
    
    imagelink: string
}