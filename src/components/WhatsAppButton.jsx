// src/components/WhatsAppButton.jsx
import { clientConfig } from "../config/clientConfig";

export default function WhatsAppButton({ booking, disabled, onAfterSend }) {
  const handleClick = () => {
    if (disabled) return;

    const {
      barberName,
      date,
      time,
      servicesNames,
      customerName,
      customerPhone,
      comments,
    } = booking;

    const dateFormatted = date
      ? new Date(date + "T00:00:00").toLocaleDateString("es-AR")
      : "";

    const servicesText =
      servicesNames && servicesNames.length
        ? servicesNames.join(", ")
        : "Sin servicios seleccionados";

    const message = `
💈 *Nuevo turno solicitado*

Barbería: *${clientConfig.shopName}*
Barbero: *${barberName}*
Fecha: *${dateFormatted}*
Horario: *${time}*
Servicio(s): *${servicesText}*

Datos del cliente:
• Nombre: *${customerName}*
• Teléfono: *${customerPhone}*

Comentarios:
${comments || "Sin comentarios."}
    `.trim();

    const url = `https://wa.me/${clientConfig.phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    // Avisamos al formulario que el turno se confirmó
    if (onAfterSend) {
      onAfterSend();
    }
  };

  return (
    <button
      className="btn btn-success w-100 mt-3 fw-semibold"
      onClick={handleClick}
      disabled={disabled}
    >
      {disabled ? "Completá los datos para enviar" : "Enviar turno por WhatsApp"}
    </button>
  );
}
