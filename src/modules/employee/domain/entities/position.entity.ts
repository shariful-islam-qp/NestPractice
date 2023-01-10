import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
@Tree('materialized-path')
export class Position {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number

  @Column({name: 'title', type: 'varchar'})
  title: string

  @TreeChildren()
  children: Position[]

  @TreeParent()
  parent: Position

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  createdAt: Date

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  updatedAt: Date

  @DeleteDateColumn({name: 'deleted_at', type: 'datetime'})
  deletedAt: Date
}
