
import DOMNodeCollection from './dom_node_collection.js';
var docReady = false;
var docFnArr = [];

$( () => alert('the document is ready'));

var docReady = false;
var docFnArr = [];

$( () => alert('the document is ready'));

window.$l = (arg) => {
  if (typeof arg === 'string') {
    const nodelist = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(nodelist));
  } else if (typeof arg === "function") {
    if (docReady === false) {
      docFnArr.push(arg);
    } else {
      arg();
    }
  } else if(typeof arg === 'object') {
    if (arg instanceof HTMLElement) {
      return new DOMNodeCollection([arg]);
    }
}
}

$l.extend = function(...args) {
  return Object.assign({}, ...args)
}

$l.ajax = (options) => {
  const request = new XMLHttpRequest();

  const contentType = options.contentType ? options.contentType : 'application/x-www-form-urlencoded; charset=UTF-8'
  const method = options.method ? options.method : 'GET'
  const url = options.url ? options.url : ''
  const data = options.data ? options.data : {}
  const success = options.success ? options.success : () => {}
  const error = options.error ? options.error : () => {}

  const state = {
    contentType,
    method,
    url,
    data,
    success,
    error
  }

  request.open(state.method, state.url, true);
  request.onload = (e) => {
    if (request.status === 200) {
      state.success(request.response);
    } else {
      state.error(request.response);
    }
  };

  request.send(JSON.stringify(state.data));


}
