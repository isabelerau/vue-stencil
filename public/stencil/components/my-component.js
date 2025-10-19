import { p as proxyCustomElement, H, c as createEvent, h } from './p-WiZrlRan.js';

const myComponentCss = ".container{padding:20px;border:1px solid #ccc;border-radius:4px}h1{color:#007bff}button{padding:8px 16px;background:#007bff;color:white;border:none;cursor:pointer}button:hover{background:#0056b3}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
        this.nameChanged = createEvent(this, "nameChanged");
    }
    name = 'Guest';
    inputValue = '';
    nameChanged;
    handleInput(e) {
        this.inputValue = e.target.value;
        this.nameChanged.emit(this.inputValue);
    }
    render() {
        return (h("div", { key: 'c0ccc2774b341ff1cbd312f15ffd5f63233ad613', class: "container" }, h("h1", { key: '9f706d0adfb97250fad0c7684d475b55f877fda5' }, "Hello, ", this.name, "!"), h("input", { key: '2adc49ddeb8a18174c1fbd1af1708fffeafc0ba1', type: "text", value: this.inputValue, onInput: e => this.handleInput(e), placeholder: "Enter name" })));
    }
    static get style() { return myComponentCss; }
}, [257, "my-component", {
        "name": [1],
        "inputValue": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
//# sourceMappingURL=my-component.js.map

//# sourceMappingURL=my-component.js.map