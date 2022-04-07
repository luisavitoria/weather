import { useState } from "react";

import Capitais from "./components/Capitais";
import './index.css'
import lupa from './assets/lupa-arredondada.png'

function App() {

  const [city, setCity] = useState('')
  const [dadosCity, setDadosCity] = useState({})

  async function handleSearch() {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=a02e9b86eb6e9d7f2e6091fe32878c09`)
    const dados = await response.json()
    console.log(dados)
    dados.forEach(item => {
      const lat = item.lat
      console.log(lat)
    })
    
  }


  return (
    
      <div className="container">

        <main className="main">
          <h1>Previsão do tempo</h1>
          <div className="bloco-input">
            <input type='text' placeholder='Insira aqui o nome da cidade' value={city} onChange={(e) => setCity(e.target.value) }></input>
            <button onClick={ handleSearch }><img src={lupa}></img></button>
          </div>
          
          <hr/>
        </main>

        <div className="capitais">
          <div className="titulo-capitais">
            <h2>Capitais</h2>
          </div>
          

          <div className="table">
            <table className="table-left">
              <tbody>
                <tr id="min-max">
                  <td>Min</td>
                  <td>Máx</td>
                </tr>
                <Capitais tempMin={20} tempMax={30}  cidade='Rio de Janeiro'></Capitais>
                <Capitais tempMin={20} tempMax={30}  cidade='São Paulo'></Capitais>
                <Capitais tempMin={20} tempMax={30}  cidade='Belo Horizonte'></Capitais>
                <Capitais tempMin={20} tempMax={30}  cidade='Brasília'></Capitais>
                <Capitais tempMin={20} tempMax={30}  cidade='Belém'></Capitais>
              </tbody>
            </table>

            <table className="table-right">
              <tbody>
                <tr id="min-max">
                  <td>Min</td>
                  <td>Máx</td>
                </tr>

                <Capitais tempMin={20} tempMax={30}  cidade='Salvador'></Capitais>
                <Capitais tempMin={20} tempMax={30}  cidade='Curitiba'></Capitais>
                <Capitais tempMin={20} tempMax={30}  cidade='Fortaleza'></Capitais>
                <Capitais tempMin={20} tempMax={30}  cidade='Manaus'></Capitais>
                <Capitais tempMin={20} tempMax={30}  cidade='João Pessoa'></Capitais>

              </tbody>
            </table>
          </div>

        
        </div>
      </div>
    
  );
}

export default App;
