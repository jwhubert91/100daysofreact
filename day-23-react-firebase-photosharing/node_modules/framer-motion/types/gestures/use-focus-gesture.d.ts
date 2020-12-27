import { TargetAndTransition } from "../types";
import { VisualElement } from "../render/VisualElement";
import { MotionProps, VariantLabels } from "../motion/types";
/**
 * @public
 */
export interface FocusHandlers {
    /**
     * Properties or variant label to animate to while the focus gesture is recognised.
     *
     * @motion
     *
     * ```jsx
     * <motion.input whileFocus={{ scale: 1.2 }} />
     * ```
     */
    whileFocus?: VariantLabels | TargetAndTransition;
}
/**
 *
 * @param props
 * @param ref
 * @internal
 */
export declare function useFocusGesture({ whileFocus }: MotionProps, visualElement: VisualElement): void;
