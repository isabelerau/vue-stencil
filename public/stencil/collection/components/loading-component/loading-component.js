import { h } from "@stencil/core";
export class LoadingComponent {
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
    static get is() { return "loading-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["loading-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["loading-component.css"]
        };
    }
    static get states() {
        return {
            "data": {},
            "isLoading": {}
        };
    }
}
//# sourceMappingURL=loading-component.js.map
