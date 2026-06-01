import { AggregateId } from '@/libs/ddd/entity.base';

export interface ModuleProps {
  name: string;
  orderNumber: number;
  courseId: AggregateId;
  createdAt: Date;
  updatedAt?: Date;
}

export interface CreateModuleProps {
  name: string;
  orderNumber: number;
  courseId: AggregateId;
}
