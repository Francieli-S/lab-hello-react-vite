import './App.css'
import logo from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

function App() {
  return (
    <div className="App">
      <div className="top">
        <nav>
          <img src={logo} alt="Ironhack logo" />
          <img id="menuIcon" src={menu} alt="Menu icon" />
        </nav>
        <main>
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <p>
            You will learn how to use <br /> the most popular frontend library,
            <br /> and become a super Ninja developer
          </p>
          <button>Awesome!</button>
        </main>
      </div>
      <div className="bottom">
        <div className="cards">
          <img src={icon1} alt="Icon" />
          <h4>Declarative</h4>
          <p>React make it painless to create interactiv UIs.</p>
        </div>
        <div className="cards">
          <img src={icon2} alt="Icon" />
          <h4>Components</h4>
          <p>Build encapsulated components that manage their states.</p>
        </div>
        <div className="cards">
          <img src={icon3} alt="Icon" />
          <h4>Single-Way</h4>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="cards">
          <img src={icon4} alt="Icon" />
          <h4>JSX</h4>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  )
}

export default App
