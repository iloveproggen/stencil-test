import { r as registerInstance, c as createEvent, h } from './index-DgCTx5eZ.js';
import { format } from './index.js';

const myComponentCss = () => `:host{display:block}`;

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.action = createEvent(this, "action");
    }
    /**
     * Name parts
     */
    first;
    middle;
    last;
    /**
     * UI config
     */
    cardTitle = 'Welcome Card';
    theme = 'light';
    /**
     * Internal state
     */
    isExpanded = false;
    customMessage = '';
    /**
     * Event emitted when user clicks button
     */
    action;
    getText() {
        return format(this.first, this.middle, this.last);
    }
    toggle = () => {
        this.isExpanded = !this.isExpanded;
    };
    handleInput = (event) => {
        const input = event.target;
        this.customMessage = input.value;
    };
    emitAction = () => {
        this.action.emit(`User clicked button: ${this.getText()}`);
    };
    render() {
        return (h("div", { key: '34a3443f17417f965b8fb576091e9f0d33062b27', class: `card ${this.theme}` }, h("h2", { key: 'dd5de9a152ce86e5ad107b3df438cab2e437f8a7' }, this.cardTitle), h("p", { key: '78ffa6b5c8a252055419cacc797ea3d8da8d52a4', class: "name" }, "Hello \uD83D\uDC4B I'm ", h("strong", { key: '0e154e840ba6d4a2477712a683662f35b58b7b95' }, this.getText())), h("button", { key: 'cae3f602b52556ab932ed7436f1675a2dc3a5dbf', onClick: this.toggle }, this.isExpanded ? 'Hide details' : 'Show details'), this.isExpanded && (h("div", { key: '0bd576103a19f436e2c00824c4a9a1ba20c3d40f', class: "details" }, h("input", { key: 'cf2222331e78bb422dd489609c663d5995d05d15', type: "text", placeholder: "Type a message...", onInput: this.handleInput }), h("p", { key: '91d3ffe36becc93d83eef71b46b704c5ed268036', class: "message" }, this.customMessage || 'No message yet'), h("button", { key: 'df1ba22749464ceddc6e3b8dff35144803a07593', onClick: this.emitAction }, "Trigger Event")))));
    }
};
MyComponent.style = myComponentCss();

export { MyComponent as my_component };
