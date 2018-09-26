class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }
}

DOMNodeCollection.prototype.html = function(html) {
  // debugger
  if (typeof html === "string") {
    this.nodes.forEach((node) => {
      node.innerHTML = html;
    });
  } else if (this.nodes.length > 0) {
    return this.nodes[0].innerHTML;
  }
};

DOMNodeCollection.prototype.empty = function() {
  this.html("");

};

DOMNodeCollection.prototype.append = function(el) {
  // append
  if (typeof el === 'string') {
    this.nodes.forEach((node) => {
      node.innerHTML += el;
    });
  } else if(el.constructor.name === "DOMNodeCollection") {
    this.nodes.forEach((node) => {
      el.nodes.forEach((htmlEl) => {
        node.innerHTML += htmlEl.outerHTML;
      });
    });
  }
};

DOMNodeCollection.prototype.attr = function(attrname, value) {
  if (value === undefined) {
    return this.nodes[0].getAttribute(attrname);
  } else {
    this.nodes.forEach((node) => {
      return node.setAttribute(attrname, value);
    });
  }
};

DOMNodeCollection.prototype.addClass = function(classname) {
  this.attr("class", classname);
};

DOMNodeCollection.prototype.removeClass = function(classname) {
  this.nodes.forEach((node) => {
    node.classList.remove(classname);
  });
};

DOMNodeCollection.prototype.children = function() {
  let childArr = [];
  this.nodes.forEach((node) => {
    const child = node.children;
    childArr = childArr.concat(Array.from(child));
  });
  return new DOMNodeCollection(childArr);
};

DOMNodeCollection.prototype.parent = function() {
  // let childArr = [];
  let parentNodes = [];
  // debugger
  this.nodes.forEach((node) => {
    const parent = node.parentNode;
    // debugger
    if (!parentNodes.includes(parent)) {
      parentNodes.push(parent);
    }

  });
  return new DOMNodeCollection(parentNodes);
};

DOMNodeCollection.prototype.find = function(child) {
  let result = [];
  this.nodes.forEach((node) => {
    // debugger
    const childlist = node.querySelectorAll(child);
    result = result.concat(Array.from(childlist));
  });
  return new DOMNodeCollection(result);
};

DOMNodeCollection.prototype.remove = function() {
  this.nodes.forEach((node) => {
    node.parentNode.removeChild(node);
  });
};

DOMNodeCollection.prototype.on = function(action, callback) {
  this.nodes.forEach((node) => {
    node.addEventListener(action, callback);
    let event = `asdf-${action}`;
    if (typeof node[event] === "undefined") {
      node[event] = [];
    }
    node[event].push(callback);
  });
};

DOMNodeCollection.prototype.off = function(action) {
  this.nodes.forEach((node) => {
    let event = `asdf-${action}`;
    if (node[event]) {
      node[event].forEach((el) => {
        node.removeEventListener(action, el);
      });
    }
  });
};


export default DOMNodeCollection;
