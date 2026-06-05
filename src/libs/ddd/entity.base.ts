export type AggregateId = string;

interface CreateEntityProps<T> {
  id: AggregateId;
  props: T;
}

export abstract class Entity<EntityProps> {
  protected abstract _id: AggregateId;
  protected _props: EntityProps;

  protected constructor({ id, props }: CreateEntityProps<EntityProps>) {
    this.id = id;
    this.props = props;
  }

  get id() {
    return this._id;
  }

  private set id(id: AggregateId) {
    this._id = id;
  }

  private set props(props: EntityProps) {
    this._props = props;
  }

  getProps() {
    return Object.freeze({
      id: this.id,
      ...this.props,
    });
  }
}
