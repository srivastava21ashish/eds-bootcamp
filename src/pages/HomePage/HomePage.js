import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ImageText from '../../components/ImageText/ImageText';
import LocationBanner from '../../components/LocationBanner/LocationBanner';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <HeroBanner />
          <ImageText />
          <LocationBanner />
        </div>
      </main>
      <Footer />
    </>
  );
}
