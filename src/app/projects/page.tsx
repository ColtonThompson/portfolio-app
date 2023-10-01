import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShowProjects from "../components/Projects";

export default function Home() {
    return(
        <main>
        <Navbar />
        <ShowProjects />
        <Footer />
    </main>
    );
}