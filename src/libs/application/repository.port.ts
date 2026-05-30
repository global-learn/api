export interface RepositoryPort {
  transaction<T>(handler: () => Promise<T>): Promise<T>;
}
