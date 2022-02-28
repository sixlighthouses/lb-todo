import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'testpg',
  connector: 'postgresql',
  url: 'postgres://postgres:mysecretpassword@172.17.0.2/postgres',
  host: '172.17.0.2',
  port: 5432,
  user: 'postgres',
  password: 'mysecretpassword',
  database: 'postgres'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TestpgDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'testpg';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.testpg', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
