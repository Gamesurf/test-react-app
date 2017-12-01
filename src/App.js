import React, { Component } from 'react';
import './App.css';
// import Button from 'react-bootstrap/lib/Button';

class App extends Component {
  render() {

      document.addEventListener("DOMContentLoaded", function(event) {
          let MenuButton = document.getElementsByClassName("Menu-button")[0];
          let MenuWrapper = document.getElementsByClassName("Menu-wrapper")[0];
          // let AppHeader = document.getElementsByClassName("App-header")[0];
          let MenuButtonClicked = 0;
          MenuButton.addEventListener('click', function () {
              if (!MenuButtonClicked) {
                  MenuButtonClicked += 1;
                  this.classList.add("active");
                  MenuWrapper.classList.remove("hidden");
                  MenuWrapper.classList.add("visible");
              } else {
                  MenuButtonClicked -= 1;
                  this.classList.remove("active");
                  MenuWrapper.classList.remove("visible");
                  MenuWrapper.classList.add("hidden");
              }
          });
      });

    return (
      <div className="App">
        <header className="App-header">
            <button className="Menu-button">
                MENU
            </button>
        </header>
          <div className="Menu-wrapper hidden">
              <div className="Menu-list">
                  <a href="" className="Menu-item"><span className="Menu-item__title">Main page</span></a>
                  <a href="" className="Menu-item"><span className="Menu-item__title">About</span></a>
                  <a href="" className="Menu-item"><span className="Menu-item__title">Our team</span></a>
                  <a href="" className="Menu-item"><span className="Menu-item__title">Contacts</span></a>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
