import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Funcionario } from '../entities/funcionario.entity';
@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
  ) {}

  async findAll(): Promise<Funcionario[]> {
    return await this.funcionarioRepository.find();
  }

  async findById(id: number): Promise<Funcionario | null> {
    const funcionario = await this.funcionarioRepository.findOne({
      where: { id },
    });
    if (!funcionario)
      throw new HttpException('Funcionário não encontrado!', 404);
    return funcionario;
  }

  async findBySetor(setor: string): Promise<Funcionario[]> {
    const funcionarios = await this.funcionarioRepository.find({
      where: { setor: ILike(`%${setor}%`) },
    });
  }

  async findByStatus(ativo: boolean): Promise<Funcionario[]> {
    return await this.funcionarioRepository.find({
      where: { ativo },
    });
  }

  async create(funcionario: Funcionario): Promise<Funcionario> {
    return await this.funcionarioRepository.save(funcionario);
  }

  async update(): Promise<Funcionario> {}

  async delete(): Promise<void> {}
}
