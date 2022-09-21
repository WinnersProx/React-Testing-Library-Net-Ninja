import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockedTodo = () => (
    <BrowserRouter>
        <Todo />
    </BrowserRouter>
);

const addTasks = (tasks = []) => {
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const addButtonElement = screen.getByRole("button", { name: /Add/i });

    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task }});
        fireEvent.click(addButtonElement);
    });
}


describe("Todo component", () => {

    it("should be able to type in the todo input and interact with other components", () => {
        render(<MockedTodo  />);

        addTasks(['Go grocery shopping', 'Implement new ideas', 'Clean the garbage']);

        const divElements = screen.getAllByTestId("todo-item");

        expect(divElements.length).toBe(3);
    });

    it("should not have completed className when initially rendered", () => {
        render(<MockedTodo  />);

        addTasks(['Go grocery shopping']);

        const todoItemElement = screen.getByText(/go grocery shopping/i);

        expect(todoItemElement).not.toHaveClass('todo-item-active');
    });

    it("should add completed className when a todo item is clicked", () => {
        render(<MockedTodo  />);

        addTasks(['Go grocery shopping']);

        const todoItemElement = screen.getByText(/go grocery shopping/i);

        fireEvent.click(todoItemElement);

        expect(todoItemElement).toHaveClass('todo-item-active');
    });
});
