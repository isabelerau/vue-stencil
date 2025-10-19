import { p as proxyCustomElement, H, h } from './p-WiZrlRan.js';

const loadingComponentCss = ".container{padding:20px;border:1px solid #ccc}ul{list-style:none;padding:0}li{margin:5px 0}";

const LoadingComponent$1 = /*@__PURE__*/ proxyCustomElement(class LoadingComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    data = [];
    isLoading = true;
    async componentWillLoad() {
        this.isLoading = true;
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        this.data = todos.slice(0, 5).map(todo => todo.title);
        this.isLoading = false;
    }
    render() {
        return (h("div", { key: '505c65ebedf3a4b7314e54a7905e57759c945cc8', class: "container" }, h("h1", { key: 'bffd9f8c4d77390f45dae17aed6d4fbbfcf363c1' }, "Todos"), this.isLoading ? (h("p", null, "Loading...")) : (h("ul", null, this.data.map(title => (h("li", null, title)))))));
    }
    static get style() { return loadingComponentCss; }
}, [257, "loading-component", {
        "data": [32],
        "isLoading": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["loading-component"];
    components.forEach(tagName => { switch (tagName) {
        case "loading-component":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LoadingComponent$1);
            }
            break;
    } });
}
defineCustomElement$1();

const LoadingComponent = LoadingComponent$1;
const defineCustomElement = defineCustomElement$1;

export { LoadingComponent, defineCustomElement };
//# sourceMappingURL=loading-component.js.map

//# sourceMappingURL=loading-component.js.map