import { ArrayMinSize, IsNotEmpty, Max, Min, validate } from "class-validator";
import { Type, plainToClass } from "class-transformer";
import { BaseEntity } from "./BaseEntity";
export class Movie extends BaseEntity {
  @IsNotEmpty({ message: "电影名称不能为空" })
  @Type(() => String)
  public name: string;

  @IsNotEmpty({ message: "电影类型不可以为空" })
  @ArrayMinSize(1, { message: "电影类型至少有一个" })
  @Type(() => String)
  public types: string[];

  @IsNotEmpty({ message: "电影地区不可以为空" })
  @ArrayMinSize(1, { message: "电影地区至少有一个" })
  @Type(() => String)
  public areas: string[];

  @IsNotEmpty({ message: "电影时长不能为空" })
  @Min(1, { message: "电影时长最少为1分钟" })
  @Max(999999, { message: "电影时长过长" })
  @Type(() => Number)
  public time: number;

  @IsNotEmpty({ message: "是否热映不能为空" })
  @Type(() => Boolean)
  public isHot: boolean;

  @IsNotEmpty({ message: "是否即将上映不能为空" })
  @Type(() => Boolean)
  public isComing: boolean;

  @IsNotEmpty({ message: "是否为经典影片不能为空" })
  @Type(() => Boolean)
  public isClassic: boolean;

  @Type(() => String)
  public description?: string;

  @Type(() => String)
  public poster?: string;

  // 类型转换
  public static transform(plainObject: object): Movie {
    return super.baseTransform(Movie, plainObject);
  }
}
