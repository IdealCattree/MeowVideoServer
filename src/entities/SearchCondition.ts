import { IsInt, IsString, Min } from "class-validator";
import { Type } from "class-transformer";
import { BaseEntity } from "./BaseEntity";
export class SearchCondition extends BaseEntity {
  @IsString({ message: "关键字必须是字符串" })
  @Type(() => String)
  key: string = "";

  @IsInt({ message: "页码必须是数字" })
  @Min(1, { message: "最小值为1" })
  @Type(() => Number)
  page: number = 1;

  @IsInt({ message: "页容量必须是数字" })
  @Min(1, { message: "最小值为1" })
  @Type(() => Number)
  limit: number = 10;

  /**
   * 重写父类的 类型转换方法
   * @param plainObject
   * @returns
   */
  public static transform(plainObject: object) {
    return super.baseTransform(SearchCondition, plainObject);
  }
}
