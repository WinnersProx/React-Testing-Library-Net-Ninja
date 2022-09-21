import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

// This is because the "BrowserRouter" doesn't exist in the context of Jest testing
const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe("TodoFooter testing", () => {
  it("should render the correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);

    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the number of tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);

    expect(paragraphElement).toBeInTheDocument();

    expect(paragraphElement.getAttribute("data-tasks-nbr")).toBe("1");
  });

  it('should render "task" when the number of tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={0} />);
    const paragraphElement = screen.getByTestId("footer-paragraph");

    expect(paragraphElement).toBeTruthy();
    expect(paragraphElement).toContainHTML("p");
    expect(paragraphElement).toHaveTextContent("0 tasks left");
    expect(paragraphElement).not.toBeFalsy();
  });
});
