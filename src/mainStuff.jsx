import React from "react";
import './mainStuff.css';

const mainStuff = ({plot_url}) => {

    return (
        <table>
        <div className="plotFull">
            <tr>
                <td>
            <div className="plotFull-left" >
                <div>
                    <img src='https://d2mvzyuse3lwjc.cloudfront.net/doc/en/Tutorial/images/Transparent_Parametric_Surfaces_combined_with_Scatter_Plot/Transparent_Parametric_Surfaces_06.png?v=47973'/>
                </div>


            </div>
                <br/>
                </td>
                <td>
            <div className="plotFull-right">

                <img src={plot_url}/>
            </div>
            </td>
            </tr>  
        </div>
        </table>
    )
}

export default mainStuff;
