import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findOneByEmail(email: string): Promise<User | undefined>{
        return this.findOne({email: email})        
    }
}