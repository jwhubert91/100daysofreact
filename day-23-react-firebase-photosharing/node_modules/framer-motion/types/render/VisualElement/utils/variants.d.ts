import { VisualElement } from "../";
import { TargetAndTransition, TargetResolver } from "../../../types";
/**
 * Decides if the supplied variable is an array of variant labels
 */
export declare function isVariantLabels(v: unknown): v is string[];
/**
 * Decides if the supplied variable is variant label
 */
export declare function isVariantLabel(v: unknown): v is string | string[];
/**
 * Resovles a variant if it's a variant resolver
 */
export declare function resolveVariant(visualElement: VisualElement, definition?: string | TargetAndTransition | TargetResolver, custom?: any): TargetAndTransition | undefined;
