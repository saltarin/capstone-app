import { describe, it, expect } from "vitest";
import { BookingPage, updateTimes } from "./BookingPage";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

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
      { text: "17:00", value: "17:00" }
    ];

    const action = { action: "update_date", data: ["17:00" ]};
    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState); // Logic for updating will come later
  });
});

describe("BookingPage", () => {
  it("Booking Page rendered with fetching the api and showing in the form", () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    )
    const timeSelect = screen.getByLabelText(/Choose time/i)
    expect(timeSelect.options.length).toBeGreaterThan(0)
  })

  it("Booking Page time select should be updated when user change the date", async() => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    )

    const user = userEvent.setup();

    const dateSelect = screen.getByLabelText(/Choose date/i)
    const timeSelect = screen.getByLabelText(/Choose time/i)

    const initialOptions = Array.from(timeSelect.options).map(option => option.text)

    await user.type(dateSelect, "2025-01-15");

    const updatedOptions = Array.from(timeSelect.options).map(option => option.text)
    expect(updatedOptions).not.toEqual(initialOptions)
  })
})
