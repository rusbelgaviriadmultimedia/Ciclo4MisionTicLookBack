import {Entity, model, property} from '@loopback/repository';

@model()
export class Remision extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_Remision?: string;

  @property({
    type: 'string',
    required: true,
  })
  elemento: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;


  constructor(data?: Partial<Remision>) {
    super(data);
  }
}

export interface RemisionRelations {
  // describe navigational properties here
}

export type RemisionWithRelations = Remision & RemisionRelations;
