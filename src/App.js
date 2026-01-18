import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "https://vite.dev",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: viteLogo,
    className: "logo",
    alt: "Vite logo"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://react.dev",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("img", {
    src: reactLogo,
    className: "logo react",
    alt: "React logo"
  }))), /*#__PURE__*/React.createElement("h1", null, "Vite + React"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count => count + 1)
  }, "count is ", count), /*#__PURE__*/React.createElement("p", null, "Edit ", /*#__PURE__*/React.createElement("code", null, "src/App.tsx"), " and save to test HMR")), /*#__PURE__*/React.createElement("p", {
    className: "read-the-docs"
  }, "Click on the Vite and React logos to learn more"));
}
export default App;