import { render } from "@testing-library/react";

import Page from "../src/app/page";

describe("page", () => {
  test("renders correctly", () => {
    const { getByText } = render(<Page />);
    const linkelement = getByText("Hello, Next.js!");
    expect(linkelement).toBeInTheDocument();
  });
});
