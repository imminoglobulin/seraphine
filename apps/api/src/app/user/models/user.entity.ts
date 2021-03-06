import { AutoMap } from "@automapper/classes";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, Unique, VersionColumn } from "typeorm";

@Entity()
@Unique(["username", "email"])
export class User {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column({ unique: true })
  username: string;

  @AutoMap()
  @Column({default: null})
  email: string;

  @AutoMap()
  @Column()
  firstName: string;

  @AutoMap()
  @Column()
  lastName: string;

  @Column()
  @AutoMap()
  password: string;

  @AutoMap()
  @Column()
  role: string;

  @AutoMap()
  @Column({ default: true })
  isActive: boolean;

  @VersionColumn()
  version: number;

  @BeforeInsert()
  emailToLowerCase() {
    if (this.email) {
      this.email = this.email.toLowerCase();
    }
  }
}
