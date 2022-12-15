import { FindOptionsWhere, Repository } from 'typeorm';

export abstract class BaseRepository<T> {
  public db: Repository<T>;
  protected constructor(usersRepository: Repository<T>) {
    this.db = usersRepository;
  }

  async findOneBy(where: FindOptionsWhere<T>): Promise<T | null> {
    return this.db.findOneBy(where);
  }

  async findBy(where: FindOptionsWhere<T>) {
    return this.db.findBy(where);
  }
}
