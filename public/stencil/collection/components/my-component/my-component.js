import { h } from "@stencil/core";
export class MyComponent {
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
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name",
                "defaultValue": "'Guest'"
            }
        };
    }
    static get states() {
        return {
            "inputValue": {}
        };
    }
    static get events() {
        return [{
                "method": "nameChanged",
                "name": "nameChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=my-component.js.map
