import { Controller, Delete, Get, HttpCode, HttpStatus, Post, Put } from "@nestjs/common";
import { FuncionarioService } from "../services/funcionario.service";

@Controller('/funcionarios')
export class Funcionario {
    constructor(private readonly funcionarioService: FuncionarioService) {}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Funcionario[]> {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findById(): Promise<Funcionario> {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findBySetor(): Promise<Funcionario[]> {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findByStatus(): Promise<Funcionario[]> {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(): Promise<Funcionario> {}

    @Put()
    @HttpCode(HttpStatus.OK)
    update(): Promise<Funcionario> {}

    @Delete()
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(): void {}
}