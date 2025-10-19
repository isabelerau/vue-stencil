import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyComponent {
    name: string;
    inputValue: string;
    nameChanged: EventEmitter<string>;
    handleInput(e: Event): void;
    render(): any;
}
