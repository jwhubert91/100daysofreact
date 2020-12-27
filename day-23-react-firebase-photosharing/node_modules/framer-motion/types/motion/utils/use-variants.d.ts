import { AnimationControls } from "../../animation/AnimationControls";
import { VisualElement } from "../../render/VisualElement";
import { VariantContextProps } from "../context/MotionContext";
import { MotionProps } from "../types";
/**
 * This hook is resonsible for creating the variant-propagation tree
 * relationship between VisualElements.
 */
export declare function useVariants(visualElement: VisualElement, props: MotionProps, isStatic: boolean): VariantContextProps;
export declare function isAnimationControls(v?: unknown): v is AnimationControls;
