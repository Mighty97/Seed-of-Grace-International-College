import { Header } from '../components/Header'
import { Carousel } from '../components/Carousel'
import { AboutUsFlip } from '../components/About';

export function HomePage() {
  return(
    <>
      <Header />
      <Carousel />
      <AboutUsFlip />
    </>
  );
}