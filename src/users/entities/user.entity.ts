import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({
    generatedType: 'STORED',
    asExpression: `name || ' ' || lastname`,
  })
  fullname: string;

  @Column({ unique: true })
  username: string;

  @Column({})
  password: string;
}
