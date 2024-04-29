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

  it("renders correctly and shows initial message", () => {
    const { getByText } = render(<BinScreen />);
    expect(getByText("Please choose one")).toBeTruthy();
  });

  it("loads and displays waste items correctly after selecting a bin", async () => {
    const { getByTestId, findByText } = render(<BinScreen />);

    const recyclingButton = getByTestId("recycling-button");
    fireEvent.press(recyclingButton);

    const glass = await findByText("Glass");
    const paper = await findByText("Paper");

    expect(glass).toBeTruthy();
    expect(paper).toBeTruthy();
  });

  it('shows the correct items in "No, thanks" section for selected bin', async () => {
    const { getByTestId, findByText } = render(<BinScreen />);

    fireEvent.press(getByTestId("recycling-button"));
    const plastic = await findByText("Plastic");

    expect(plastic).toBeTruthy();
  });
});
