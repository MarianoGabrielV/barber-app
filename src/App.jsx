// src/App.jsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BookingForm from "./components/BookingForm";
import { barbers } from "./data/barberData";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <HeroSection />

      <main className="container my-4">
        <BookingForm />

        <section id="barberos" className="my-5">
          <h2 className="h4 text-info mb-3">Conocé a nuestros barberos</h2>
          <div className="row g-3">
            {barbers.map((barber) => (
              <div key={barber.id} className="col-12 col-md-4">
                <div className="card bg-dark border-0 shadow-sm h-100 p-3">
                  <h3 className="h5 text-light mb-1">{barber.name}</h3>
                  <p className="text-secondary small mb-0">
                    {barber.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-dark text-center text-secondary py-3 mt-4 border-top border-secondary">
        <small>
          💈 Barbería - Desarrollado por GoStyle
        </small>
      </footer>
    </div>
  );
}

export default App;
