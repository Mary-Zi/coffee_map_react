import logo from './logo.svg';
import './App.css';
import React from 'react';
import cafe1 from './img/kokomo.png';
import cafe2 from './img/Papermill.jpeg';
import cafe3 from './img/fika.jpeg';

class App extends React.Component {
  render() {
    return (
     <div>
      <h1>Tallinn Good Coffee Map</h1>
      <Intro />
      < Cafes />
     </div> 
    )
  }; 
} 

class Intro extends React.Component {
  render() {
    return (
    <p className= "intro">This is a map where you can find coffee shops which make their drinks with coffee beans from independent roasters which support farmers and believe in sustainability and transparent supply chain. Also it's a social media for concious coffeelovers. Here you can share your reviews and meet soulmates.</p>
    )
  }; 
} 

class Cafes extends React.Component {
  render() {
    return (
      <div className="cafes">
                <div className = "cafes">
                    <div className="cafe_card"> 
                        <div className="cafe_img">
                            <img src={cafe1} alt="kokomo"/>
                        </div>
                        <div>
                            <a href="../coffee_map/cafe_page.html">
                                <h2>
                                    Kokomo
                                </h2>
                            </a>
                            <i onclick = "Toggle()" id="like" className="far fa-heart"></i>
                            <p>
                                KOKOMO is the freshest micro roastery in Estonia, introducing different characters from various coffee origins by constantly sourcing fresh crops. Great coffee is not a secret shared only among the café folk. It should be a common knowledge.
                            </p>
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="address">
                                Marati, 5
                            </p>
                        </div>
                    </div>
                    <div className="cafe_card">
                        <div className="cafe_img">
                          <img src={cafe2} alt="Papermill"/>
                        </div>
                        <div>
                            <a href="">
                                <h2>
                                    Papermill
                                </h2>
                            </a>
                            <i onclick = "Toggle()" id="like" className="far fa-heart"></i>
                            <p>
                                Paper Mill Coffee roasts coffee in their cafe, currently they have 4 single origin coffees and an espresso blend in the selection. Their coffee menu includes espresso-based drinks, batch brew filter coffee and and also they offer healthy lunch.
                            </p>
                            <p className="address">
                                Masina, 20
                            </p>
                        </div>
                    </div>
                    <div className="cafe_card">
                        <div className="cafe_img">
                          <img src={cafe3} alt="fika"/>
                        </div>
                        <div>
                            <a href="">
                                <h2>
                                    Fika
                                </h2>
                            </a>
                            <i onclick = "Toggle()" id="like" className="far fa-heart"></i>
                            <p>
                                Fika – Leib ja Kohv is a beautiful cafe situated in the heart of Telliskivi. They serve Bekker bread and pastries together with artisanal coffee. You can choose different kinds of roasts and buy something for home as well like coffee filters, coffee makers. Great place for a souvenir for the coffee lovers.
                            </p>
                            <p className="address">
                                Telliskivi 60a
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}
export default App;
