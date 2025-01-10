import { useLocation } from "react-router";
import PageLayout from "../components/PageLayout";
import BookingConfirmation from "../components/BookingConfirmation";

export default function ConfirmedBookingPage() {
  const location = useLocation();
  const state = location.state || {};
  return (
    <PageLayout>
      <section className="full-width">
        <div className="container container-center">
          <BookingConfirmation
            guests={state.guests}
            date={state['res-date']}
            time={state['res-time']}
            occasion={state.occasion}
          />
        </div>
      </section>
    </PageLayout>
  );
}
