import { useEffect, useState } from "react";

import Capitais from "./components/Capitais";
import './index.css'
import lupa from './assets/lupa-arredondada.png'

function App() {

  const [cidade, setCidade] = useState('')
  const [dadosCidade, setDadosCidade] = useState('')
  const [weatherCidade, setWeatherCidade] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')


    async function handleSearch() {
      console.log(cidade)
      const responseCidade = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&appid=a02e9b86eb6e9d7f2e6091fe32878c09`)
      console.log(responseCidade)
      const responseCidadeJSON = await responseCidade.json()
      console.log(responseCidadeJSON)
      responseCidadeJSON.forEach((item) => {
        const lat = item.lat
        const lon = item.lon
        const name = item.name
        const state = item.state
        const country = item.country
    
        weatherSearch(lat, lon, name, state, country)
      })
      
      /*const lat = await dadosCidadeJSON[0].lat
      const lon = await dadosCidadeJSON[0].lon

      setLatitude(await lat)
      setLongitude(await lon)
      console.log(latitude)*/
    
    }

    async function weatherSearch(lat, lon, name,state, country) {
      
      console.log(lat,lon, name, state, country)

      const objeto = {
        name: name,
        state: state,
        country: country
      }

      setDadosCidade(objeto)

      const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a02e9b86eb6e9d7f2e6091fe32878c09&units=metric&lang=pt_br`)
      const responseWeatherJSON = await responseWeather.json()
      console.log(responseWeatherJSON)
      setWeatherCidade(responseWeatherJSON)
    }





  return (
    
    <div className="container">

      <main className="main">
        <h1>Previsão do tempo</h1>

        <div className="dados-tempo">
          
          {(dadosCidade && weatherCidade) && (
            <div className="dados-tempo-container">
              <div className="linha1">
               {`${dadosCidade.name}, ${dadosCidade.state} - ${dadosCidade.country}`}
              </div>
              <div className="linha2">
                <div>{`${weatherCidade.main.temp}°C`}</div>
                <div>{`${weatherCidade.weather[0].description}`}</div>
              </div>
              <div className="linha3">
                <div>{`MIN ${weatherCidade.main.temp_min}°C MAX ${weatherCidade.main.temp_max}°C`}</div>
                {`Sensação ${weatherCidade.main.feels_like}°C`}
              </div>
              <div className="linha4">
                <div>{`Vento ${weatherCidade.wind.speed}m/s`}</div>
                <div>{`Umidade ${weatherCidade.main.humidity}%`}</div>
                
              </div>
            </div>
            
          )}
        </div>

        <div className="bloco-input">
          <input type='text' placeholder='Insira aqui o nome da cidade' value={cidade} onChange={(e) => setCidade(e.target.value) }></input>
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








  


  
 
  

  
/*async function weatherSearch() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a02e9b86eb6e9d7f2e6091fe32878c09&units=metric`)
    const dadosWeather = await response.json()
    setCityWeather(dadosWeather)
    console.log(cityWeather)
  }
  */

   

 
  


  
