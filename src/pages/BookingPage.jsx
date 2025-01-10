import PageLayout from '../components/PageLayout'
import BookingForm from '../components/BookingForm'
import { useEffect, useReducer } from 'react'
import {fetchAPI, submitAPI} from '../bin/api'
import { useNavigate } from 'react-router'

export function updateTimes(state, {action, data}) {
  switch (action) {
    case "update_date":
      return data.map(date => ({text:date, value: date}))
    default:
      return [...state]
  }
}

export function BookingPage() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [])
  const navigate = useNavigate();

  const initializeTimes = () => {
    const data = fetchAPI(new Date())
    dispatch({action: "update_date", data})
  }

  useEffect(() => {
    initializeTimes()
  }, [])

  const handleSubmit = (values) => {
    const result = submitAPI(values)
    if (result) {
      navigate("/booking/confirmation", {state: values})
    }
  }

  return (
    <PageLayout>
      <section className='full-width'>
        <div className='container container-center'>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={handleSubmit}/>
        </div>
      </section>
    </PageLayout>
  )
}
