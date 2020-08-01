import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <fieldset>
        <h1>Form Pembelian Buah</h1>
        <p>
          <label><b>Nama Pelanggan : </b></label>
          <input type="text" name="name" placeholder="Masukkan nama"></input>
        </p>
        <p>
          <label><b>Daftar Item : </b></label>
          <input type="checkbox" name="daftar item" id="Semangka" value="Semangka"></input>
          <label for="Semangka">Semangka</label>
           <input type="checkbox" name="daftar item" id="Jeruk" value="Jeruk"></input>
          <label for="Jeruk">Jeruk</label>
           <input type="checkbox" name="daftar item" id="Nanas" value="Nanas"></input>
          <label for="Nanas">Nanas</label>
           <input type="checkbox" name="daftar item" id="Salak" value="Salak"></input>
          <label for="Salak">Salak</label>
           <input type="checkbox" name="daftar item" id="Anggur" value="Anggur"></input>
          <label for="Anggur">Anggur</label>
        </p>
        <input type="submit" value="Kirim"></input>
      </fieldset>
    </div>
  );
}

export default App;
