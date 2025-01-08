import Chicago from "../components/Chicago";
import CustomersSay from "../components/CustomersSay";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import PageLayout from "../components/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Specials />
      <CustomersSay />
      <Chicago />
    </PageLayout>
  );
}
