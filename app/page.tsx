import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Gallery from './components/Gallery/Gallery';
import GalleryLine from './components/GalleryLine/GalleryLine';
import Newsletter from './components/Newsletter/Newsletter';

export default function Home() {
  return (
    <main>
      <GalleryLine/>
      <Banner />
      <Newsletter />
      <Gallery />
      <Companies />
    </main>
  )
}
