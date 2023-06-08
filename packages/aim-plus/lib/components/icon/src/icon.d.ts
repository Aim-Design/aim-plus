export declare const svgs: Record<string, string>;
export declare const IconProps: {
    name: StringConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    size: (StringConstructor | NumberConstructor)[];
};
export declare const getIcon: (name?: string | undefined) => string;
