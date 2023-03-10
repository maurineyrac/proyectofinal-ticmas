//**  ======= BOOTSTRAP FORM SCRIPT VALIDACION DE SUBMIT =======  **//

(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

/* ======= BACK TO TOP SCRIPT =======  */

const mybutton = document.getElementById("envol-btt");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.classList.add('customshow')
  } else {
    mybutton.classList.remove('customshow')
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ======= NAVBAR JS - COLAPSAR AL HACER CLICK =======  */

const navbarcoll = document.getElementById('navbarSupportedContent');
const changeicon = document.getElementById('menu-icon');

changeicon.onclick = function () {
	changeicon.classList.toggle('fa-times');
}

document.onclick = function (clickevent) {
	if (clickevent.target.id !== 'navbarSupportedContent' && clickevent.target.id !== 'menu-icon') {
		changeicon.classList.remove('fa-times');
		bsCollapse.hide();
	}
}

const navlinks = document.querySelectorAll('.nav-item');
const bsCollapse = new bootstrap.Collapse(navbarcoll, { toggle: false });
navlinks.forEach((click) => {
    click.addEventListener('click', () => { bsCollapse.hide() })
})

/* ======= ICONOS HABILIDADES - TRANSICION =======  */
const hablink = document.getElementById('hablink');
const habcont = document.getElementById('conthab-secc');
hablink.onclick = function () {
	habcont.classList.add('animation');
}

function removeanimation() { habcont.classList.remove('animation') }
const bloqhab = document.getElementById('bloq-hab')
bloqhab.onmouseover = function () {
	setTimeout(removeanimation, 1000);
}












