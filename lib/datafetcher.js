'use strict';
/*
 * Generic datafetcher that returns a promise, so use 'then' to get the data. 
 * Usage example: datafetcher.get(SOME_URL).then(successCallback, errorCallback);
 */
angular.module('angular-datafetcher', [])
  .provider('$datafetcher', function () {
    // Method for instantiating
    this.$get = function ($http, $q) {
      var errObj;
      return {
        /*
        * Generic GET method. 
        * param: url - the complete URL of the requested resource
        * param: cacheIt - should the result be cached?
        */
        get: function(url, cacheIt) {
          var deferred = $q.defer();
          $http({
            method: 'GET',
            url: url,
            cache: cacheIt
          }).success( function (data) {
            deferred.resolve(data);
          }).error( function (data) {
            errObj = {method: 'GET', location: url, msg: data};
            deferred.reject(errObj);
          });
          return deferred.promise;
        },
        /*
        * Generic POST method.
        * param: url - the complete URL of the requested POST location
        * param: payload - the payload that should be sent with the POST method
        */
        post: function(url, payload) {
          var deferred = $q.defer();
          $http({
            method: 'POST',
            url: url,
            data: payload
          }).success(function (data) {
            deferred.resolve(data);
          }).error(function (data) {
            errObj = { method: 'POST', location: url, payload: payload, msg: data };
            deferred.reject(errObj);
          });
          return deferred.promise;
        },
        /*
        * Generic PUT method.
        * param: url - the complete URL of the requested PUT location
        * param: payload - the payload that should be sent with the POST method
        */
        put: function(url, payload) {
          var deferred = $q.defer();
          $http({
            method: 'PUT',
            url: url,
            data: payload
          }).success(function (data) {
            deferred.resolve(data);
          }).error(function (data) {
            errObj = {method: 'PUT', location: url, payload: payload, msg: data};
            deferred.reject(errObj);
          });
          return deferred.promise;
        },
        /*
        * Generic DELETE method
        * NOT YET IMPLEMENTED
        */
        delete: function() {
          // todo
        }
      };
    };
  });
