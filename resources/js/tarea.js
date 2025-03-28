//creacion de funcion separadora de pasos
let paso = 0;
const separador = () => {
    paso++;
    console.log(' ');
    console.log('******************************');
    console.log(`Paso ${paso}`);
    console.log('-----------------------------');
}

//Objeto inicial
let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Paso 1
separador();

const greenEnergy = (objeto) => {
    objeto['Fuel Type'] = 'avocado oil';
}

// mostrar el objeto antes de la modificacion
console.log(spaceship);

//modificar el objeto
greenEnergy(spaceship);

// mostrar el objeto despues de la modificacion
console.log(spaceship);


// Paso 2
separador();

const remoteDisable = (objeto) => {
    objeto.disabled = true;
}

// mostrar el objeto antes de la modificacion
console.log(spaceship);

//modificar el objeto
remoteDisable(spaceship);

// mostrar el objeto despues de la modificacion

console.log(spaceship);




// Paso 3
separador();

// confirmacion de que los cambio se realizaron correctamente
greenEnergy(spaceship);
remoteDisable(spaceship);

console.log(spaceship);