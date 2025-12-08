const questions = [
    `<p>¿Cuál es la capital de Perú?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Cusco</button>
      <button onclick="checkAnswer(this)" data-correct="true">Lima</button>
      <button onclick="checkAnswer(this)" data-correct="false">Arequipa</button>`,
  
    `<p>¿Cuál es la capital de Chile?</p>
      <button onclick="checkAnswer(this)" data-correct="true">Santiago</button>
      <button onclick="checkAnswer(this)" data-correct="false">Iquique</button>
      <button onclick="checkAnswer(this)" data-correct="false">Punta Arenas</button>`,
  
    `<p>¿Cómo se llama un pintor de Perú?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Pablo Picasso</button>
      <button onclick="checkAnswer(this)" data-correct="true">Fernando de Szyszlo</button>
      <button onclick="checkAnswer(this)" data-correct="false">Salvador Dalí</button>`,
  
    `<p>¿Cómo se llama un pintor de Chile?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Rodolfo Ayoroa</button>
      <button onclick="checkAnswer(this)" data-correct="false">Claude Monet</button>
      <button onclick="checkAnswer(this)" data-correct="true">Roberto Matta</button>`,
  
    `<p>¿Cómo se llama un actor de Perú?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Gael García Bernal</button>
      <button onclick="checkAnswer(this)" data-correct="false">Ricardo Darín</button>
      <button onclick="checkAnswer(this)" data-correct="true">Christian Meier</button>`,
  
    `<p>¿Cómo se llama un actor de Chile?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Javier Bardem</button>
      <button onclick="checkAnswer(this)" data-correct="true">Pedro Pascal</button>
      <button onclick="checkAnswer(this)" data-correct="false">Benicio del Toro</button>`,
  
    `<p>¿Cómo se llama una cantante de Perú?</p>
      <button onclick="checkAnswer(this)" data-correct="true">Eva Ayllón</button>
      <button onclick="checkAnswer(this)" data-correct="false">Shakira</button>
      <button onclick="checkAnswer(this)" data-correct="false">Luis Miguel</button>`,
  
    `<p>¿Cómo se llama una cantante de Chile?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Juanes</button>
      <button onclick="checkAnswer(this)" data-correct="false">Rosalía</button>
      <button onclick="checkAnswer(this)" data-correct="true">Mon Laferte</button>`,
  
    `<p>¿Qué plato es típico del Perú?</p>
      <button onclick="checkAnswer(this)" data-correct="true">Ceviche</button>
      <button onclick="checkAnswer(this)" data-correct="false">Pastel de choclo</button>
      <button onclick="checkAnswer(this)" data-correct="false">Empanada</button>`,
  
    `<p>¿Cuál es el baile nacional de Chile?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Tango</button>
      <button onclick="checkAnswer(this)" data-correct="false">Marinera</button>
      <button onclick="checkAnswer(this)" data-correct="true">Cueca</button>`,
  
    `<p>¿Qué sitio arqueológico famoso está en Perú?</p>
      <button onclick="checkAnswer(this)" data-correct="true">Machu Picchu</button>
      <button onclick="checkAnswer(this)" data-correct="false">Isla de Pascua</button>
      <button onclick="checkAnswer(this)" data-correct="false">Torres del Paine</button>`,
  
    `<p>¿En qué país está la Isla de Pascua?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Perú</button>
      <button onclick="checkAnswer(this)" data-correct="true">Chile</button>
      <button onclick="checkAnswer(this)" data-correct="false">Bolivia</button>`,
  
    `<p>¿Qué instrumento andino tiene muchas flautas pequeñas?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Guitarra</button>
      <button onclick="checkAnswer(this)" data-correct="true">Zampoña</button>
      <button onclick="checkAnswer(this)" data-correct="false">Violín</button>`,
  
    `<p>¿Qué animal es típico de los Andes?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Elefante</button>
      <button onclick="checkAnswer(this)" data-correct="false">Canguro</button>
      <button onclick="checkAnswer(this)" data-correct="true">Llama</button>`,
  
    `<p>¿Qué fruta cítrica se usa para el ceviche?</p>
      <button onclick="checkAnswer(this)" data-correct="true">Limón</button>
      <button onclick="checkAnswer(this)" data-correct="false">Plátano</button>
      <button onclick="checkAnswer(this)" data-correct="false">Manzana</button>`,
  
    `<p>¿Cuál es el desierto famoso de Chile?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Gobi</button>
      <button onclick="checkAnswer(this)" data-correct="false">Sahara</button>
      <button onclick="checkAnswer(this)" data-correct="true">Atacama</button>`,
  
    `<p>¿Qué animal vive en los Andes?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Hipopótamo</button>
      <button onclick="checkAnswer(this)" data-correct="true">Cóndor andino</button>
      <button onclick="checkAnswer(this)" data-correct="false">Tigre de Bengala</button>`,
  
    `<p>¿Qué tipo de edificio es Huaca Pucllana?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Castillo medieval</button>
      <button onclick="checkAnswer(this)" data-correct="true">Pirámide de adobe</button>
      <button onclick="checkAnswer(this)" data-correct="false">Mezquita</button>`,
  
    `<p>¿Qué planta es nativa de los Andes?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Piña</button>
      <button onclick="checkAnswer(this)" data-correct="true">Patata</button>
      <button onclick="checkAnswer(this)" data-correct="false">Mango</button>`,
  
    `<p>¿Qué animal marino es común en Chile?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Foca monje</button>
      <button onclick="checkAnswer(this)" data-correct="true">Lobo marino</button>
      <button onclick="checkAnswer(this)" data-correct="false">Manatí</button>`,
  
    `<p>¿Qué arte textil es tradicional en los Andes?</p>
      <button onclick="checkAnswer(this)" data-correct="true">Tejidos con lana de alpaca</button>
      <button onclick="checkAnswer(this)" data-correct="false">Kimonos de seda</button>
      <button onclick="checkAnswer(this)" data-correct="false">Tapices persas</button>`,
  
    `<p>¿Qué volcán es famoso en Chile?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Popocatépetl</button>
      <button onclick="checkAnswer(this)" data-correct="true">Villarrica</button>
      <button onclick="checkAnswer(this)" data-correct="false">Etna</button>`,
  
    `<p>¿Qué lago está en Perú y Bolivia?</p>
      <button onclick="checkAnswer(this)" data-correct="true">Lago Titicaca</button>
      <button onclick="checkAnswer(this)" data-correct="false">Lago Nahuel Huapi</button>
      <button onclick="checkAnswer(this)" data-correct="false">Lago Llanquihue</button>`,
  
    `<p>¿Qué árbol es típico del norte de Chile?</p>
      <button onclick="checkAnswer(this)" data-correct="false">Queñoa</button>
      <button onclick="checkAnswer(this)" data-correct="true">Algarrobo</button>
      <button onclick="checkAnswer(this)" data-correct="false">Eucalipto</button>`,
  
    `<p>¿Qué pintura famosa está en Perú?</p>
      <button onclick="checkAnswer(this)" data-correct="true">Retablo de Ayacucho</button>
      <button onclick="checkAnswer(this)" data-correct="false">Mural del Cusco</button>
      <button onclick="checkAnswer(this)" data-correct="false">Guernica</button>`
  ];
  
  

let q_length = questions.length;
let remaining = [...questions];
localStorage.setItem('remaining',remaining);
// Clicking new question button
document.getElementById("newQuestion").onclick = () => {
  // Sets question box to no questions if remaining ?s == 0  
  if (remaining.length === 0) {
    document.getElementById("questionBox").innerHTML = "¡No quedan preguntas! Presiona reiniciar.";
    return;
  }
  document.getElementById("questionBox").classList.remove("noClick");
  const index = Math.floor(Math.random() * remaining.length);
  const q = remaining[index];
  remaining.splice(index, 1);

  document.getElementById("questionBox").innerHTML = q;
};

document.getElementById("reset").onclick = () => {
  remaining = [...questions];
  document.getElementById("questionBox").innerHTML = "Comenzando de nuevo...";
};


function checkAnswer(b) {
    document.getElementById("questionBox").classList.add("noClick");
    is_correct =  b.getAttribute('data-correct')=="true" ? true:false;
    console.log(is_correct)
}
