angular-datafetcher
===========

Generic datafetcher for GET, POST, PUT, DELETE and returns promises.

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
angular.module('MyApp')
  .controller('MainCtrl', function ($scope, datafetcher) {
    datafetcher.get('http://someapi.com/api/apimethod').then(function (data) {
      console.log(data);
    }, function (reason) {
      console.log(reason);
    });
  });
```
