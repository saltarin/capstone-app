import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import BookingForm from ".";
import { expect, test, vi } from "vitest";

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={vi.fn(() => {
        console.log("hello world");
      })}
    />
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("onSubmit should be called when form submit", async () => {
  const onSubmitHandlerMock = vi.fn();
  const result = render(
    <BookingForm
      availableTimes={[{ text: "19:00", value: "19:00" }]}
      dispatch={vi.fn()}
      onSubmit={onSubmitHandlerMock}
    />
  );

  const user = userEvent.setup();

  await user.type(screen.getByLabelText(/Choose date/i), "2025-01-15");
  await user.selectOptions(screen.getByLabelText(/Choose time/i), "19:00");
  await user.clear(screen.getByLabelText(/Number of guests/i));
  await user.type(screen.getByLabelText(/Number of guests/i), "2");
  await user.selectOptions(screen.getByLabelText(/Occasion/i), "Birthday");

  await user.click(
    screen.getByRole("button", { name: /Make Your reservation/i })
  );

  const errorMessageResDate = result.container.querySelector("#res-date-error");
  expect(errorMessageResDate).toBeNull();

  const errorMessageResTime = result.container.querySelector("#res-time-error");
  expect(errorMessageResTime).toBeNull();

  const errorMessageGuests = result.container.querySelector("#guests-error");
  expect(errorMessageGuests).toBeNull();

  const errorMessageOcassion =
    result.container.querySelector("#occasion-error");
  expect(errorMessageOcassion).toBeNull();

  expect(onSubmitHandlerMock).toBeCalledWith(
    {
      "res-date": "2025-01-15",
      "res-time": "19:00",
      guests: 2,
      occasion: "Birthday",
    },
    expect.any(Object)
  );
});
