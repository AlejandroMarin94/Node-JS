let listaPilotos = [
  {
    id: 1,
    nombre: 'Carlos Sainz',
    paisDeOrigen: 'España',
    fechaDeNacimiento: '1962-04-12',
    vehiculo: 'Ford (Ford M-Sport)',
  },
  {
    id: 2,
    nombre: 'Yazeed Al-Rajhi',
    paisDeOrigen: 'Arabia Saudita',
    fechaDeNacimiento: '1981-09-30',
    vehiculo: 'Toyota Hilux (Overdrive Racing)',
  },
  {
    id: 3,
    nombre: 'Henk Lategan',
    paisDeOrigen: 'Sudáfrica',
    fechaDeNacimiento: '1994-05-18',
    vehiculo: 'Toyota Hilux (Toyota Gazoo Racing)',
  },
  {
    id: 4,
    nombre: 'Mattias Ekström',
    paisDeOrigen: 'Suecia',
    fechaDeNacimiento: '1978-07-14',
    vehiculo: 'Ford Raptor (Ford M-Sport)',
  },
  {
    id: 5,
    nombre: 'Nasser Al-Attiyah',
    paisDeOrigen: 'Catar',
    fechaDeNacimiento: '1970-12-21',
    vehiculo: 'Dacia Duster (The Dacia Sandriders)',
  },
  {
    id: 6,
    nombre: 'Mitchell Guthrie',
    paisDeOrigen: 'Estados Unidos',
    fechaDeNacimiento: '1996-03-31',
    vehiculo: 'Ford Raptor (Ford M-Sport)',
  },
  {
    id: 7,
    nombre: 'Mathieu Serradori',
    paisDeOrigen: 'Francia',
    fechaDeNacimiento: '1979-08-02',
    vehiculo: 'Century CR6 (Century Racing Factory Team)',
  },
  {
    id: 8,
    nombre: 'Juan Cruz Yacopini',
    paisDeOrigen: 'Argentina',
    fechaDeNacimiento: '1998-01-15',
    vehiculo: 'Toyota Hilux (Overdrive Racing)',
  },
  {
    id: 9,
    nombre: 'Joao Ferreira',
    paisDeOrigen: 'Portugal',
    fechaDeNacimiento: '1990-11-22',
    vehiculo: 'Mini JCW Rally (X-Raid Mini JCW Team)',
  },
  {
    id: 10,
    nombre: 'Seth Quintero',
    paisDeOrigen: 'Estados Unidos',
    fechaDeNacimiento: '2002-09-25',
    vehiculo: 'Toyota Hilux (Toyota Gazoo Racing)',
  },
];

// Funcion que devuelve todos los pilotos
export const getPilotosFetch = () => {
  return [...listaPilotos];
};

//  Fucnion que devuelve los pìlotos menos el que se ha filtrado por su id
export const deletePilotoFetch = (idPiloto) => {
  listaPilotos = listaPilotos.filter((p) => p.id !== idPiloto);
};

// Funcion que obtiene los datos de un piloto por su id
export const getPilotoById = (idPiloto) => {
  return listaPilotos.find((p) => p.id === idPiloto);
};

// Función que añade un piloto a la lista de pilotos existente
export const createPilotoFetch = (newPiloto) => {
  const maxId = listaPilotos
    .map((piloto) => piloto.id)
    .sort((a, b) => b - a)[0];

  const aux = {
    ...newPiloto,
    id: maxId + 1,
  };

  listaPilotos.push(aux);
};

// Funcion que guarda los cambios realizados en el piloto
export const editPilotoFetch = (idPiloto, editedPiloto) => {
  console.log(idPiloto);
  console.log(editedPiloto);

  const auxEditedPiloto = {
    ...editedPiloto,
    id: idPiloto,
  };

  const auxlist = listaPilotos.filter((p) => p.id !== idPiloto);
  auxlist.push(auxEditedPiloto);
  listaPilotos = auxlist.sort((a, b) => a.id - b.id);
};
