import EmblaCarousel from './EmblaCarousel'

import '../css/sandbox.css'
import '../css/embla.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Main = () => (
    <main className="sandbox">
        <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
    </main>
)

export default Main