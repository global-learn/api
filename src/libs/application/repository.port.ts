import { Option } from 'oxide.ts';
import { AggregateId } from '@/libs/ddd/entity.base';

export class Paginated<T> {
  readonly count: number;
  readonly limit: number;
  readonly page: number;
  readonly data: readonly T[];

  constructor(props: Paginated<T>) {
    this.count = props.count;
    this.limit = props.limit;
    this.page = props.page;
    this.data = props.data;
  }
}

export type OrderBy = { field: string; param: 'asc' | 'desc' };

export type PaginatedQueryParams = {
  limit: number;
  page: number;
  offset: number;
  orderBy: OrderBy;
};

export interface BaseRepositoryPort {
  transaction<T>(handler: () => Promise<T>): Promise<T>;
}

export interface RepositoryPort<Entity> extends BaseRepositoryPort {
  save: (entity: Entity) => Promise<void>;
  findAll: () => Promise<Entity[]>;
  findAllPaginated: (
    params: PaginatedQueryParams,
  ) => Promise<Paginated<Entity>>;
  findById: (id: AggregateId) => Promise<Option<Entity>>;
  delete: (entity: Entity) => Promise<void>;
}
