import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { Funcionario } from '../entities/funcionario.entity';
@Injectable()
export class FuncionarioService {
  postagemRepository: any;
  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
  ) {}

  async findAll(): Promise<Funcionario[]> {
    return await this.funcionarioRepository.find();
  }

  async findById(id: number): Promise<Funcionario | null> {
    const funcionario = await this.funcionarioRepository.findOne({
      where : { id }
    });
    if (!funcionario) throw new HttpException('Funcionário não encontrado!', 404);
    return funcionario;
  }

  async findBySetor(): Promise<Funcionario[]> {}

  async findByStatus(): Promise<Funcionario[]> {}

  async create(funcionario: Funcionario): Promise<Funcionario> {
    return await this.funcionarioRepository.save(funcionario);
  }

  async update(): Promise<Funcionario> {}

  async delete(id: number): Promise<void> {
    const funcionario = await this.findById(id);

    if (!funcionario) {
      throw new HttpException('Funcionário não encontrado!', 404);
    }

    await this.funcionarioRepository.delete(id);
  }
}
