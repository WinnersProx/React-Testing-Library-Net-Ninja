import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render the same text passed as title prop', () => {
  render(<Header title={"My Todos"}/>);
  const headingElement = screen.getByText(/my todos/i);

  expect(headingElement).toBeInTheDocument();
});

it('should render the same text passed as title prop', () => {
    render(<Header title={"My Todos"}/>);
    const headingElement = screen.getByRole('heading', { name: 'My Todos'});
  
    expect(headingElement).toBeInTheDocument();
});

it('should find element by test id', () => {
    render(<Header title={"My Todos"}/>);
    const headingElement = screen.getByTestId('main-heading');
  
    expect(headingElement).toBeInTheDocument();
});

it('should find an element asynchronuously', async () => {
    render(<Header title={"My Async Test"}/>);
    const headingElement = await screen.findByText(/my async test/i);
  
    expect(headingElement).toBeInTheDocument();
}); 


it('should find an element asynchronuously', async () => {
    render(<Header title={"My title"}/>);
    const headingElement = screen.queryByText(/my not found title/i); 
  
    expect(headingElement).not.toBeInTheDocument();
});

it('should find an element using query by', async () => {
    render(<Header title={"My title"}/>);
    const headingElement = screen.queryByText(/my not found title/i); 
  
    expect(headingElement).not.toBeInTheDocument();
}); 

it('should find all headings in the rendered heading', async () => {
    render(<Header title={"My title"}/>);
    const headingElements = screen.getAllByRole("heading");
  
    expect(headingElements.length).toBe(1);
}); 