import PageLayout from '../components/PageLayout'
import BookingForm from '../components/BookingForm'
import { useEffect, useReducer } from 'react'
import {fetchAPI} from '../bin/api'

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

  const initializeTimes = () => {
    const data = fetchAPI(new Date())
    dispatch({action: "update_date", data})
  }

  useEffect(() => {
    initializeTimes()
  }, [])

  return (
    <PageLayout>
      <section className='full-width'>
        <div className='container container-center'>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={values => console.log(values)}/>
        </div>
      </section>
    </PageLayout>
  )
}
