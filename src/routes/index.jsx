import Hero from '../components/hero'
import Expertise from '../components/expertise'
import Projects from '../components/projectsBanner'

function Index() {
    return (
        <div>
            <section>
                <Hero />
            </section>
            <section>
                <Expertise />
            </section>
            <section>
                <Projects />
            </section>
        </div>
    )
}

export default Index