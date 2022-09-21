import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );


describe("Followers List component", () => {

    it("should render followers list and access one follower item", async () => {
        render(<MockTodoFooter />);

        const followerItemElement = await screen.findByTestId("follower-item-0");

        expect(followerItemElement).toBeInTheDocument();
    });

    it("should render followers list and access multiple follower items", async () => {
        render(<MockTodoFooter />);
        const followerItems = await screen.findAllByTestId(/follower-item/i);

        expect(followerItems.length).toBeTruthy();
    });

});
