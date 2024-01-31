export const DUMY_DATA = [
  { id: 1, type: "Component", label: "hello world", value: "24" },
  { id: 2, type: "Component", label: "hello world", value: "24" },
  { id: 3, type: "Function", label: "Say Hi", value: sayHi },
  { id: 4, type: "Component", label: "hello world", value: "24" },
  { id: 5, type: "Component", label: "hello world", value: "24" },
  { id: 6, type: "Component", label: "hello world", value: "24" },
  { id: 7, type: "Component", label: "printTime", value: printTime },
  { id: 8, type: "Component", label: "hello world", value: "24" },
  { id: 9, type: "Component", label: "hello world", value: "24" },
];

function sayHi() {
  console.log("hi");
}

function printTime() {
  const date = new Date();
  const formatDate = date.toLocaleTimeString();
  console.log(formatDate);
}

// function sayHi() {
//   console.log("hi");
// }
