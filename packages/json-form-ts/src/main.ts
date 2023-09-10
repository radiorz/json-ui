import "./style.css";
import "./widget/textInput.ts";
const textInputSchema = {
  default: "abc",
};
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <text-input schema='${JSON.stringify(textInputSchema)}'></text-input>
  </div>
`;
