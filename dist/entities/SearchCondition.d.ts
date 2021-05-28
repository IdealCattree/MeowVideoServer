import { BaseEntity } from "./BaseEntity";
export declare class SearchCondition extends BaseEntity {
    key: string;
    page: number;
    limit: number;
    static transform(plainObject: object): SearchCondition;
}
