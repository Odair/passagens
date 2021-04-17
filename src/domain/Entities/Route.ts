import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Route {
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column({ type: 'text' })
    public from: string = '';

    @Column({ type: 'text' })
    public to: string = '';

    @Column({ type: 'bigint' })
    public price: number = 0;

    @CreateDateColumn({
      nullable: false
    })
    public createdAt: Date = null;

    @UpdateDateColumn({
      nullable: false
    })
    public updatedAt: Date = null;

    constructor (props: Omit<Route, 'id'|'createdAt'|'updatedAt'>) {
      Object.assign(this, props)
      this.createdAt = new Date()
      this.updatedAt = new Date()
    }
}
