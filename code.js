
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);


function obtenerDatosDelUsuario() {
  

  datosPersona.nombre = prompt('Ingrese su nombre:');
  datosPersona.anioNacimiento = parseInt(prompt('Ingrese su año de nacimiento:'));
  datosPersona.ciudad = prompt('Ingrese su ciudad:');
  datosPersona.interesEnJS = prompt('¿Le interesa JavaScript? (Sí/No):');
  const anioActual = new Date().getFullYear();
  datosPersona.edad = anioActual - datosPersona.anioNacimiento;


}

function renderizarDatosUsuario() {
  
  obtenerDatosDelUsuario();
  
  const nombreSpan = document.querySelector('#nombre');
  const edadSpan = document.querySelector('#edad');
  const ciudadSpan = document.querySelector('#ciudad');
  const javascriptSpan = document.querySelector('#javascript');

  nombreSpan.textContent = datosPersona.nombre;
  edadSpan.textContent = datosPersona.edad;
  ciudadSpan.textContent = datosPersona.ciudad;
  javascriptSpan.textContent = datosPersona.interesEnJS ? 'Sí' : 'No';


}


function recorrerListadoYRenderizarTarjetas() {
 
  document.getElementById('fila').innerHTML = '';
  const materias = [
    { lenguajes: 'HTML, CSS', bimestre: 1, imgSrc: 'https://ostraining.com/wp-content/uploads/coding/html5-css3-hd.jpg', alt: 'Materia 1' },
    { lenguajes: 'JavaScript', bimestre: 2, imgSrc: 'https://logowik.com/content/uploads/images/javascript.jpg', alt: 'Materia 2' },
    { lenguajes: 'Java', bimestre: 3, imgSrc: 'https://cdn-icons-png.flaticon.com/512/226/226777.png', alt: 'Materia 3' },
  ];
  const fila = document.querySelector('#fila');

  for (const materia of materias) {
    const caja = document.createElement('div');
    caja.className = 'caja';

    const imagen = document.createElement('img');
    imagen.src = materia.imgSrc;
    imagen.alt = materia.alt;

    const lenguajesParrafo = document.createElement('p');
    lenguajesParrafo.className = 'lenguajes';
    lenguajesParrafo.textContent = `Lenguajes: ${materia.lenguajes}`;

    const bimestreParrafo = document.createElement('p');
    bimestreParrafo.className = 'bimestre';
    bimestreParrafo.textContent = `Bimestre: ${materia.bimestre}`;

    caja.appendChild(imagen);
    caja.appendChild(lenguajesParrafo);
    caja.appendChild(bimestreParrafo);

    fila.appendChild(caja);
  }

  document.querySelector('#obtener-materias').removeEventListener('click', renderizarMaterias);
}






function alternarColorTema() {
 

  const sitioElemento = document.querySelector('#sitio');
  sitioElemento.classList.toggle('dark');


  const cambiarTemaBtn = document.querySelector('#cambiarTema');
  cambiarTemaBtn.addEventListener('click', cambiarTema);
}



document.addEventListener('keydown', (event) => {
  if (event.key === 'F' || event.key === 'f') {
    const sobreMiParrafo = document.getElementById('sobre-mi');
    sobreMiParrafo.classList.remove('oculto');
  }
});