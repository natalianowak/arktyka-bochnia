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

const onMarkerClick = () => {
    window.location = "https://maps.google.com?q="+49.973436+","+20.456241 ;
  }

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
          onClick={onMarkerClick}
          icon= {'https://raw.githubusercontent.com/natalianowak/arktyka-bochnia/master/public/arktyka-small.png'}
          />
        </Map>

    )
    }

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyBx51sncgTUQQ5Hl5hIEfM125yfwEWChu4'
      })(MapContainer);