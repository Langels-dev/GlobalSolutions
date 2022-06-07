const date = {
  name: document.querySelector("#name"),
  mail: document.querySelector("#email"),
  phone: document.querySelector("#number"),
  subject: document.querySelector("#subject"),
  msg: document.querySelector("#message"),
};

const formulario = document.querySelector("#contactForm");
const btnSubmit = document.querySelector("#form-submit");

// Event listener

eventListeners();

function eventListeners() {
  const { name, mail, phone, subject, msg } = date;

  // Inicio de la aplicacion y deshabilitar submit
  document.addEventListener("DOMContentLoaded", iniciarApp);

  // Inputs
  name.addEventListener("blur", validarCampos);
  mail.addEventListener("blur", validarCampos);
  phone.addEventListener("blur", validarCampos);
  subject.addEventListener("blur", validarCampos);
  msg.addEventListener("blur", validarCampos);

  // BTN SUBMIT
  btnSubmit.addEventListener("click", EnviarEmail);
}

//Funciones
function iniciarApp() {
  btnSubmit.disabled = true;
}

// Valida que el campo tenga algo escrito

function validarCampos(e) {
  if (e.target.value.length > 0) {
    e.target.style.borderColor = "green";
  } else {
    e.target.style.borderColor = "red";
  }

  // Validar unicamente el email
  if (this.type === "email") {
    validarEmail(this);
  }

  if (
    date.name.value !== "" &&
    date.mail.value !== "" &&
    date.phone.value !== "" &&
    date.subject.value !== "" &&
    date.msg.value !== ""
  ) {
    btnSubmit.disabled = false;
    btnSubmit.style.cursor = "pointer";
  }
}

function validarEmail(campo) {
  const mensaje = campo.value;

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(mensaje.toLowerCase())) {
    campo.style.borderColor = "green";
  } else {
    campo.style.borderColor = "red";
  }
}

function EnviarEmail() {
  swal(
    "Global Solutions BPO",
    "Your message was sent successfully, thank you for contacting us",
    "success"
  );
}
