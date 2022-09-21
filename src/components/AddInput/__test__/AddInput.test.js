import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetToDo = jest.fn();


describe("AddInput component", () => {

    it("should render todo input element", () => {
        render(<AddInput todos={[]} setTodos={mockedSetToDo} />);

        const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    
        expect(inputElement).toBeInTheDocument();
    });

    it("should be able to type in the todo input", () => {
        render(<AddInput todos={[]} setTodos={mockedSetToDo} />);

        const inputElement = screen.getByPlaceholderText(/add a new task here.../i);

        fireEvent.change(inputElement, { target: { value: "Go Grocery shopping" }});
    
        expect(inputElement.value).toBe("Go Grocery shopping");
    });

    it("should empty todo input when a todo is added", () => {
        render(<AddInput todos={[]} setTodos={mockedSetToDo} />);

        const addButtonElement = screen.getByRole("button");
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
         
        fireEvent.change(inputElement, { target: { value: "Go Grocery shopping" }});
        fireEvent.click(addButtonElement);
    
        expect(inputElement.value).toBe("");
    });

})