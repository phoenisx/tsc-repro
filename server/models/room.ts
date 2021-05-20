import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "room" })
export class Room {
  @PrimaryColumn({ name: "id" })
  id!: string;

  @Column({ name: "session_id" })
  sessionId!: string;
}
