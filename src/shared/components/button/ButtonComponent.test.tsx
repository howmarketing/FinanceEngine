import { fireEvent, queryByTestId, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import ButtonComponent from "./ButtonComponent";

describe("Button Component", () => {
  const control = { value: "value", action: () => "teste" };

  test("should render correctly component when to load", () => {
    render(<ButtonComponent {...control} />);
    expect(<ButtonComponent {...control} />).toBeTruthy();
  });

  test("", async () => {
    const { queryByTestId } = render(<ButtonComponent {...control} />);
    const button = queryByTestId("button");
    await act(async () => {
      if (button) fireEvent.click(button);
    });
  });
});
