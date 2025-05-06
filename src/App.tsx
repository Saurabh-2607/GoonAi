import {Layout} from './components/Layout'
import { Brands } from './components/section/Brands';
import { Hero } from './components/section/Hero';
import { Services } from './components/section/Services';

function App() {
  return (
    <Layout title="GoonAI">
        <Hero/>
        <Brands/>
        <Services/>
    </Layout>
  )
}

export default App
