import { Module } from '@nestjs/common';
import { CourseController } from '@/modules/education/course/presentation/course.controller';

@Module({
  controllers: [CourseController],
})
export class EducationModule {}
