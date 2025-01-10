import { useFormik } from 'formik';
import * as Yup from 'yup';
import { fetchAPI } from '../../bin/api';

const initialValues = {
  ['res-date']: "",
  ['res-time']: "",
  guests: 0,
  occasion: ""
};

const validationSchema = Yup.object().shape({
  ['res-date']: Yup.date().min(new Date()).required(),
  ['res-time']: Yup.string().required(),
  guests: Yup.number().min(1).required(),
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
    const selectedDate = new Date(`${event.target.value}T00:00:00-05:00`)
    const data = fetchAPI(selectedDate)
    dispatch({ action: 'update_date', data });
  };

  return (
    <form
      aria-labelledby="booking-form-title"
      aria-describedby="booking-form-description"
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={formik.handleSubmit}
    >
      <h2 id="booking-form-title">Book Now</h2>
      <p id="booking-form-description">Fill out the form below to book your table at Little Lemon.</p>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        onChange={handleChangeWithExtraLogic(handleChangeResDate)}
        value={formik.values['res-date']}
        aria-required="true"
        aria-describedby={formik.errors['res-date'] ? 'res-date-error' : undefined}
      />
      {formik.errors['res-date'] && formik.touched['res-date'] && (
        <div id="res-date-error" aria-live="assertive" style={{ color: 'red' }}>
          {formik.errors['res-date']}
        </div>
      )}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="res-time"
        onChange={formik.handleChange}
        value={formik.values['res-time']}
        aria-required="true"
        aria-label="Choose time"
      >
        {availableTimes.map(({ text, value }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      {formik.errors['res-time'] && formik.touched['res-time'] && (
        <div id="res-time-error" aria-live="assertive" style={{ color: 'red' }}>
          {formik.errors['res-time']}
        </div>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        placeholder="1"
        min="1"
        max="10"
        onChange={formik.handleChange}
        value={formik.values.guests}
        aria-required="true"
        aria-describedby={formik.errors.guests ? 'guests-error' : undefined}
      />
      {formik.errors.guests && formik.touched.guests && (
        <div id="guests-error" aria-live="assertive" style={{ color: 'red' }}>
          {formik.errors.guests}
        </div>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        onChange={formik.handleChange}
        value={formik.values.occasion}
        aria-required="true"
        aria-label="Occasion"
      >
        <option value="">Select...</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {formik.errors.occasion && formik.touched.occasion &&(
        <div id="occasion-error" aria-live="assertive" style={{ color: 'red' }}>
          {formik.errors.occasion}
        </div>
      )}

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
