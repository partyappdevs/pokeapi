import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'postgresql-kevinosorio1301-dev.apps.sandbox.x8i5.p1.openshiftapps.com',
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
