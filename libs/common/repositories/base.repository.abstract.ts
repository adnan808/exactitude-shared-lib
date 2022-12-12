import { Repository } from 'typeorm';

class BaseRepository<T> {
  public db: Repository<T>;
  constructor(usersRepository: Repository<T>) {
    this.db = usersRepository;
  }
}

export default BaseRepository;
