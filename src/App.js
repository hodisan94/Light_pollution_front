import './App.css';
import React from "react";

import mainStuff from "./mainStuff";

import {useState,useEffect,useRef} from 'react';


const App = ()=> {
  
  const [isActive, setIsActive] = useState(false);
  const [showPlot, setShowPlot] = useState();

  const showFullPlot = async (plot_url) => {
    setShowPlot(plot_url)
    setIsActive(true);
  }
  return (
    <div className="App">
      <header>
        <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        </div>
      </header>
      <br></br>
      <div className="mainApp">
        <table><tr>
        <div className='scroll-left'>
          <div className='plot'>
            <ul>
            <img src='https://labwrite.ncsu.edu/res/gh/2d-scatter-linreg.gif'
            onClick={() => showFullPlot('https://labwrite.ncsu.edu/res/gh/2d-scatter-linreg.gif')}/>
            </ul>
            <ul>
            <img src='https://www.data-to-viz.com/graph/scatter_files/figure-html/unnamed-chunk-1-1.png'
            onClick={() => showFullPlot('https://www.data-to-viz.com/graph/scatter_files/figure-html/unnamed-chunk-1-1.png')}/>
            </ul>
            <ul>
            <img src='https://www.mathworks.com/help/examples/matlab/win64/LoadAndPlotDataFromTextFileExample_01.png'
            onClick={() => showFullPlot('https://www.mathworks.com/help/examples/matlab/win64/LoadAndPlotDataFromTextFileExample_01.png')}/>
            </ul>
            <ul>
              <img src='https://opensource.com/sites/default/files/uploads/seaborn.png'
              onClick={() => showFullPlot('https://opensource.com/sites/default/files/uploads/seaborn.png')}/>
            </ul>
            <ul>
              <img
              src='https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Transparent_Parametric_Surfaces_combined_with_Scatter_Plot/Transparent_Parametric_Surfaces_06.png?v=47973'
              onClick={() => showFullPlot('https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Transparent_Parametric_Surfaces_combined_with_Scatter_Plot/Transparent_Parametric_Surfaces_06.png?v=47973')}/>
            </ul>
          </div>

          
        </div>
        </tr>
        <tr>
        <div className='center'>
          <td>
          <img src='https://earth3dmap.com/wp-content/uploads/2020/01/political-map-of-the-world.png'/>


          </td>
          <td>
          <img src={showPlot}/>

          </td>

          </div>
          </tr>
          </table>
      </div>
      

    </div>
  );
}

export default App;
