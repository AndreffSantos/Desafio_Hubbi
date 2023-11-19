import { Controller, HttpStatus, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { Response } from 'express'


@Controller("upload")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {dest: 'uploads/'}))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    const data = this.appService.getData(file)

    const insert = await this.appService.saveTransactions(data)

    res.status(HttpStatus.CREATED).json({
      message: `${insert.count} Transações foram adiconadas.`,
      transactions: data
    })
  }
}
