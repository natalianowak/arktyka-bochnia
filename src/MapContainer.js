import React from 'react';
import './App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '300px',
    maxWidth: '1500px',
  };

  const stylesArr =[
    {
        "stylers": [
            {
                "hue": "#2c3e50"
            },
            {
                "saturation": 250
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 50
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

function MapContainer(props) {

  console.log(Map)
    return (
        <Map
          {...props}
        
        styles={stylesArr

        }
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 49.973436, lng: 20.456241}}
        >
          <Marker 
          position={{ lat: 49.973436, lng: 20.456241}}
          color='blue'
          title={'ARKTYKA'}
          
          icon= {'https://raw.githubusercontent.com/natalianowak/arktyka-bochnia/master/public/arktyka-favicon.png'}
//https://raw.githubusercontent.com/natalianowak/arktyka-bochnia/master/public/arktyka-favicon.png
          // %PUBLIC_URL%/arktyka-favicon.jpg
          //http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|ddd
          // https://natalianowak.github.io/portfolioN/CV%20-%20Natalia%20Nowak%20-%20ANG%20-.pdf
          />
        </Map>

    )
    }

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyBx51sncgTUQQ5Hl5hIEfM125yfwEWChu4'
      })(MapContainer);