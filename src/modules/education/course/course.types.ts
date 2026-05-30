export interface CourseProps {
  name: string;
  description: string;
  authorId: string;
  coverId: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface CreateCourseProps {
  name: string;
  description: string;
  authorId: string;
  coverId: string;
}
