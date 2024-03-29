import { Hero } from "../components/Layout/Hero";
import { Content } from "../components/Layout/Content";
import { Contact } from "../components/Layout/Contact";
import { Footer } from "../components/Layout/Footer";

export function Home() {
    return(
        <div className="flex flex-col items-center justify-center">
            <Hero />
            <main className="w-full flex flex-col item-center">
                <Content />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}