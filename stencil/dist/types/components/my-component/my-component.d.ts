import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyComponent {
    /**
     * Name parts
     */
    first?: string;
    middle?: string;
    last?: string;
    /**
     * UI config
     */
    cardTitle: string;
    theme: 'light' | 'dark';
    /**
     * Internal state
     */
    isExpanded: boolean;
    customMessage: string;
    /**
     * Event emitted when user clicks button
     */
    action: EventEmitter<string>;
    private getText;
    private toggle;
    private handleInput;
    private emitAction;
    render(): any;
}
