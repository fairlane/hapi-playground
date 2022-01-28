import {DeepPartial, EntityTarget, getConnection, Repository} from "typeorm";
import {EntityWithIdentity} from "../entity/EntityWithIdentity";

export class RepositoryAwareService<T extends EntityWithIdentity> {
  private readonly repository: Repository<T>;

  public getRepository(): Repository<T> {
    return this.repository;
  }

  constructor(repo: EntityTarget<T>) {
    this.repository = getConnection().getRepository(repo);
  }

  public async findAll(): Promise<T[]>  {
    return this.repository.find();
  }

  public async add(entity: DeepPartial<T>): Promise<T>  {
    return this.repository.save(entity);
  }

  public async save(entity: DeepPartial<T>): Promise<T>  {
    return this.repository.save(entity);
  }
}