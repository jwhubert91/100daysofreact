/// <reference types="react" />
import { VisualElement } from "../../render/VisualElement";
import { VariantLabels } from "../types";
export interface VariantContextProps {
    parent?: VisualElement;
    initial?: VariantLabels | false;
    animate?: VariantLabels;
    whileHover?: VariantLabels;
    whileTap?: VariantLabels;
    whileDrag?: VariantLabels;
    whileFocus?: VariantLabels;
    exit?: VariantLabels;
}
export interface MotionContextProps {
    visualElement?: VisualElement;
    variantContext: VariantContextProps;
}
export declare const MotionContext: import("react").Context<MotionContextProps>;
export declare function useVariantContext(): VariantContextProps;
export declare function useVisualElementContext(): VisualElement<any> | undefined;
