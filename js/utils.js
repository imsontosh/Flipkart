define(function() {
  var extend = function(destination, source) {
    for (var property in source) {

      if (typeof source[property] === "object") {
        destination[property] = extend(destination[property], source[property]);
      } else {
        destination[property] = source[property];
      }
    }

    return destination;
  };

  function randomString(length) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
  }


  var updateStatus = function(msg, boundTo) {
    var triggerOn = getElems(boundTo);

    if (triggerOn.length === 0) {
      throw new Error('Status could not be updated');
    }

    triggerOn.map(function(element) {
      triggerEvent(new CustomEvent('updatestatus', {
        detail: {
          message: msg
        }
      }), element);
    });
  }
  return {
    updateStatus: updateStatus,
    extend: extend,
    randomString: randomString,
  }

})