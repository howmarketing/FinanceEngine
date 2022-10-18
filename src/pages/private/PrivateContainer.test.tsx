import { render, act, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PrivateContainer from "./PrivateContainer";

describe("private container", () => {
  it("renders private container", async () => {
    const { queryByTestId } = render(
      <BrowserRouter>
        <PrivateContainer />
      </BrowserRouter>
    );
    const showMenu = queryByTestId("showMenu");
    await act(() => {
      if (showMenu) {
        fireEvent.click(showMenu);
      }
    });
    expect(PrivateContainer).toBeTruthy();
  });
});
