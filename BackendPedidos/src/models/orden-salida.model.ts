import {Entity, model, property} from '@loopback/repository';

@model()
export class OrdenSalida extends Entity {
  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id_orden?: string;

  @property({
    type: 'string',
    required: true,
  })
  Lugar: string;


  constructor(data?: Partial<OrdenSalida>) {
    super(data);
  }
}

export interface OrdenSalidaRelations {
  // describe navigational properties here
}

export type OrdenSalidaWithRelations = OrdenSalida & OrdenSalidaRelations;
