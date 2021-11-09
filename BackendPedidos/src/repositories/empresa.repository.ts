import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Empresa, EmpresaRelations} from '../models';

export class EmpresaRepository extends DefaultCrudRepository<
  Empresa,
  typeof Empresa.prototype.nit,
  EmpresaRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Empresa, dataSource);
  }
}
