import ui from "./ui.js";
function JsonToComponent(schema = "") {
  const element = document.createElement(schema.tag);
  element.text = schema.default;
  return element;
}
function isArray(schema) {
  return Array.isArray(schema);
}
function isObject(schema) {
  return false;
}
function JsonToComponents(schema = []) {
  if (isArray(schema)) {
    return schema.map((_schema) => {
      return JsonToComponent(_schema);
    });
  } else {
    return JsonToComponent(schema);
  }
}
function render() {
  const appContainer = document.querySelector("#app");
  const app = JsonToComponents(ui);
  if (isArray(app)) {
    app.forEach((item) => {
      appContainer.appendChild(item);
    });
  } else {
    appContainer.appendChild(app);
  }
}

render();
