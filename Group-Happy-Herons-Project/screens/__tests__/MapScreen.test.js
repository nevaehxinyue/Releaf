import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MapScreen from "../MapScreen";
import {
  locationsOfClothingBins,
  locationsOfDonations,
} from "../../api/markerLocations";


// Define the mock for react-native-maps
jest.mock("react-native-maps", () => {
  const { View } = require("react-native");
  const MockMapView = (props) => {
    // Mock the MapView component by rendering a View component
    return <View {...props} />;
  };
  const MockMarker = ({ testData, ...props }) => (
    // Mock the Marker component by rendering a View component with testData as accessibilityLabel
    <View {...props} accessibilityLabel={testData} />
  );

  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});

describe("MapScreen", () => {
  it('toggles between "Clothing Bins" and "Charity Donations"', () => {
    const { getByText } = render(<MapScreen />);
    const toggleButton = getByText("Clothing Bins");

    fireEvent.press(toggleButton);
    expect(getByText("Charity Donations")).toBeTruthy();

    fireEvent.press(toggleButton);
    expect(getByText("Clothing Bins")).toBeTruthy();
  });

  it("displays markers for clothing bins or charity donations", () => {
    const { getAllByLabelText } = render(<MapScreen />);

    // Check if all markers for clothing bins are rendered
    locationsOfClothingBins.forEach((clothingbin) => {
      expect(() => getAllByLabelText(`${clothingbin.id}`)).not.toThrow();
    });

    // Check if all markers for charity donations are rendered
    locationsOfDonations.forEach((charitydonation) => {
      expect(() => getAllByLabelText(`${charitydonation.id}`)).not.toThrow();
    });
  });

  it("displays notes for the user with correct information", () => {
    const { getByText } = render(<MapScreen />);
    const clothingBinsNote = getByText(
      "Clothing Bins: run by private businesses"
    );
    const donationsNote = getByText(
      "Charity Donations: run by charitable trusts"
    );

    expect(clothingBinsNote).toBeTruthy();
    expect(donationsNote).toBeTruthy();
  });
});
