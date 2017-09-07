define('DataStore', [], function() {

  var boards_index;

  function init(keyForBoards) {
    boards_index = keyForBoards ? keyForBoards : 'boards_index';
    if (!localStorage.getItem(keyForBoards)) {
      localStorage.setItem(keyForBoards, JSON.stringify([]));
    }
  }

  function supports_local_storage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }

  function getCurrentBoards() {
    var currentBoards = JSON.parse(localStorage.getItem(boards_index));
    return currentBoards;
  }


  return {
    isSupported: supports_local_storage,
    init: init,
    getCurrentBoards: getCurrentBoards
  }

})