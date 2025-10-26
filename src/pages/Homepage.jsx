import { Header } from '../components/Header'
import { Carousel } from '../components/Carousel'
import { AboutUsFlip } from '../components/About';
import { FourColumnComponent } from '../components/Four';
import { ScrollToTop } from '../components/ScrollUpButton'

export function HomePage() {
  return(
    <>
      <Header />
      <Carousel />
      <AboutUsFlip />
      <FourColumnComponent />
      <ScrollToTop />
    </>
  );
}