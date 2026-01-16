import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Funcionario } from '../entities/funcionario.entity';
import { FuncionarioService } from '../services/funcionario.service';

@Controller('/funcionarios')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Funcionario[]> {
    return this.funcionarioService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Funcionario | null> {
    return this.funcionarioService.findById(id);
  }

  @Get('/setor/:setor')
  @HttpCode(HttpStatus.OK)
  findBySetor(@Param('setor') setor: string): Promise<Funcionario[]> {
    return this.funcionarioService.findBySetor(setor);
  }

  @Get('/status/:status')
  @HttpCode(HttpStatus.OK)
  findByStatus(@Param('status') status: string): Promise<Funcionario[]> {
    const ativo = status === 'true';
    return this.funcionarioService.findByStatus(ativo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() funcionario: Funcionario): Promise<Funcionario> {
    return this.funcionarioService.create(funcionario);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() funcionario: Funcionario): Promise<Funcionario> {
    return this.funcionarioService.update(funcionario);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.funcionarioService.delete(id);
  }
}
