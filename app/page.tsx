import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Nosotros from "./components/sections/Nosotros";
import Servicios from "./components/sections/Servicios";
import Ubicacion from "./components/sections/Ubicacion";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Ubicacion />
      </main>
      <Footer />
    </>
  );
}
