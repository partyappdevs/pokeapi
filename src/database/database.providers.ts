import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'postgresql-kevinosorio-code-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com',
        port: 5000,
        username: 'kevin',
        password: 'U4ut0n0m4',
        database: 'pokedex',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
