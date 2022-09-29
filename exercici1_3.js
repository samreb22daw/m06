/***************************
    Samuel Rebollo Rodriguez
    27/09/2022
    m06uf1ex1_exercici 1.3
***************************/

function mostrarData(){
    let llista1 = ['Paris', 'Londres', 'Roma', 'Berlin', 'Copenhaguen', 'Viena', 'Lisboa', 'Washington_DC', 'Otawa', 'L\'Havana', 'Santiago', 'Lima', 'Montevideo'
    , 'Canberra', 'Wellington', 'Monròvia', 'Abuja', 'Dakar', 'Tunis', 'Tokyo', 'Seül', 'Beijing', 'Taipei'];

    let llista2 = ['França', 'UK', 'Itàlia', 'Alemanya', 'Dinamarca', 'Àustria', 'Portugal', 'USA', 'Canada', 'Cuba', 'Xile', 'Perú', 'Uruguay',
    'Austràlia', 'Nova_Zelanda', 'Libèria', 'Nigèria', 'Senegal', 'Tunísia', 'Japó', 'Corea_Sud', 'Xina', 'Taiwan'];

    let llista3 = ['Europa', 'Europa', 'Europa', 'Europa', 'Europa', 'Europa', 'Europa', 'Amèrica', 'Amèrica', 'Amèrica', 'Amèrica', 'Amèrica',
    'Amèrica', 'Oceania', 'Oceania', 'Àfrica', 'Àfrica', 'Àfrica', 'Àfrica', 'Àsia', 'Àsia', 'Àsia', 'Àsia'];

    document.getElementById('boto').onclick = function(){
        let n1 = parseInt(document.getElementById('n1').value);
        if (n1 <= 0 || n1 >= 11){
            document.getElementById('taula').innerHTML =` `;
            document.getElementById('error').innerHTML =`Número de filas no válido. Introduce un número entre el 1 y el 10.`;
        }
        else{
            document.getElementById('error').innerHTML =` `;
            document.getElementById('taula').innerHTML = '<tr><th>Ciudad</th><th>País</th><th>Continente</th></tr>';
            for (let i = 0; i < n1; i++){
                let rangNombres = llista1.length - 1;
                let numAl = Math.round(Math.random()* rangNombres);
                document.getElementById('taula').innerHTML +=`<tr><td>${llista1[numAl]}</td><td>${llista2[numAl]}</td><td>${llista3[numAl]}</td></tr>`;
            }
        }
    }
}

window.onload=mostrarData;