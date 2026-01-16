import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { Funcionario } from '../entities/funcionario.entity';
@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
  ) {}

  async findAll(): Promise<Funcionario[]> {}

  async findById(): Promise<Funcionario | null> {}

  async findBySetor(): Promise<Funcionario[]> {}

  async findByStatus(): Promise<Funcionario[]> {}

  async create(): Promise<Funcionario> {}

  async update(): Promise<Funcionario> {}

  async delete(): Promise<void> {}
}
