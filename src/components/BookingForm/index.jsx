import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchAPI } from "../../bin/api";
import { getMidnightUTC } from "../../utils/date";
import style from "./style.module.css";

const initialValues = {
  ["res-date"]: "",
  ["res-time"]: "",
  guests: 0,
  occasion: "",
};

const validationSchema = Yup.object().shape({
  ["res-date"]: Yup.date().min(getMidnightUTC()).required(),
  ["res-time"]: Yup.string().required(),
  guests: Yup.number().min(1).max(10).required(),
  occasion: Yup.string().required(),
});

export default function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleChangeWithExtraLogic = (customLogicHandler) => (event) => {
    formik.handleChange(event);
    customLogicHandler(event);
  };

  const handleChangeResDate = (event) => {
    const selectedDate = new Date(`${event.target.value}T00:00:00-05:00`);
    const data = fetchAPI(selectedDate);
    dispatch({ action: "update_date", data });
  };

  return (
    <form
      className={style.formContainer}
      aria-labelledby="booking-form-title"
      aria-describedby="booking-form-description"
      onSubmit={formik.handleSubmit}
    >
      <header className={style.formHeader}>
        <h2 id="booking-form-title" className={`${style.formTitle} section-title`}>
          Book Now
        </h2>
        <p id="booking-form-description" className="paragraph-text">
          Fill out the form below to book your table at Little Lemon.
        </p>
      </header>

      <fieldset className={style.fieldset}>
        <legend className={`${style.legend} card-title`}>Reservation Details</legend>

        <label className={`${style.label} highlight-text`} htmlFor="res-date">
          Choose date
        </label>
        <input
          className={style.input}
          type="date"
          id="res-date"
          name="res-date"
          onChange={handleChangeWithExtraLogic(handleChangeResDate)}
          onBlur={formik.handleBlur}
          value={formik.values["res-date"]}
          required
          aria-required="true"
          aria-invalid={
            formik.errors["res-date"] && formik.touched["res-date"]
              ? "true"
              : "false"
          }
          aria-describedby="res-date-error"
        />
        {formik.errors["res-date"] && formik.touched["res-date"] && (
          <div
            id="res-date-error"
            className={style.error}
            aria-live="assertive"
            role="alert"
          >
            {formik.errors["res-date"]}
          </div>
        )}

        <label className={style.label} htmlFor="res-time">
          Choose time
        </label>
        <select
          className={style.select}
          id="res-time"
          name="res-time"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values["res-time"]}
          required
          aria-required="true"
          aria-invalid={
            formik.errors["res-time"] && formik.touched["res-time"]
              ? "true"
              : "false"
          }
          aria-describedby="res-time-error"
        >
          <option value="">Select time...</option>
          {availableTimes.map(({ text, value }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
        {formik.errors["res-time"] && formik.touched["res-time"] && (
          <div
            id="res-time-error"
            className={style.error}
            aria-live="assertive"
            role="alert"
          >
            {formik.errors["res-time"]}
          </div>
        )}

        <label className={style.label} htmlFor="guests">
          Number of guests
        </label>
        <input
          className={style.input}
          type="number"
          id="guests"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.guests}
          required
          aria-invalid={
            formik.errors.guests && formik.touched.guests ? "true" : "false"
          }
          aria-describedby="guests-error"
        />
        {formik.errors.guests && formik.touched.guests && (
          <div
            id="guests-error"
            className={style.error}
            aria-live="assertive"
            role="alert"
          >
            {formik.errors.guests}
          </div>
        )}

        <label className={style.label} htmlFor="occasion">
          Occasion
        </label>
        <select
          className={style.select}
          id="occasion"
          name="occasion"
          onChange={formik.handleChange}
          value={formik.values.occasion}
          onBlur={formik.handleBlur}
          required
          aria-invalid={
            formik.errors.occasion && formik.touched.occasion ? "true" : "false"
          }
          aria-describedby="occasion-error"
        >
          <option value="">Select occasion...</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formik.errors.occasion && formik.touched.occasion && (
          <div
            id="occasion-error"
            className={style.error}
            aria-live="assertive"
            role="alert"
          >
            {formik.errors.occasion}
          </div>
        )}
      </fieldset>

      <input
        className={style.submitButton}
        type="submit"
        value="Make Your reservation"
        disabled={!formik.isValid}
      />
    </form>
  );
}
