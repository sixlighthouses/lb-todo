import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TestpgDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(
    @inject('datasources.testpg') dataSource: TestpgDataSource,
  ) {
    super(Todo, dataSource);
  }
}
