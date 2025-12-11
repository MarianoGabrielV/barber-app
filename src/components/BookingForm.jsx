// src/components/BookingForm.jsx
import { useState } from "react";
import { barbers, services, timeSlots } from "../data/barberData";
import WhatsAppButton from "./WhatsAppButton";

export default function BookingForm() {
  const [barberId, setBarberId] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10) // hoy
  );
  const [time, setTime] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [comments, setComments] = useState("");

  const handleToggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSelectBarber = (id) => {
    setBarberId(id);
  };

  const selectedBarber = barbers.find((b) => b.id === barberId);
  const selectedServiceObjects = services.filter((s) =>
    selectedServices.includes(s.id)
  );

  const booking = {
    barberName: selectedBarber?.name || "",
    date,
    time,
    servicesNames: selectedServiceObjects.map((s) => s.name),
    customerName,
    customerPhone,
    comments,
  };

  const canSend =
    booking.barberName &&
    date &&
    time &&
    booking.servicesNames.length > 0 &&
    customerName.trim() !== "" &&
    customerPhone.trim() !== "";

  return (
    <section id="turnos" className="my-4">
      <div className="row g-4">
        {/* Col izquierda: formulario */}
        <div className="col-12 col-lg-7">
          <div className="card bg-dark border-0 shadow-lg p-3 h-100">
            {/* 1. Elegí tu barbero - AHORA CON CARDS */}
            <h2 className="h5 mb-3 text-info">1. Elegí tu barbero</h2>
            <div className="row g-3 mb-3">
              {barbers.map((barber) => {
                const isSelected = barber.id === barberId;
                return (
                  <div key={barber.id} className="col-12 col-md-6">
                    <div
                      className={`card h-100 bg-black bg-opacity-50 border ${
                        isSelected ? "border-info shadow-lg" : "border-secondary"
                      } barber-card clickable`}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleSelectBarber(barber.id)}
                    >
                      {barber.img && (
                        <img
                          src={barber.img}
                          alt={barber.name}
                          className="card-img-top"
                          style={{
                            height: "150px",
                            objectFit: "cover",
                            borderTopLeftRadius: "1rem",
                            borderTopRightRadius: "1rem",
                          }}
                        />
                      )}
                      <div className="card-body p-3">
                        <h3 className="h6 text-light mb-1 d-flex justify-content-between align-items-center">
                          <span>{barber.name}</span>
                          {isSelected && (
                            <span className="badge bg-info text-dark">
                              Seleccionado
                            </span>
                          )}
                        </h3>
                        <p className="text-secondary small mb-2">
                          {barber.specialty}
                        </p>
                        {barber.servicesHighlights && (
                          <ul className="text-secondary small mb-0 ps-3">
                            {barber.servicesHighlights.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr className="border-secondary" />

            {/* 2. Fecha y horario */}
            <h2 className="h5 mb-3 text-info">2. Fecha y horario</h2>
            <div className="row g-3 mb-3">
              <div className="col-12 col-md-6">
                <label className="form-label small text-secondary">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small text-secondary">
                  Horario
                </label>
                <select
                  className="form-select"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value="">Seleccioná un horario</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <hr className="border-secondary" />

            {/* 3. Servicio */}
            <h2 className="h5 mb-3 text-info">3. Servicio</h2>
            <div className="row">
              {services.map((service) => (
                <div key={service.id} className="col-12 col-md-6 mb-2">
                  <div
                    className={`form-check p-2 rounded border ${
                      selectedServices.includes(service.id)
                        ? "border-success bg-success bg-opacity-10"
                        : "border-secondary"
                    }`}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onChange={() => handleToggleService(service.id)}
                    />
                    <label
                      className="form-check-label ms-1"
                      htmlFor={service.id}
                    >
                      <span className="fw-semibold">{service.name}</span>
                      <span className="d-block text-secondary small">
                        {service.description}
                      </span>
                      <span className="d-block text-secondary small">
                        Duración aprox.: {service.duration}
                      </span>
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-secondary" />

            {/* 4. Tus datos */}
            <h2 className="h5 mb-3 text-info">4. Tus datos</h2>
            <div className="mb-3">
              <label className="form-label small text-secondary">
                Nombre y apellido
              </label>
              <input
                type="text"
                className="form-control"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Ej: Gonzalo Copes"
              />
            </div>
            <div className="mb-3">
              <label className="form-label small text-secondary">
                Teléfono
              </label>
              <input
                type="tel"
                className="form-control"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Ej: 11 2345-6789"
              />
            </div>
            <div className="mb-2">
              <label className="form-label small text-secondary">
                Comentarios (opcional)
              </label>
              <textarea
                className="form-control"
                rows="2"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Ej: Prefiero máquina, voy con mi hijo, etc."
              />
            </div>

            <WhatsAppButton booking={booking} disabled={!canSend} />
            {!canSend && (
              <p className="small text-warning mt-2">
                🔔 Completá barbero (tocando una card), fecha, horario, al menos
                un servicio, nombre y teléfono para poder enviar el turno.
              </p>
            )}
          </div>
        </div>

        {/* Col derecha: resumen */}
        <div className="col-12 col-lg-5">
          <div className="card bg-dark border-0 shadow-lg p-3 h-100">
            <h2 className="h5 mb-3 text-info">Resumen del turno</h2>

            <p className="mb-1">
              <strong>Barbero:</strong>{" "}
              {booking.barberName ? (
                <span className="badge bg-info text-dark ms-1">
                  {booking.barberName}
                </span>
              ) : (
                <span className="text-secondary ms-1">Sin seleccionar</span>
              )}
            </p>
            <p className="mb-1">
              <strong>Fecha:</strong>{" "}
              {date ? (
                new Date(date + "T00:00:00").toLocaleDateString("es-AR")
              ) : (
                <span className="text-secondary ms-1">Sin seleccionar</span>
              )}
            </p>
            <p className="mb-3">
              <strong>Horario:</strong>{" "}
              {time ? (
                <span className="badge bg-warning text-dark ms-1">
                  {time} hs
                </span>
              ) : (
                <span className="text-secondary ms-1">Sin seleccionar</span>
              )}
            </p>

            <h3 className="h6 text-info">Servicio(s) elegido(s)</h3>
            {booking.servicesNames.length > 0 ? (
              <ul className="list-unstyled">
                {booking.servicesNames.map((name) => (
                  <li key={name} className="mb-1">
                    <span className="badge bg-success me-2">●</span>
                    {name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-secondary">No seleccionaste servicios.</p>
            )}

            <hr className="border-secondary" />

            <h3 className="h6 text-info">Datos del cliente</h3>
            <p className="mb-1">
              <strong>Nombre:</strong>{" "}
              {customerName || (
                <span className="text-secondary ms-1">Sin completar</span>
              )}
            </p>
            <p className="mb-1">
              <strong>Teléfono:</strong>{" "}
              {customerPhone || (
                <span className="text-secondary ms-1">Sin completar</span>
              )}
            </p>
            <p className="mb-0">
              <strong>Comentarios:</strong>{" "}
              {comments || (
                <span className="text-secondary ms-1">Sin comentarios</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
