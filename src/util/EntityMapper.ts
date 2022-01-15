import {Request} from "@hapi/hapi";

export class EntityMapper {
  static fromJson<Type>(json: string, entity: Type): Type {
    return Object.assign(entity, JSON.parse(json));
  }
  static fromRequest<Type>(request: Request, entity: Type): Type {
    if (typeof request.payload == "string") {
      return this.fromJson(request.payload, entity);
    }
    return null;
  }
}