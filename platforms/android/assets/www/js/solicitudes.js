angular.module('starter.solicitudes', [])
.factory('Solicitudes',function(){
  var solicitudes=[{
    id: 0,
    name: 'Amazonas 12',
    lastText: 'Callao - APM',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Hanjin 244',
    lastText: 'Ilo - Enapu',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Hyundai 233',
    lastText: 'Callao - DPW',
    face: 'img/adam.jpg'
  }];

    return {
    all: function() {
      return solicitudes;
    },
    remove: function(solicitud) {
      solicitudes.splice(solicitudes.indexOf(solicitud), 1);
    },
    get: function(SolicitudId) {
      for (var i = 0; i < solicitudes.length; i++) {
        if (solicitudes[i].id === parseInt(SolicitudId)) {
          return solicitudes[i];
        }
      }
      return null;
    }
  };

  });

/*import {Component} from '@angular/core';

@Component({
  templateUrl: './templates/solicitudes-detalle.html'
})
export class IconsPage { } */