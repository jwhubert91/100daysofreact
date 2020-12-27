import { VisualElement } from "..";
import { VariantLabels, TargetAndTransition, Transition } from "../../..";
import { Target, TargetResolver, TargetWithKeyframes } from "../../../types";
import { AnimationType } from "./animation-state";
export declare type AnimationDefinition = VariantLabels | TargetAndTransition | TargetResolver;
export declare type AnimationOptions = {
    delay?: number;
    transitionOverride?: Transition;
    custom?: any;
    type?: AnimationType;
};
export declare type MakeTargetAnimatable = (visualElement: VisualElement, target: TargetWithKeyframes, origin?: Target, transitionEnd?: Target) => {
    target: TargetWithKeyframes;
    transitionEnd?: Target;
};
/**
 * @internal
 */
export declare function animateVisualElement(visualElement: VisualElement, definition: AnimationDefinition, options?: AnimationOptions): Promise<void>;
export declare function stopAnimation(visualElement: VisualElement): void;
