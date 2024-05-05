import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import BinScreen from "../BinScreen";
import { getWasteBinData } from "../../components/FetchData";

// Mock the getWasteBinData function
jest.mock("../../components/FetchData", () => ({
  getWasteBinData: jest.fn(),
}));

describe("BinScreen", () => {
  beforeEach(() => {
    // Setup mock data for testing
    getWasteBinData.mockResolvedValue({
      recycling: { yes: ["Glass", "Paper"], no: ["Plastic"] },
      foodScraps: { yes: ["Fruit", "Vegetables"], no: ["Meat"] },
      generalRubbish: { yes: ["Napkins"], no: ["Electronics"] },
    });
  });

  it("loads and displays waste items correctly after selecting a bin", async () => {
    const { getByTestId, findByText } = render(<BinScreen />);

    const recyclingButton = getByTestId("recycling-button");
    fireEvent.press(recyclingButton);

    const glass = await findByText(/Glass$/);
    const paper = await findByText(/Paper$/);

    expect(glass).toBeTruthy();
    expect(paper).toBeTruthy();
  });

  it('shows the correct items in "No, thanks" section for selected bin', async () => {
    const { getByTestId, findByText } = render(<BinScreen />);

    fireEvent.press(getByTestId("recycling-button"));
    const plastic = await findByText(/Plastic$/);

    expect(plastic).toBeTruthy();
  });

  it("displays items for food scraps bin when selected", async () => {
    const { getByTestId, findByText } = render(<BinScreen />);

    const foodScrapsButton = getByTestId("food-button");
    fireEvent.press(foodScrapsButton);

    const fruit = await findByText(/Fruit$/);
    const vegetables = await findByText(/Vegetables$/);

    expect(fruit).toBeTruthy();
    expect(vegetables).toBeTruthy();
  });

  it("displays items for general rubbish bin when selected", async () => {
    const { getByTestId, findByText } = render(<BinScreen />);

    const generalRubbishButton = getByTestId("general-button");
    fireEvent.press(generalRubbishButton);

    const napkins = await findByText(/Napkins$/);

    expect(napkins).toBeTruthy();
  });
});
