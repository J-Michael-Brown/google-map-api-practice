import { Map } from './map';
import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'load-google-maps-api';

$(document).ready(function() {
  let mapElement = document.getElementById('map');
  let loadPromise = Map.loadMap();
  loadPromise.then(function(googleMaps) {
    return Map.createMap(googleMaps, mapElement);
  });

  // $.ajax({
  //   url: 'https://maps.googleapis.com/maps/api/js?',
  //   type: 'GET',
  //   data: {
  //     key: process.env.API_KEY,
  //     callback: 'initMap'
  //   },
  //   success: function(response) {
  //     console.log('almost');
  //   },
  //   error: function() {
  //     $("#error-message").text('There was a problem proccessing your API.');
  //     console.log('not quite');
  //   }
  // });


});
