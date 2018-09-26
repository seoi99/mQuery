# mQuery

mQuery is a JavaScript DOM interaction library inspired by jQuery.  Using mQuery, users can:
  * Select single/multiple DOM elements
  * Manipulate DOM elements 
  * Build DOM elements
  * Queue functions until DOM is fully loaded
  * Simplify HTTP requests

## How to Use mQuery

To get started with mQuery, download mQuery into your project, and add below `<script>` tag into your index.html file.
 
```html
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="./css/reset.css">
  <script type="text/javascript" src="../lib/mQuery.js"></script>
  ...
</head>
```

## API

### DOM Traversal

`DOMNodeCollection` methods to navigate DOM elements

#### `children`

Returns a `DOMNodeCollection` object of all direct children elements.

#### `parent`

Returns a `DOMNodeCollection` object of a parent elements.

### DOM Manipulation

`DOMNodeCollection` methods to manipulate DOM elements

#### `html`

Returns the `innerHTML` for the first element in the `DOMNodeCollection` if no argument is given.  If a string argument is given, changes the `innerHTML` of each `DOMNodeCollection` element to the string argument.

#### `empty`

Returns empty innerHTML `DOMNodeCollection` element

#### `append`

Takes `string`, `DOMNodeCollection`, or `HTMLElement` as a argument and appends it to each `DOMNodeCollection` element.

#### `remove`

Remove each `DOMNodeCollection` element from the DOM.

#### `attr`
##### `attr(attribute, value(optional))`

attr(attribute) - returns value of the attribute given (get attribute value)
attr(attribute, value) - set value of attribute to given value (set attribute value)

#### `addClass`
addClass("classname")
Adds a class for each `DOMNodeCollection` element.

#### `removeClass`
removeClass("classname")

Removes a class from each `DOMNodeCollection` element.

### Event Listeners

```
domnodecollection.on("click", callback);
domnodecollection.off("click");
```

#### `on`

Adds event listener to each `DOMNodeCollection` element.  List of events are available [here](https://api.jquery.com/category/events/).

#### `off`

Removes event listener from each `DOMNodeCollection` element.

### $l.ajax

Sends HTTP Request and returns a `Promise` object.  Accepts a `Hash` {} object as an argument with any of the following attributes:
  * method (default: "GET"): HTTP Request method or type
  * url (default: window.location.href): URL for HTTP Request
  * success: success callback
  * error: error callback
  * contentType (default: 'application/x-www-form-urlencoded; charset=UTF-8'): content type of HTTP Request
