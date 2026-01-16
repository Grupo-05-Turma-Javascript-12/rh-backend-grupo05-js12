import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './funcionario/entities/funcionario.entity';
import { FuncionarioModule } from './funcionario/funcionario.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'empresa_db',
      entities: [Funcionario],
      synchronize: true,
    }),
    FuncionarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
