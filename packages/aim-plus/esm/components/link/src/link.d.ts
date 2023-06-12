import { ExtractPropTypes } from 'vue';
export declare const LinkTypes: string[];
export declare const LinkProps: {
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    icon: StringConstructor;
    href: StringConstructor;
    disabled: BooleanConstructor;
    underline: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type LinkProps = ExtractPropTypes<typeof LinkProps>;
