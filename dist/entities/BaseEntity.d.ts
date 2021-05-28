export declare class BaseEntity {
    validateThis(skipMissing?: boolean): Promise<string[]>;
    protected static baseTransform<T>(cls: new () => T, plainObject: object): T;
}
