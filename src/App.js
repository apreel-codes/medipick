import Appointment from "./components/Appointment/Appointment";
import Blog from "./components/Blog/Blog";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Information from "./components/Information/Information";
import Insurance from "./components/Insurance/Insurance";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Appointment />
      <Insurance />
      <Information />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
