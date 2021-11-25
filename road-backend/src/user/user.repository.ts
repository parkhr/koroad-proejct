import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findOneByEmail(email: string): Promise<User> {
    return this.createQueryBuilder('user')
      .where('user.email = (:email)', {
        email,
      })
      .getOne();
  }
}
