import ReactDOM from "react-dom";

// mocks react-dom and its render method
// so that we can assert that render is
// called with <App /> and HTML element with id = root
jest.mock("react-dom/client", () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: jest.fn()
  }))
}));
test("renders with App and root div", () => {
  // Create and append to document body
  // an HTML element with id = root
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);

  const spy = jest.spyOn(ReactDOM, 'render');


  // Requires index.js so that react-dom render method is called
  require("./index.tsx");

  // Asserts render was called with <App />
  // and HTML element with id = root
  expect(spy).not.toHaveBeenCalled();
});
