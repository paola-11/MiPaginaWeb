$(document).ready(function() {
  $("#btn-info").click(function() {
    alert("Gracias por tu interés en ProyecWeb. Muy pronto tendremos más información para ti. 🚀");
  });
});

//Servicio 
// Base de datos de servicios
const servicios = {
  1: {
    titulo: "Mantenimiento preventivo de computadoras", 
    precio: "$50", 
    disponibilidad: "10 cupos esta semana.",
    promocion: "No hay descuentos disponibles.",
    img: "mantenimiento.jpeg", 
    descripcion: "Revisión y limpieza interna, pruebas de hardware y optimización."
  },
  2: {
    titulo: "Instalación de software", 
    precio: "$30", 
    disponibilidad: "5 cupos esta semana.",
    promocion: "Incluye instalación de un programa gratis.",
    img: "Instalación Software.jpeg", 
    descripcion: "Instalación y configuración de paquetes y drivers."
  },
  3: {
    titulo: "Diseño de páginas web", 
    precio: "$200", 
    disponibilidad: "2 cupos disponibles este mes.",
    promocion: "Descuento del 10% por pago en efectivo.",
    img: "Diseño páginas web.jpeg",
    descripcion: "Diseño responsive y experiencia de usuario (UI/UX)."
  },
  4: {
    titulo: "Desarrollo de aplicaciones móviles", 
    precio: "$500", 
    disponibilidad: "1 cupo disponible este mes.",
    promocion: "Incluye una asesoría gratis de 2 horas.",
    img: "Desarrollo Aplicaciones Móviles.jpeg", 
    descripcion: "Desarrollo nativo o híbrido según requerimiento."
  },
  5: {
    titulo: "Recuperación de datos", 
    precio: "$80", 
    disponibilidad: "8 cupos disponibles esta semana.",
    promocion: "No hay descuentos disponibles.",
    img: "Recuperación de datos.jpeg",
    descripcion: "Recuperación desde discos, memorias y dispositivos dañados."
  },
  6: {
    titulo: "Eliminación de virus y malware", 
    precio: "$40", 
    disponibilidad: "6 cupos disponibles hoy.",
    promocion: "Incluye instalación de antivirus gratuito.",
    img: "Eliminación de virus y malware.jpeg", 
    descripcion: "Escaneo y limpieza profunda, actualizaciones de seguridad."
  },
  7: {
    titulo: "Optimización SEO", 
    precio: "$150", 
    disponibilidad: "4 proyectos disponibles este mes.",
    promocion: "Descuento del 15% para clientes recurrentes.",
    img: "Optimización SEO.jpeg", 
    descripcion: "Auditoría y recomendaciones para mejorar posicionamiento."
  },
  8: {
    titulo: "Instalación de redes WIFI", 
    precio: "$100", 
    disponibilidad: "3 cupos disponibles esta semana.",
    promocion: "Incluye asesoría en seguridad de la red.",
    img: "Instalación de redes WIFI.jpeg", 
    descripcion: "Diseño e instalación de redes inalámbricas seguras."
  },
  9: {
    titulo: "Capacitación en informática básica", 
    precio: "$60", 
    disponibilidad: "10 cupos disponibles este mes.",
    promocion: "2x1 en la inscripción.",
    img: "Capacitación en informática básica.jpeg", 
    descripcion: "Cursos prácticos para usuarios y empresas."
  },
  10:{
    titulo: "Instalación de antivirus y firewall", 
    precio: "$120", 
    disponibilidad: "5 cupos esta semana.",
    promocion: "Incluye configuración de seguridad avanzada gratis.",
    img: "Instalación de antivirus y firewall.jpeg",
    descripcion: "Configuración y protección contra amenazas."
  }
};

// Al cargar la página
$(function(){
  // obtener id del query string (ejemplo: detalle.html?id=3)
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || '1';
  const s = servicios[id];

  if(!s){
    $('#detalle').html('<p>Servicio no encontrado.</p>');
    return;
  }

  $('#titulo').text(s.titulo);
  $('#imagen').attr('src', s.img).attr('alt', s.titulo);
  $('#descripcion').text(s.descripcion);
  $('#precio').text('Precio: ' + s.precio);
  $('#disponibilidad').text('Disponibilidad: ' + s.disponibilidad);
  $('#promocion').text('Promoción: ' + s.promocion);
});

//Login 
document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Simulación de credenciales de administrador
  if(email === "admin@proyecweb.com" && password === "12345"){
    alert("Bienvenido Administrador");
    window.location.href = "admin-dashboard.html"; // futura página de gestión
  } else {
    alert("Credenciales incorrectas. Inténtalo de nuevo.");
  }
});