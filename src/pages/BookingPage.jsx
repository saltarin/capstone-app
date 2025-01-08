import PageLayout from '../components/PageLayout'
import BookingForm from '../components/BookingForm'

export default function BookingPage() {
  return (
    <PageLayout>
      <section className='full-width'>
        <div className='container container-center'>
          <BookingForm />
        </div>
      </section>
    </PageLayout>
  )
}
