import PageLayout from '../components/PageLayout'
import BookingForm from '../components/BookingForm'
import { useReducer } from 'react'

function initializeTimes() {
  return [
    {text: "17:00", value:"17:00"},
      {text: "18:00", value:"18:00"},
      {text: "19:00", value:"19:00"},
      {text: "20:00", value:"20:00"},
      {text: "21:00", value:"21:00"},
      {text: "22:00", value:"22:00"},
  ]
}

function updateTimes(state, {action, data}) {
  switch (action) {
    case "update_date":
      console.log('data received', data)
      return [...state]
    default:
      return [...state]
  }
}

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

  return (
    <PageLayout>
      <section className='full-width'>
        <div className='container container-center'>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
      </section>
    </PageLayout>
  )
}
