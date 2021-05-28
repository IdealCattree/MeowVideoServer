import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

export class BaseEntity {
  /**
   * 数据验证
   * @param skipMissing
   * @returns
   */
  public async validateThis(skipMissing: boolean = false) {
    const result: string[] = [];

    const errors = await validate(this, {
      skipMissingProperties: skipMissing,
    });
    const temp = errors.map((e) => {
      if (e.constraints) {
        return Object.values(e.constraints);
      }
    });
    temp.forEach((t) => {
      result.push(...t!);
    });
    return result;
  }

  // 类型转换
  protected static baseTransform<T>(cls: new () => T, plainObject: object): T {
    if (plainObject instanceof cls) {
      return plainObject;
    }
    return plainToClass(cls, plainObject);
  }
}
