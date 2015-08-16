/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * primero creamos un modulo el cual es una aplicacion de angularjs
 * 
 */

var aplicacion=angular.module('aplicacionsita',[]);

/*
 * DEFINIMOS UN CONTROLADOR PARA COMINICARNOS CON INDEX.HTML
 */
aplicacion.controller('controladorPrincipal',function($scope, $http){
          /* creamos un modelo siple */
    $scope.mensajito='hola desde angular!!!';
    $scope.nombre='';
    $scope.algo='';
    $scope.diacorte='';
    $scope.fecha='';
    $scope.concepto='';
    $scope.cantidad='';
    $scope.idTarjeta='';
    
    $scope.apachurrame =function(){
        $scope.algo='haz apachurrado el boton!!!';
        
               };
               
               $scope.guardar=function(){
                   $http.post('http://localhost:9000/tarjeta/'+$scope.nombre+'/'+$scope.diacorte).success(function(data){
                       console.log(data);
                   });
               };
               
               $scope.guardarGastos=function(){
                   $http.post('http://localhost:9000/gastos/'+$scope.fecha+'/'+$scope.concepto+'/'+$scope.cantidad+'/'+$scope.idTarjeta).success(function(data){
                       console.log(data);
                   });
               };
                $scope.buscarTarjetas=function(){
                   $http.get('http://localhost:9000/tarjeta').success(function(data){
                       console.log(data);
                       $scope.tarjetas=data;
                   });
               };
               
               $scope.buscarGastos=function(){
                   $http.get('http://localhost:9000/gastos').success(function(data){
                       console.log(data);
                       $scope.gastos=data;
                   });
               };
               
               $scope.buscarPorID=function(){
                   $http.get('http://localhost:9000/tarjeta/'+$scope.idTarjeta).success(function(data){
                       console.log(data);
                       $scope.tarjeta=data;
                   });
               };
               
               $scope.buscarPorIdG=function(){
                   $http.get('http://localhost:9000/gastos/'+$scope.idGastos).success(function(data){
                       console.log(data);
                       $scope.gasto=data;
                   });
               };
               
               $scope.actualizarTarjeta=function(){
                   $http.put('http://localhost:9000/tarjeta/'+$scope.idTarjeta+'/'+$scope.nombre+'/'+$scope.diacorte).success(function(data){
                       console.log(data);
                   });
               };
               
               $scope.actualizarGastos=function(){
                   $http.put('http://localhost:9000/gastos/'+$scope.idGastos+'/'+$scope.fecha+'/'+$scope.concepto+'/'+$scope.cantidad+'/'+$scope.idTarjeta).success(function(data){
                       console.log(data);
                   });
               };
              
              $scope.eliminarTarjeta=function(){
                   $http.delete('http://localhost:9000/tarjeta/'+$scope.idTarjeta).success(function(data){
                       console.log(data);
                   });
               };
              
              $scope.eliminarGastos=function(){
                   $http.delete('http://localhost:9000/gastos/'+$scope.idGastos).success(function(data){
                       console.log(data);
                   });
               };
    
             }
        );

