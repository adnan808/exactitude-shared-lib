import { Repository } from 'typeorm';

abstract class BaseRepository<T> {
  public db: Repository<T>;
  protected constructor(usersRepository: Repository<T>) {
    this.db = usersRepository;
  }
}

export default BaseRepository;
