const template = document.createElement("template");
template.innerHTML = `
  <div>
    <input></input>
  </div>
`;
export class TextInput extends HTMLElement {
  static get observedAttributes() {
    return ["schema"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
  async connectedCallback() {
    this.render();
  }
  attributeChangedCallback(name: string, oldValue = "", newValue = "") {
    if (name === "schema") {
      this.render();
    }
  }
  render() {
    const schema = JSON.parse(this.getAttribute("schema") || "") || {};
    const input = this.shadowRoot?.querySelector("input");
    // const input = document.createElement("input");
    if (input) {
      if (schema.default) {
        input.value = schema.default;
      }
    }
  }
}

customElements.define("text-input", TextInput);
