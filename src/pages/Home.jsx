import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import BestDeals from '../components/BestDeals'
import ShopCategories from '../components/ShopCategories'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedProducts2 from '../components/FeaturedProducts2'
import MacbookBanner from '../components/MacbookBanner'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <HeroSection />
      <BestDeals />
      <ShopCategories />
      <FeaturedProducts />
      <FeaturedProducts2 />
      <MacbookBanner />
      <Newsletter />
    </>
  )
}