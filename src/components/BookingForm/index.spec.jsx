import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import BookingForm from ".";
import { describe, expect, test, vi } from "vitest";

describe("BookingForm", () => {
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

  test("error message should show when guess input is empty", async () => {
    render(
      <BookingForm
        availableTimes={[{ text: "19:00", value: "19:00" }]}
        dispatch={vi.fn()}
        onSubmit={vi.fn()}
      />
    );
    const user = userEvent.setup();

    const guestsInput = screen.getByLabelText(/Number of guests/i);

    await user.clear(guestsInput);
    await user.tab();
    const errorMessage = screen.getByText(
      /guests is a required field/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("error message should show when guess input is below 1", async () => {
    render(
      <BookingForm
        availableTimes={[{ text: "19:00", value: "19:00" }]}
        dispatch={vi.fn()}
        onSubmit={vi.fn()}
      />
    );
    const user = userEvent.setup();

    const guestsInput = screen.getByLabelText(/Number of guests/i);

    await user.clear(guestsInput);
    await user.type(guestsInput, "0");
    await user.tab();
    const errorMessage = screen.getByText(
      /guests must be greater than or equal to 1/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("error message should show when guess input is above 10", async () => {
    render(
      <BookingForm
        availableTimes={[{ text: "19:00", value: "19:00" }]}
        dispatch={vi.fn()}
        onSubmit={vi.fn()}
      />
    );
    const user = userEvent.setup();

    const guestsInput = screen.getByLabelText(/Number of guests/i);

    await user.clear(guestsInput);
    await user.type(guestsInput, "11");
    await user.tab();
    const errorMessage = screen.getByText(
      /guests must be less than or equal to 10/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("error message should show when ocassion select is not selected", async () => {
    render(
      <BookingForm
        availableTimes={[{ text: "19:00", value: "19:00" }]}
        dispatch={vi.fn()}
        onSubmit={vi.fn()}
      />
    );

    const user = userEvent.setup();
    const occasionSelect = screen.getByLabelText(/Occasion/i)

    await user.selectOptions(occasionSelect, "");
    await user.tab()

    const errorMessage = screen.getByText(
      /occasion is a required field/i
    );
    expect(errorMessage).toBeInTheDocument();
  })

  test("error message should show when res-date select is not selected", async () => {
    render(
      <BookingForm
        availableTimes={[{ text: "19:00", value: "19:00" }]}
        dispatch={vi.fn()}
        onSubmit={vi.fn()}
      />
    );

    const user = userEvent.setup();
    const dateSelect = screen.getByLabelText(/Choose date/i)

    await user.clear(dateSelect);
    await user.tab()

    const errorMessage = screen.getByText(
      /res-date is a required field/i
    );
    expect(errorMessage).toBeInTheDocument();
  })

  test("error message should show when res-date is before current date", async () => {
    render(
      <BookingForm
        availableTimes={[{ text: "19:00", value: "19:00" }]}
        dispatch={vi.fn()}
        onSubmit={vi.fn()}
      />
    );

    const user = userEvent.setup();
    const dateSelect = screen.getByLabelText(/Choose date/i)

    await user.clear(dateSelect)
    await user.type(dateSelect, "2020-01-15")
    await user.tab()

    const errorMessage = screen.getByText(
      /res-date field must be later than/i
    );
    expect(errorMessage).toBeInTheDocument();
  })

  test("error message should show when res-time select is not selected", async () => {
    render(
      <BookingForm
        availableTimes={[{ text: "19:00", value: "19:00" }]}
        dispatch={vi.fn()}
        onSubmit={vi.fn()}
      />
    );

    const user = userEvent.setup();
    const timeSelect = screen.getByLabelText(/Choose time/i)

    await user.selectOptions(timeSelect, "");
    await user.tab()

    const errorMessage = screen.getByText(
      /res-time is a required field/i
    );
    expect(errorMessage).toBeInTheDocument();
  })

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

    const errorMessageResDate =
      result.container.querySelector("#res-date-error");
    expect(errorMessageResDate).toBeNull();

    const errorMessageResTime =
      result.container.querySelector("#res-time-error");
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
});
