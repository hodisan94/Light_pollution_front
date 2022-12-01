import React from "react";
import {useState,useEffect,useRef} from 'react';


import mainStuff from "./mainStuff";
import './App.css'



const App = () => {



  const ref = useRef(null);

  const [isActive , setIsActive] = useState(false);
  const [showPlot, setShowPlot] =useState();

  const showFullPlot = async (plot_url) => {
    setShowPlot(plot_url)
    console.log(plot_url)
    setIsActive(true);
  }





  return (
    <div className="app">
            <header>
        <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        </div>
      </header>
      <br></br>
      {/* <h1>Birds For The Win</h1> */}
      <div className="mainApp">
      {/* <div className="bird">

      </div> */}

      <div className="scroll-left"  ref={ref}>
        <span>
          <ul>
        
            <div className="container">
           
                  <div className="bird">
                  <div>
                  <ul>
                    <img src='https://labwrite.ncsu.edu/res/gh/2d-scatter-linreg.gif'
                    onClick={() => showFullPlot('https://labwrite.ncsu.edu/res/gh/2d-scatter-linreg.gif')}/>
                    </ul>
                    <br></br>
                    <ul>
                    <img src='https://www.data-to-viz.com/graph/scatter_files/figure-html/unnamed-chunk-1-1.png'
                    onClick={() => showFullPlot('https://www.data-to-viz.com/graph/scatter_files/figure-html/unnamed-chunk-1-1.png')}/>
                    </ul>
                    <br></br>

                    <ul>
                    <img src='https://www.mathworks.com/help/examples/matlab/win64/LoadAndPlotDataFromTextFileExample_01.png'
                    onClick={() => showFullPlot('https://www.mathworks.com/help/examples/matlab/win64/LoadAndPlotDataFromTextFileExample_01.png')}/>
                    </ul>
                    <br></br>

                    <ul>
                      <img src='https://opensource.com/sites/default/files/uploads/seaborn.png'
                      onClick={() => showFullPlot('https://opensource.com/sites/default/files/uploads/seaborn.png')}/>
                    </ul>
                    <br></br>

                    <ul>
                      <img
                      src='https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Transparent_Parametric_Surfaces_combined_with_Scatter_Plot/Transparent_Parametric_Surfaces_06.png?v=47973'
                      onClick={() => showFullPlot('https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Transparent_Parametric_Surfaces_combined_with_Scatter_Plot/Transparent_Parametric_Surfaces_06.png?v=47973')}/>
                    </ul>
                  </div>

                  <br/>
              </div>
          </div>

        
          </ul>
        </span>
      </div>

      <div className="center" >
        {
      isActive
        ? (

        <table>
          <tr>
          <td>
          <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/Israel_outline_north_negev.png'/>
          <div>
            <button>
              <b>Upload new data</b>
            </button>
          </div>


          </td>
          <td>
          <img src={showPlot}/>
          <div>
            <button>
              <b>Download Data</b>
            </button>
          </div>

          </td>
          </tr>
        </table>
        ):
        (
          <div className="empty">
            <h2>Nothing to show</h2>
          </div>
        )
}

      </div>
      </div>
    </div>
  )
}

export default App;

