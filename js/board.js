define('Board',['DataStore','Utils'], function(DS, Utils){
  function init(name){
    var obj = {};
    var currentBoards;
    var indices = [];
    var _id;
    
      currentBoards = DS.getCurrentBoards();
      currentBoards.map(function(elem){
        indices.push(elem._id);
      });

      _id = Utils.randomString(5);

      while (indices.indexOf(_id) != -1){
        _id = Utils.randomString(5);  
      }

      obj.name = name;
      obj.lists = [];
      obj._id = _id;
      obj.userName = "Flipkart";
      obj.time = new Date();
      obj.up = 0;
      obj.down = 0;
      obj.node = null;

      return obj;  
  }

  return init;
});