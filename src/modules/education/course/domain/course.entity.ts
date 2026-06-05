import { randomUUID } from 'node:crypto';
import {
  CourseProps,
  CreateCourseProps,
} from '@/modules/education/course/course.types';
import { AggregateId, Entity } from '@/libs/ddd/entity.base';

export class CourseEntity extends Entity<CourseProps> {
  protected readonly _id: AggregateId;

  private constructor(props: CreateCourseProps) {
    super({
      id: randomUUID(),
      props: {
        ...props,
        createdAt: new Date(),
      },
    });
  }

  static create(props: CreateCourseProps) {
    return new CourseEntity(props);
  }
}
