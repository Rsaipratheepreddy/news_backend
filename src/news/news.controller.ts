import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('news')
export class NewsController {

    @Post()
    createNews(){}

    @Put()
    updateNews(){}

    @Get()
    getNews(){}
}
