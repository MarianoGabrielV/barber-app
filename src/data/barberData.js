// src/data/barberData.js

export const barbers = [
  {
    id: "barber-juan",
    name: "Juan",
    specialty: "Degradados, fades y cortes modernos",
    img: "/images/barbers/juan.png", // cambiá el nombre según tu imagen
    servicesHighlights: [
      "Especialista en fade",
      "Cortes urbanos",
      "Atención rápida",
    ],
  },
  {
    id: "barber-mateo",
    name: "Mateo",
    specialty: "Cortes clásicos y perfilado de barba",
    img: "/images/barbers/mateo.png",
    servicesHighlights: [
      "Cortes clásicos",
      "Perfilado de barba",
      "Ideal para primera vez",
    ],
  },
  {
    id: "barber-lucas",
    name: "Lucas",
    specialty: "Cortes urbanos y diseño",
    img: "/images/barbers/lucas.png",
    servicesHighlights: [
      "Diseños en el cabello",
      "Estilo urbano",
      "Asesoría de imagen",
    ],
  },
];

export const services = [
  {
    id: "serv-corte",
    name: "Corte de pelo",
    duration: "30 min",
    description: "Corte completo con máquina y tijera.",
  },
  {
    id: "serv-barba",
    name: "Arreglo de barba",
    duration: "20 min",
    description: "Perfilado de barba con máquina y terminación.",
  },
  {
    id: "serv-completo",
    name: "Corte + barba",
    duration: "45 min",
    description: "Combo completo para salir impecable.",
  },
  {
    id: "serv-nino",
    name: "Corte niño",
    duration: "25 min",
    description: "Corte para chicos, con paciencia y onda.",
  },
];

export const timeSlots = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
];
