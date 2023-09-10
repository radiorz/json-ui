export default {
  tag: "input",
  label: "",
  placeholder: "",
};
const attrSchemas = {
  type: "object",
  properties: {
    placeholder: {},
  },
};
function getTextValue(e) {
  return e.target.value;
}
function onTextChangeWrapper(func) {
  return function (e) {
    return getTextValue(e);
  };
}
function TextInput({ placeholder = "" } = {}) {
  let text = "";
  const input = document.createElement("input");
  function onchange(value) {
    text = value;
  }
  input.onchange = onTextChangeWrapper(onchange);
  return input;
}
export default TextInput;
