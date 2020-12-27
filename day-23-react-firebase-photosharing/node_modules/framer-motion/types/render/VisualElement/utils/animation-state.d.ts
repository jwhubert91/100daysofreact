import { VisualElement } from "..";
import { MotionProps } from "../../../motion";
import { VariantContextProps } from "../../../motion/context/MotionContext";
import { TargetAndTransition } from "../../../types";
import { AnimationOptions } from "./animation";
export interface AnimationState {
    setProps: (props: MotionProps, context?: VariantContextProps, options?: AnimationOptions, type?: AnimationType) => Promise<any>;
    setActive: (type: AnimationType, isActive: boolean, options?: AnimationOptions) => Promise<any>;
    setAnimateFunction: (fn: any) => void;
    getProtectedKeys: (type: AnimationType) => {
        [key: string]: any;
    };
}
export declare enum AnimationType {
    Animate = "animate",
    Hover = "whileHover",
    Tap = "whileTap",
    Drag = "whileDrag",
    Focus = "whileFocus",
    Exit = "exit"
}
export declare type AnimationList = string[] | TargetAndTransition[];
export declare const variantPriorityOrder: AnimationType[];
export declare function createAnimationState(visualElement: VisualElement): AnimationState;
export declare function variantsHaveChanged(prev: any, next: any): boolean;
