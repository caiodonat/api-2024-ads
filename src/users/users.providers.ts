import { DataSource } from 'typeorm';
import { UserEntity } from './entities/user.entity';

export const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];