import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'funcionario' })
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;

  @Column({ type: 'varchar', length: 255 })
  cargo: string;

  @Column({ type: 'decimal', precision: 8, scale: 2 })
  salario: number;

  @Column({ type: 'date' })
  data_admissao: Date;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;
}
