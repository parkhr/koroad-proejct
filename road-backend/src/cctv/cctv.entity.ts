import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cctv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column()
  cctvType: string;

  @Column()
  loadType: String;

  @Column()
  x: number;

  @Column()
  y: number;
}
