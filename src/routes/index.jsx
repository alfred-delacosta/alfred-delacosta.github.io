import Hero from '../components/hero'
import Expertise from '../components/expertise'
import Projects from '../components/projectsBanner'
import CallToAction from '../components/callToAction'

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
            <section>
                <CallToAction />
            </section>
        </div>
    )
}

export default Index