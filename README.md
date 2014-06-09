angular-datafetcher
===========
[![Build Status](https://travis-ci.org/bjerkins/angular-datafetcher.svg?branch=master)](https://travis-ci.org/bjerkins/angular-datafetcher) Generic datafetcher for GET, POST, PUT, DELETE and returns promises.

### Requirements
- [AngularJS](http://angularjs.org/)

### Testing
`$ grunt test`

This will make Grunt run the linting task and then execute the unit tests.

### Usage
Include `angular_datafetcher.js` in your index.html

```html
<script type="text/javascript" src="path/to/angular_datafetcher.js"></script>
```

Then add the module as a dependencie in your app
```javascript
var myAppModule = angular.module('MyApp', ['angular-datafetcher']);
```

and then you can inject `datafetcher` wherever you like:
```javascript
angular.module('MyApp').controller('MainCtrl', function ($scope, datafetcher) { ... });
```

The fetcher returns a promise so use the `then` callback to retrieve the data.

```javascript
datafetcher.get('http://someapi.com/api/apimethod').then(function (data) {
  console.log(data);
}, function (reason) {
  console.log(reason);
});
```

### API

#### datafetcher.get(url, cacheIt)
- url - the complete URL of the requested resource
- cacheIt - should the result be cached?

#### datafetcher.post(url, payload)
- url - the complete URL of the requested POST location
- payload - the payload that should be sent with the POST method

#### datafetcher.put(url, payload)
- url - the complete URL of the requested PUT location
- payload - the payload that should be sent with the PUT method



