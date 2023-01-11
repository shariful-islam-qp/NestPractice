import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm'
import {Employee} from './employee.entity'

@Entity()
@Tree('materialized-path')
export class Position {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number

  @Column({name: 'title', type: 'varchar'})
  title: string

  @TreeChildren()
  children: Position[]

  @TreeParent()
  parent: Position

  @OneToMany(() => Employee, (employee: Employee) => employee.position)
  employees: Employee[]

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  createdAt: Date

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  updatedAt: Date

  @DeleteDateColumn({name: 'deleted_at', type: 'datetime'})
  deletedAt: Date
}
