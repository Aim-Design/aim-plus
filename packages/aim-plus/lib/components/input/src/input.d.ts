import { ExtractPropTypes } from 'vue';
export declare const InputProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixIcon: {
        type: StringConstructor;
    };
    prefixIcon: {
        type: StringConstructor;
    };
    showPassword: BooleanConstructor;
    autofocus: BooleanConstructor;
};
export declare type InputTypes = ExtractPropTypes<typeof InputProps>;
