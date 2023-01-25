import React, { useState } from 'react';
const api = {
  key: "your api key",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      try{   fetch(`${api.base}forecast?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
       setQuery("");
        console.log(result);
      });}
      catch (error) {
        alert("None avaliable city")
    }
    }
  }
  

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
 if(weather===""){
  return(
    <div>
       <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
    </div>
  )
 }else{
  return (
    <div className="theme">
     
     <input 
            type="text"
            className="search-bar"
            placeholder="Search City Name..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
         <div>
        {
         
          weather && (
            <div  
            className={(weather.list[5].weather[0].main)==="Clouds" ? 'currentday' : 
            (weather.list[5].weather[0].main)==="Rain" ? 'raincurrent': 
            (weather.list[5].weather[0].main)==="Clear" ? 'clearday' :
            (weather.list[5].weather[0].main)==="Snow" ? 'snowday': ""}>  
              <div className='cityname'>
              {weather.city.name}, {weather.city.country}
              </div>
              <br/>
              <div className="date">{dateBuilder(new Date())}</div>
              <label>{"During the day: "} {weather.list[5].weather[0].main}, {weather.list[5].weather[0].description}</label>
              <p/>
              <label>{weather.list[0].dt_txt} - {weather.list[0].main.temp}{"°F"} - {weather.list[0].weather[0].description}</label>
              <br/>
              <label>{"Max: "}{weather.list[0].main.temp_max}</label>
              <label> {"Min: "}{weather.list[0].main.temp_min}</label>
              <p/>
              <label>{weather.list[2].dt_txt} - {weather.list[2].main.temp}{"°F"} - {weather.list[2].weather[0].description}</label>
              <br/>
              <label>{"Max: "}{weather.list[2].main.temp_max}</label>
              <label> {"Min: "}{weather.list[2].main.temp_min}</label>
              <p/>
              <label>{weather.list[4].dt_txt} - {weather.list[4].main.temp}{"°F"} - {weather.list[4].weather[0].description}</label>
              <br/>
              <label>{"Max: "}{weather.list[4].main.temp_max}</label>
              <label> {"Min: "}{weather.list[4].main.temp_min}</label>
              <p/>
              <label>{weather.list[6].dt_txt} - {weather.list[6].main.temp}{"°F"} - {weather.list[6].weather[0].description}</label>
              <br/>
              <label>{"Max: "}{weather.list[6].main.temp_max}</label>
              <label> {"Min: "}{weather.list[6].main.temp_min}</label>
              <p/>
              <label>{weather.list[8].dt_txt} - {weather.list[8].main.temp}{"°F"} - {weather.list[8].weather[0].description}</label>
              <br/>
              <label>{"Max: "}{weather.list[8].main.temp_max}</label>
              <label> {"Min: "}{weather.list[8].main.temp_min}</label>
            

        <h1>NEXT DAYS</h1>
       
              <div className='otherdays'>
                <ul>
                  <li>
                  <div className={(weather.list[14].weather[0].main)==="Rain" ? 'nextdays' : 
            (weather.list[14].weather[0].main)==="Clouds" ? 'nextdayscloud': 
            (weather.list[14].weather[0].main)==="Clear" ? 'nextdaysclear' : 
            (weather.list[14].weather[0].main)==="Snow" ? 'nextdayssnow' : ""}>
              <label>{weather.list[14].dt_txt} - {weather.list[14].main.temp}{"°F"} - {weather.list[14].weather[0].main}</label>
              <br/>
              <label>{"Max: "}{weather.list[14].main.temp_max}</label>
              <label> {"Min: "}{weather.list[14].main.temp_min}</label>
              </div>
                  </li>

                  <li>
                  <div className={(weather.list[22].weather[0].main)==="Rain" ? 'nextdays' : 
            (weather.list[22].weather[0].main)==="Clouds" ? 'nextdayscloud': 
            (weather.list[22].weather[0].main)==="Clear" ? 'nextdaysclear' : 
            (weather.list[22].weather[0].main)==="Snow" ? 'nextdayssnow' : ""}>
              <label>{weather.list[22].dt_txt} - {weather.list[22].main.temp}{"°F"} - {weather.list[22].weather[0].main}</label>
              <br/>
              <label>{"Max: "}{weather.list[22].main.temp_max}</label>
              <label> {"Min: "}{weather.list[22].main.temp_min}</label>
              </div>
                  </li>
                  <li>
                  <div className={(weather.list[30].weather[0].main)==="Rain" ? 'nextdays' : 
            (weather.list[30].weather[0].main)==="Clouds" ? 'nextdayscloud': 
            (weather.list[30].weather[0].main)==="Clear" ? 'nextdaysclear' :
            (weather.list[30].weather[0].main)==="Snow" ? 'nextdayssnow' : ""}>
              <label>{weather.list[30].dt_txt} - {weather.list[30].main.temp}{"°F"} - {weather.list[30].weather[0].main}</label>
              <br/>
              <label>{"Max: "}{weather.list[30].main.temp_max}</label>
              <label> {"Min: "}{weather.list[30].main.temp_min}</label>
              </div>
                  </li>
                  <li>
                  <div className={(weather.list[38].weather[0].main)==="Rain" ? 'nextdays' : 
            (weather.list[38].weather[0].main)==="Clouds" ? 'nextdayscloud': 
            (weather.list[38].weather[0].main)==="Clear" ? 'nextdaysclear' : 
            (weather.list[38].weather[0].main)==="Snow" ? 'nextdayssnow' : ""}>
              <label>{weather.list[38].dt_txt} - {weather.list[38].main.temp}{"°F"} - {weather.list[38].weather[0].main}</label>
              <br/>
              <label>{"Max: "}{weather.list[38].main.temp_max}</label>
              <label> {"Min: "}{weather.list[38].main.temp_min}</label>
              </div>
                  </li>
                </ul>
              </div>
              </div>
          )
        }
        </div>
        
      
    </div>
  
  );
  
        }
}

export default App;

