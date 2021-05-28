import { BaseEntity } from "./BaseEntity";
export declare class Movie extends BaseEntity {
    name: string;
    types: string[];
    areas: string[];
    time: number;
    isHot: boolean;
    isComing: boolean;
    isClassic: boolean;
    description?: string;
    poster?: string;
    static transform(plainObject: object): Movie;
}
