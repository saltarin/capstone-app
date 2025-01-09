import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup'

const initialValues = {
  ['res-date']: null,
  ['res-time']: null,
  guests: 0,
  occasion: null
}

const validationSchema = Yup.object().shape({
  ['res-date']: Yup.date().min(new Date()).required(),
  ['res-time']: Yup.string().required(),
  guests: Yup.number().min(1).required(),
  occasion: Yup.string().required(),
})

export default function BookingForm({availableTimes, dispatch}) {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  const handleChangeWithExtraLogic = (customLogicHandler) => (event) => {
    formik.handleChange(event);
    customLogicHandler(event);
  }

  const handleChangeResDate = (event) => {
    dispatch({action: "update_date", data: event.target.value})
  }

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={formik.handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={handleChangeWithExtraLogic(handleChangeResDate)} value={formik.values.resDate}/>
      <select id="res-time" onChange={formik.handleChange} value={formik.values.resTime}>
        {availableTimes.map(({text, value}) => (
          <option key={value}>{text}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={formik.handleChange} values={formik.values.guests}/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={formik.handleChange} values={formik.values.occasion}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
