import {Entity, model, property} from '@loopback/repository';

@model()
export class Empresa extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  razonSocial: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  nit: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;


  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
