import {NavBar, Hero, Brand, Step, Features, Review, MobileHero, Footer} from "./components/list"

export default function App() {
    return (
        <section className="w-full overflow-hidden">
            <div className="md:px-14 px-5 flex flex-col justify-center items-center w-full">
                <NavBar />
                <Hero />
                <Brand />
                <Step />
                <Features />
                <Review />
                <MobileHero />
                <Footer />
            </div>
        </section>
    )
}
