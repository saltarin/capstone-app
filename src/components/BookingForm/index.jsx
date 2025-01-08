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

export default function BookingForm() {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  const [availableTimes, setAvailableTimes] = useState([
    {text: "17:00", value:"17:00"},
    {text: "18:00", value:"18:00"},
    {text: "19:00", value:"19:00"},
    {text: "20:00", value:"20:00"},
    {text: "21:00", value:"21:00"},
    {text: "22:00", value:"22:00"},
  ])

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={formik.handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={formik.handleChange} value={formik.values.resDate}/>
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
