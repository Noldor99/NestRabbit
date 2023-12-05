import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  async saveCat(name: string): Promise<Cat> {
    const cat = this.catRepository.create({ name });
    return await this.catRepository.save(cat);
  }
}
