document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SELECT (solo si existe)
  ========================= */
  const select = document.getElementById("formSelect");

  if (select) {
    select.addEventListener("change", (e) => {
      const value = e.target.value;

      if (value === "1") window.location.href = "./boton.html";
      if (value === "2") window.location.href = "./usuario.html";
      if (value === "3") window.location.href = "./sucursal.html";
    });
  }

  /* =========================
     BOTON FORM
  ========================= */
  const formBoton = document.getElementById("formularioboton");

if (formBoton) {

  window.enviarFormulario = function () {

    const campos = formBoton.querySelectorAll("input, textarea, select");

    const ignorar = [
      "DiasSeleccionados",
      "plataformasactivas",
      "precioplataformas",
      "SIEMPREDISPONIBLE"
    ];

    for (let c of campos) {

      if (!c.name) continue;
      if (c.type === "hidden") continue;
      if (ignorar.includes(c.name)) continue;

      // SOLO validar campos required
      if (c.hasAttribute("required") && c.value.trim() === "") {

        alert("Completa todos los campos obligatorios");
        c.focus();
        return;
      }
    }

    formBoton.requestSubmit();
  };
}
  /* =========================
     USUARIO FORM
  ========================= */
  const formUsuario = document.getElementById("formularioUsuario");

if (formUsuario) {

  window.enviarFormulario1 = function () {

    const campos = formUsuario.querySelectorAll("input, textarea, select");

    for (let c of campos) {

      if (!c.name) continue;
      if (c.type === "hidden") continue;

      // SOLO validar required
      if (c.hasAttribute("required") && c.value.trim() === "") {

        alert("Completa todos los campos obligatorios");
        c.focus();
        return;
      }
    }

    formUsuario.requestSubmit();
  };
}
  /* =========================
     Sucursal FORM
  ========================= */
  const formSucursal = document.getElementById("formularioSucursal");

if (formSucursal) {

  window.enviarFormulario2 = function () {

    const campos = formSucursal.querySelectorAll("input, textarea, select");

    for (let c of campos) {

      if (!c.name) continue;
      if (c.type === "hidden") continue;

      // SOLO validar required
      if (c.hasAttribute("required") && c.value.trim() === "") {

        alert("Completa todos los campos obligatorios");
        c.focus();
        return;
      }
    }

    formSucursal.requestSubmit();
  };
}

  /* =========================
     LIMPIAR (GLOBAL)
  ========================= */
  window.limpiarFormulario = function (id) {

    const form = document.getElementById(id);
    if (!form) return;

    form.reset();

    document.querySelectorAll(".btn-dark").forEach(btn => {
      btn.classList.remove("btn-dark");
      btn.classList.add("btn-outline-dark");
    });
  };

  /* =========================
     TOGGLES
  ========================= */
  window.toggleSelection = function (day) {

    const input = document.getElementById("DiasSeleccionados");
    const btn = document.getElementById(day);

    if (!input || !btn) return;

    let list = input.value ? input.value.split(",").filter(Boolean) : [];

    if (btn.classList.contains("btn-outline-dark")) {
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-dark");
      if (!list.includes(day)) list.push(day);
    } else {
      btn.classList.remove("btn-dark");
      btn.classList.add("btn-outline-dark");
      list = list.filter(d => d !== day);
    }

    input.value = list.join(",");
  };

  window.toggleDias = function () {
  const check = document.getElementById("siempreCheck");
  const cont = document.getElementById("contenedorDias");
  const hidden = document.getElementById("Always");

  if (!check || !cont || !hidden) return;

  // Mostrar/ocultar días
  cont.style.display = check.checked ? "none" : "block";

  // 👇 ESTA ES LA CLAVE
  hidden.value = check.checked ? "SI" : "NO";
};

  window.toggleSelectionPlataforma = function (p) {

    const input = document.getElementById("plataformasactivas");
    const btn = document.getElementById(p);

    if (!input || !btn) return;

    let list = input.value ? input.value.split(",").filter(Boolean) : [];

    if (btn.classList.contains("btn-outline-dark")) {
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-dark");
      if (!list.includes(p)) list.push(p);
    } else {
      btn.classList.remove("btn-dark");
      btn.classList.add("btn-outline-dark");
      list = list.filter(x => x !== p);
    }

    input.value = list.join(",");
  };

  window.toggleContainerplataforma = function () {
  const check = document.getElementById("flexCheckplataforma");
  const cont = document.getElementById("containerContent1");

  if (!check || !cont) return;

  cont.style.display = check.checked ? "block" : "none";

  // reset si se desactiva
  if (!check.checked) {
    document.getElementById("plataformasactivas").value = "";
    cont.querySelectorAll(".btn-dark").forEach(btn => {
      btn.classList.remove("btn-dark");
      btn.classList.add("btn-outline-dark");
    });
  }
};

window.toggleRespuesta = function (checkId, inputId) {
  const check = document.getElementById(checkId);
  const hidden = document.getElementById(inputId);

  if (!check || !hidden) return;

  hidden.value = check.checked ? "SI" : "NO";
};

/* =========================
   LIBRERÍAS (SEGURO)
========================= */

const initFlatpickr = () => {
  if (typeof flatpickr === "undefined") return;

  const f1 = document.querySelector("#fechaInput");
  if (f1) {
    flatpickr(f1, {
      dateFormat: "Y-m-d",
      minDate: "today"
    });
  }

  const f2 = document.querySelector("#fechaApertura");
  if (f2) {
    flatpickr(f2, {
      dateFormat: "Y-m-d",
      minDate: "today"
    });
  }
};

const initTomSelect = () => {
  if (typeof TomSelect === "undefined") return;

  const sel = document.querySelector("#tipoSucursal");
  if (sel) {
    new TomSelect(sel, {
      create: false,
      sortField: {
        field: "text",
        direction: "asc"
      }
    });
  }
};

initFlatpickr();
initTomSelect();

});