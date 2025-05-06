import {Layout} from './components/Layout'
import { Brands } from './components/section/Brands';
import { Hero } from './components/section/Hero';
import { Services } from './components/section/Services';
import { AboutUs } from './components/section/AboutUs';
import { Pricing } from './components/section/Pricing';

function App() {
  return (
    <Layout title="GoonAI">
        <Hero/>
        <Brands/>
        <Services/>
        <AboutUs/>
        <Pricing/>
    </Layout>
  )
}

export default App
