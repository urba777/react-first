import { createContext } from 'react';

const Types = createContext((localStorage.getItem('bookTypes')) ? JSON.parse(localStorage.getItem('bookTypes')) : []);
//jeigu localStorage egzistuoja - paima is localStorage ir be Loading iskart parodo kategorija. 
//O jeigu ne - rodo loading, kol uzkrauna ir sukuria tada localStorage (App.js aprasytas kodas) ir vel visada automatiskai uzkraus be LOADINIMO sugrizus i puslapi (atsimins)
export default Types; 