import type { Components, JSX } from "../types/components";

interface LoadingComponent extends Components.LoadingComponent, HTMLElement {}
export const LoadingComponent: {
    prototype: LoadingComponent;
    new (): LoadingComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
