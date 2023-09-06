import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  WFO: string;

  @Column()
  ISSUED: string;

  @Column()
  EXPIRED: string;

  @Column()
  INIT_ISS: string;

  @Column()
  INIT_EXP: string;

  @Column()
  PHENOM: string;

  @Column()
  GTYPE: string;

  @Column()
  SIG: string;

  @Column()
  ETN: string;

  @Column()
  STATUS: string;

  @Column()
  NWS_UGC: string;

  @Column()
  AREA_KM2: string;

  @Column()
  UPDATED: string;
}
