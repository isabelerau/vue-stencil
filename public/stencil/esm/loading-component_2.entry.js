import { r as registerInstance, h, c as createEvent } from './index-4eZ7Wr37.js';

const loadingComponentCss = ".container{padding:20px;border:1px solid #ccc}ul{list-style:none;padding:0}li{margin:5px 0}";

const LoadingComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
LoadingComponent.style = loadingComponentCss;

const myComponentCss = ".container{padding:20px;border:1px solid #ccc;border-radius:4px}h1{color:#007bff}button{padding:8px 16px;background:#007bff;color:white;border:none;cursor:pointer}button:hover{background:#0056b3}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
MyComponent.style = myComponentCss;

export { LoadingComponent as loading_component, MyComponent as my_component };
//# sourceMappingURL=loading-component.my-component.entry.js.map
