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
                    <img src={plot_url}/>
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
