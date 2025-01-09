import { describe, it, expect } from "vitest";
import { initializeTimes, updateTimes } from "./BookingPage";

describe("initializeTimes", () => {
  it("should return the correct initial times", () => {
    const expectedTimes = [
      { text: "17:00", value: "17:00" },
      { text: "18:00", value: "18:00" },
      { text: "19:00", value: "19:00" },
      { text: "20:00", value: "20:00" },
      { text: "21:00", value: "21:00" },
      { text: "22:00", value: "22:00" },
    ];

    const result = initializeTimes();
    expect(result).toEqual(expectedTimes); // Validate the output matches the expected result
  });
});

describe("updateTimes", () => {
  it("should return the same state when action is not handled", () => {
    const initialState = [
      { text: "17:00", value: "17:00" },
      { text: "18:00", value: "18:00" },
    ];

    const action = { action: "unhandled_action" };
    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState); // State remains unchanged
  });

  it("should return the same state for 'update_date' action", () => {
    const initialState = [
      { text: "17:00", value: "17:00" },
      { text: "18:00", value: "18:00" },
    ];

    const action = { action: "update_date", data: "2023-01-01" };
    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState); // Logic for updating will come later
  });
});
