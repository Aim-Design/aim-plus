import type { PropType } from 'vue';
declare function typeValidator(type: string): boolean;
declare function sizeValidator(size: string): boolean;
export declare const ButtonProps: {
    type: {
        type: PropType<"default" | "primary" | "info" | "success" | "warning" | "danger">;
        default: string;
        validator: typeof typeValidator;
    };
    size: {
        type: PropType<"small" | "middle" | "large">;
        validator: typeof sizeValidator;
    };
    plain: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
    text: BooleanConstructor;
    icon: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    textColor: {
        type: StringConstructor;
    };
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export {};
