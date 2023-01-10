import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Tree,
  UpdateDateColumn,
} from 'typeorm'
import {Position} from './position.entity'

@Entity()
@Tree('materialized-path')
export class Employee {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number

  @Column({name: 'first_name', type: 'varchar'})
  firstName: string

  @Column({name: 'last_name', type: 'varchar'})
  lastName: string

  @Column({name: 'email', type: 'varchar'})
  email: string

  @OneToOne(() => Position)
  @JoinColumn({name: 'position_id'})
  position: Position

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  createdAt: Date

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  updatedAt: Date

  @DeleteDateColumn({name: 'deleted_at', type: 'datetime'})
  deletedAt: Date
}
