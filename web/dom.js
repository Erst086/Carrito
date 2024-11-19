const x = document.getElementById('xbox');
const p = document.getElementById('play');
const n = document.getElementById('nin');

// Obtener el campo donde cambiará el valor de id_plataforma
const idPlataformaField = document.querySelector('id_plataforma');

// Asignar los eventos onclick a las imágenes
x.onclick = function() {
  idPlataformaField.value = 1;  // Asignar el valor correspondiente para Xbox
  console.log('id_plataforma cambiado a 1');
};

p.onclick = function() {
  idPlataformaField.value = 3;  // Asignar el valor correspondiente para PlayStation
  console.log('id_plataforma cambiado a 3');
};

n.onclick = function() {
  idPlataformaField.value = 2;  // Asignar el valor correspondiente para Nintendo
  console.log('id_plataforma cambiado a 2');
};
