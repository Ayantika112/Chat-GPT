import { useState } from "react";
import "./Style.css";
import axios from 'axios';
function WeatherApp() {

    const [cityname,SetCityName] = useState('');
    const [fetchCityName,SetCity] = useState(cityname);
    const [temp,SetTemp] = useState('');

    async function fetchWeather(){
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=04e351f6a91b4eb045c9ccc2e5ed9ac5`);
        let celsius = response.data.main.temp;
        SetTemp(celsius);
        SetCity(cityname);

    }
  return (
    <>
      <div className="">
        <section class="vh-100" style={{ "background-color": "#f5f6f7" }}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-10 col-lg-8 col-xl-6">
                <div style={{'display':'flex'}}>
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    onChange={e => SetCityName(e.target.value)}
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    onClick={()=>fetchWeather()}
                  >
                    Search
                  </button>
                </div>
                <div
                  class="card bg-dark text-white"
                  style={{ "border-radius": "40px" }}
                >
                  <div class="bg-image" style={{ "border-radius": "35px" }}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                      class="card-img"
                      alt="weather"
                    />
                  </div>
                  <div class="card-img-overlay text-dark p-5">
                    <h4 class="mb-0">{fetchCityName}</h4>
                    <p class="display-2 my-3">{temp}°C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default WeatherApp;
