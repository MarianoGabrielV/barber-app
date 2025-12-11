// src/components/HeroSection.jsx
import { clientConfig } from "../config/clientConfig";

export default function HeroSection() {
  return (
    <section className="hero-section text-center py-5">
      <div className="container">
        <h1 className="display-5 fw-bold text-info mb-3">
          Turnos online en {clientConfig.shopName}
        </h1>
        <p className="lead text-light mb-4">
          Elegí el barbero, el horario y el servicio que quieras. Confirmamos tu
          turno por WhatsApp 📲
        </p>
        <a href="#turnos" className="btn btn-info fw-semibold">
          Reservar turno ahora
        </a>
      </div>
    </section>
  );
}
