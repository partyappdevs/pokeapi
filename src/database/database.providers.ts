import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'kevin',
        password: '12345678',
        database: 'pokedex',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
