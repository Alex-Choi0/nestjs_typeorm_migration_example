// src/users/entities/user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment') // 기존 Column
  id: number;

  @Column({ unique: true }) // 기존 Column
  email: string;
}
