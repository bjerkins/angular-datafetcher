'use strict';

describe('angular-datafetcher', function () {

  // load the service's module
  beforeEach(module('angular-datafetcher'));

  // instantiate service
  var datafetcher,
      $httpBackend,
      API_URL = 'http://localhost:13740/api/',
      route = 'miscellaneous/captcha';

  beforeEach(inject(function (_datafetcher_, $injector) {
    datafetcher = _datafetcher_;

    $httpBackend = $injector.get('$httpBackend');
  }));

  describe('Initialization', function () {
    it('should have get, post, put and delete defined', function () {
      expect(datafetcher.get).toBeDefined();
      expect(datafetcher.post).toBeDefined();
      expect(datafetcher.put).toBeDefined();
      expect(datafetcher.delete).toBeDefined();
    });
  });

  describe('GET methods', function () {
    beforeEach(function () {
      $httpBackend.when('GET', API_URL + route).respond({test: 1});
    });

    it('should call the API correctly', function () {
      $httpBackend.expectGET(API_URL + route);
      datafetcher.get(API_URL + route);
      $httpBackend.flush();
    });

    it('should deliver promises correctly', function () {
      var result;

      datafetcher.get(API_URL + route).then(function (data) {
        result = data.test;
      });

      $httpBackend.flush();
      expect(result).toBe(1);
    });
  });

  describe('POST methods', function () {
    beforeEach(function () {
      $httpBackend.when('POST', API_URL + route).respond({test: 1});
    });

    it('should call the API correctly', function () {
      var data = {
        test: 1
      };
      $httpBackend.expectPOST(API_URL + route, data);
      datafetcher.post(API_URL + route, data);
      $httpBackend.flush();
    });
  });

  describe('PUT methods', function () {
    beforeEach(function () {
      $httpBackend.when('PUT', API_URL + route).respond({test: 1});
    });

    it('should call the API correctly', function () {
      var data = {
        test: 1
      };
      $httpBackend.expectPUT(API_URL + route, data);
      datafetcher.put(API_URL + route, data);
      $httpBackend.flush();
    });
  });
});
