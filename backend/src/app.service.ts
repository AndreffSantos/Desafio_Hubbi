import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import { Transaction } from './entities/entities';

@Injectable()
export class AppService {
  getData(file: Express.Multer.File): Transaction[] {
    let transaction = new Array()
    const linesFile = fs.readFileSync(`uploads/${file.filename}`, 'utf-8').split('\r\n')

    fs.rm(`uploads/${file.filename}`, (err) => {if(err) console.log(err.message)})
    
    for(let line in linesFile){
      transaction.push({
        tipo: Number(linesFile[line].split('').splice(0,1).join('')),
        data: new Date(linesFile[line].split('').splice(1,24).join('')),
        produto: linesFile[line].split('').splice(25,30).join(''),
        valor: Number(linesFile[line].split('').splice(55,10).join('')),
        vendedor: linesFile[line].split('').splice(65,20).join(''),
      })
    }
    return transaction;
  }
}
