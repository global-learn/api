import { CourseEntity } from '@/modules/education/course/domain/course.entity';

export interface CourseRepositoryPort {
  save(course: CourseEntity): Promise<void>;
  findAll(): Promise<CourseEntity[]>;
}
