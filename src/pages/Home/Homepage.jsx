import { Header } from '../../components/Header'
import { Carousel } from './Carousel'
import { AboutUsFlip } from './About';
import { FourColumnComponent } from './Four';
import { ScrollToTop } from '../../components/ScrollUpButton'
import { MeetStaff } from './Staff'
import { AwardsTestimonialsQuotes } from './Awards'
import { NewsEvents } from './News'
import { ContactForm } from './Contact'

export function HomePage() {
  return(
    <>
      <Header />
      <Carousel />
      <AboutUsFlip />
      <FourColumnComponent />
      <ScrollToTop />
      <MeetStaff />
      <AwardsTestimonialsQuotes />
      <NewsEvents />
      <ContactForm />
    </>
  );
}