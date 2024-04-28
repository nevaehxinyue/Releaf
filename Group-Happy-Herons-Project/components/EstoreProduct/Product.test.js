import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Product } from "./Product";

// Describe test suite
describe("Product Component", () => {
  // Test case: check if the product name and image are rendered correctly
  it("renders product with correct name and image", () => {
    const testProps = {
      name: "Eco-friendly Cup",
      image: { uri: "../assets/products/p-100.jpg" },
      onPress: jest.fn(),
    };

    const { getByText, getByTestId } = render(<Product {...testProps} />);
    expect(getByText(testProps.name)).toBeTruthy();
    expect(getByTestId("product-image").props.source).toEqual(testProps.image);
  });

  // Test case: check if onPress is called when the product is pressed
  it("calls onPress when the product is pressed", () => {
    const onPressMock = jest.fn();
    const testProps = {
      name: "Eco-friendly Cup",
      image: { uri: "../assets/products/p-100.jpg" },
      onPress: onPressMock,
    };

    const { getByTestId } = render(<Product {...testProps} />);
    fireEvent.press(getByTestId("product-button")); // Simulate a press event
    expect(onPressMock).toHaveBeenCalled(); // Verify if the function is called
  });
});
