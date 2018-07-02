import React, { Component } from 'react';

import wi_0 from "./../../icons/weathericons/wi-0.svg";
import wi_1 from "./../../icons/weathericons/wi-1,47.svg";
import wi_2 from "./../../icons/weathericons/wi-2.svg";
import wi_3 from "./../../icons/weathericons/wi-3,4,37,38,39,45.svg";
import wi_5 from "./../../icons/weathericons/wi-5.svg";
import wi_6 from "./../../icons/weathericons/wi-6,7,18.svg";
import wi_8 from "./../../icons/weathericons/wi-8,9.svg";
import wi_10 from "./../../icons/weathericons/wi-10.svg";
import wi_11 from "./../../icons/weathericons/wi-11,12,40.svg";
import wi_13 from "./../../icons/weathericons/wi-13,14,16,41,42,43,46.svg";
import wi_15 from "./../../icons/weathericons/wi-15.svg";
import wi_17 from "./../../icons/weathericons/wi-17,35.svg";
import wi_19 from "./../../icons/weathericons/wi-19.svg";
import wi_20 from "./../../icons/weathericons/wi-20.svg";
import wi_21 from "./../../icons/weathericons/wi-21.svg";
import wi_22 from "./../../icons/weathericons/wi-22.svg";
import wi_23 from "./../../icons/weathericons/wi-23.svg";
import wi_24 from "./../../icons/weathericons/wi-24.svg";
import wi_25 from "./../../icons/weathericons/wi-25.svg";
import wi_26 from "./../../icons/weathericons/wi-26,44.svg";
import wi_27 from "./../../icons/weathericons/wi-27.svg";
import wi_28 from "./../../icons/weathericons/wi-28.svg";
import wi_29 from "./../../icons/weathericons/wi-29.svg";
import wi_30 from "./../../icons/weathericons/wi-30.svg";
import wi_31 from "./../../icons/weathericons/wi-31,33.svg";
import wi_32 from "./../../icons/weathericons/wi-32,34.svg";
import wi_36 from "./../../icons/weathericons/wi-36.svg";
import wi_3200 from "./../../icons/weathericons/wi-3200.svg";


class Weathericon extends Component {
    
    render() {
		//console.log(this.props.condCode);
        var condIcon = null;
        switch ( this.props.condCode ) {
			case "0":
				condIcon = <img className="current-weather-icon" src={wi_0} alt="icon"/>;
				break;

            case "1":
            case "47":
				condIcon = <img className="current-weather-icon" src={wi_1} alt="icon"/> ;
				break;

			case "2":
				condIcon = <img className="current-weather-icon" src={wi_2} alt="icon"/> ;
				break;

			case "3":
            case "4":
            case "37":
			case "38":
			case "39":
			case "45":
				condIcon = <img className="current-weather-icon" src={wi_3} alt="icon"/>;
				break;

            case "5":
                condIcon = <img className="current-weather-icon" src={wi_5} alt="icon"/>;
                break;

			case "6":
            case "7":
            case "18":
				condIcon = <img className="current-weather-icon" src={wi_6} alt="icon"/> ;
				break;

			case "8":
			case "9":
				condIcon = <img className="current-weather-icon" src={wi_8} alt="icon"/>;
				break;

            case "10":
                condIcon = <img className="current-weather-icon" src={wi_10} alt="icon"/>;
                break;

			case "11":
            case "12":
            case "40":
				condIcon = <img className="current-weather-icon" src={wi_11} alt="icon"/>;
				break;

			case "13":
			case "14":
            case "16":
            case "41":
            case "42":
            case "43":
            case "46":
				condIcon = <img className="current-weather-icon" src={wi_13} alt="icon"/>;
                break;
                
            case "15":
				condIcon = <img className="current-weather-icon" src={wi_15} alt="icon"/>;
				break;

            case "17":
            case "35":
			    condIcon = <img className="current-weather-icon" src={wi_17} alt="icon"/>;
                break;
                
			case "19":
				condIcon = <img className="current-weather-icon" src={wi_19} alt="icon"/>;
				break;

            case "20":
                condIcon = <img className="current-weather-icon" src={wi_20} alt="icon"/>;
                break;

			case "21":
				condIcon = <img className="current-weather-icon" src={wi_21} alt="icon"/>;
				break;

			case "22":
				condIcon = <img className="current-weather-icon" src={wi_22} alt="icon"/>;
				break;

            case "23":
                condIcon = <img className="current-weather-icon" src={wi_23} alt="icon"/>;
                break;
                
			case "24":
				condIcon = <img className="current-weather-icon" src={wi_24} alt="icon"/>;
				break;

			case "25":
				condIcon = <img className="current-weather-icon" src={wi_25} alt="icon"/>;
				break;

            case "26":
            case "44":
				condIcon = <img className="current-weather-icon" src={wi_26} alt="icon"/>;
				break;

            case "27":
                condIcon = <img className="current-weather-icon" src={wi_27} alt="icon"/>;
                break;

            case "28":
                condIcon = <img className="current-weather-icon" src={wi_28} alt="icon"/>;
                break;

			case "29":
				condIcon = <img className="current-weather-icon" src={wi_29} alt="icon"/>;
				break;

			case "30":
				condIcon = <img className="current-weather-icon" src={wi_30} alt="icon"/>;
				break;

            case "31":
            case "33":
				condIcon = <img className="current-weather-icon" src={wi_31} alt="icon"/>;
				break;

			case "32":
			case "34":
				condIcon = <img className="current-weather-icon" src={wi_32} alt="icon"/>;
                break;
                
			case "36":
				condIcon = <img className="current-weather-icon" src={wi_36} alt="icon"/>;
				break;
				
			case "3200":
				condIcon = <img className="current-weather-icon" src={wi_3200} alt="icon"/>;
				break;

			default:
				condIcon = <img className="current-weather-icon" src={wi_3200} alt="icon"/>;
        }
        return (
			<div>
				{condIcon}
			</div>
		);
    }
}

export default Weathericon;