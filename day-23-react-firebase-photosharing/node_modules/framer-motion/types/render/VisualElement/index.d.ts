import { Ref } from "react";
import { MotionValue } from "../../value";
import { VisualElementConfig, ResolvedValues } from "./types";
import { AxisBox2D } from "../../types/geometry";
import { Snapshot } from "../../components/AnimateSharedLayout/utils/stack";
import { Target, TargetAndTransition, Variants } from "../../types";
import { startAnimation } from "../../animation/utils/transitions";
import { AnimationState } from "./utils/animation-state";
import { MotionProps } from "../../motion/types";
/**
 * VisualElement is an abstract class that provides a generic animation-optimised interface to the
 * underlying renderer.
 *
 * Currently many features interact directly with HTMLVisualElement/SVGVisualElement
 * but the idea is we can create, for instance, a ThreeVisualElement that extends
 * VisualElement and we can quickly offer all the same features.
 */
export declare abstract class VisualElement<E = any> {
    parent?: VisualElement<E>;
    rootParent: VisualElement<E>;
    children: Set<VisualElement<E>>;
    variantChildren?: Set<VisualElement<E>>;
    animationState?: AnimationState;
    manuallyAnimateOnMount?: boolean;
    inheritsVariants?: boolean;
    /**
     * A set of values that we animate back to when a value is cleared of all overrides.
     */
    baseTarget: Target;
    getVariantPayload(): any;
    getVariant(label: string): Variants;
    addVariantChild(visualElement: VisualElement<E>): () => boolean;
    variantChildrenOrder?: Set<VisualElement<E>>;
    addVariantChildOrder(visualElement: VisualElement<E>): void;
    onAnimationStart(): void;
    onAnimationComplete(): void;
    getDefaultTransition(): any;
    prevSnapshot?: Snapshot;
    latest: ResolvedValues;
    private removeFromParent?;
    animateMotionValue?: typeof startAnimation;
    protected element: E;
    values: Map<string, MotionValue<any>>;
    private valueSubscriptions;
    private externalRef?;
    protected treePath: VisualElement[];
    protected config: VisualElementConfig;
    isPresenceRoot?: boolean;
    isMounted: boolean;
    presenceId: number;
    current: E;
    readonly depth: number;
    constructor(parent?: VisualElement<E>, ref?: Ref<E>);
    subscribe(child: VisualElement<E>): () => boolean;
    hasValue(key: string): boolean;
    addValue(key: string, value: MotionValue): void;
    removeValue(key: string): void;
    getValue<Value>(key: string): MotionValue<Value> | undefined;
    getValue<Value>(key: string, defaultValue: Value): MotionValue<Value>;
    forEachValue(callback: (value: MotionValue, key: string) => void): void;
    getInstance(): E;
    updateConfig(config?: VisualElementConfig): void;
    private update;
    abstract render(): void;
    abstract build(isReactRender: boolean): void;
    abstract clean(): void;
    abstract readNativeValue(key: string): string | number;
    abstract getBoundingBox(): AxisBox2D;
    abstract updateLayoutDelta(): void;
    abstract makeTargetAnimatable(targetAndTransition: TargetAndTransition, parseDOMValues?: boolean): TargetAndTransition;
    getBaseValue(key: string, _props: MotionProps): any;
    private setSingleStaticValue;
    setStaticValues(values: string | ResolvedValues, value?: string | number): void;
    triggerRender: () => void;
    scheduleRender(): void;
    scheduleUpdateLayoutDelta(): void;
    private subscribeToValue;
    protected mount(element: E): void;
    private unmount;
    ref: (element: E | null) => void;
}
