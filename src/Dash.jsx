import { useState } from 'react'
import Graficos from './components/GraficosBarra'
import ApexChart from './components/GraficosPizza'
import './Dash.css'
import Header from './components/Header'

function Dash() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header />
      <body>
    <div className="main-container">
      <div className="main-div">
        <div className="sub-div1">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Log</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
          </tbody>
          </table>
          </div>
        <div className="sub-div2">
          <div className="second-div">
            <div className="dados">
              <div className="applications">
              <div className="divteste">
                  <h2>Servers</h2>
                <ul>
                  <li>dados</li>
                  <li>dados</li>
                  <li>dados</li>
                  <li>dados</li>
                </ul>
              </div>
              </div>
              <div className="servers">
              <div class="divteste">
                  <h2>Servers</h2>
                <ul>
                  <li>dados</li>
                  <li>dados</li>
                  <li>dados</li>
                  <li>dados</li>
                </ul>
              </div>
              </div>
            </div>
            <div className="graficos">
            <div className="graficoBarra">
              <Graficos />
            </div>
            <div className="graficoPizza">
              <ApexChart />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
    </>
  )
}

export default Dash;
