define('BoardsMaker', ['Utils', 'DataStore', 'Board'], function(Utils, DS, Board) {
    var boardTemplate =
        '<div class="js-board board row">\
      <div class="js-board-controls board-controls" data-board-id="<%boardid%>"></div>\
      <div class="image"><span class="glyphicon glyphicon-user"></span></div>\
      <div class="content">\
        <div><span class="user">Flipkart</span> - <span class="time"><%boardtime%></span></div>\
        <div class="comment"><%boardname%></div>\
        <div><span class="glyphicon increment glyphicon-menu-up"></span>|<span class="glyphicon decrement glyphicon-menu-down"></span></div>\
      </div>\
  </div>';

    var findTimeDiff = function(time) {
        var msec = new Date() - time;

        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000);
        msec -= ss * 1000;

        if (hh === 0 && mm === 0) {
            return "a few seconds ago";
        } else if (hh === 0 && mm > 1) {
            return mm + " minutes ago";
        } else {
            return hh + " hour ago";
        }

    }

    var makeABoard = function(name) {
        var node = document.createElement('div');
        var board;
        var html;

        try {
            board = new Board(name);
            html = boardTemplate.replace(/<%boardname%>/g, name);
            html = html.replace(/<%boardtime%>/g, findTimeDiff(board.time));
            html = html.replace(/<%boardid%>/g, board._id);
            node.innerHTML = html;

            board.node = node.firstChild;
            return board;
        } catch (e) {

            Utils.updateStatus('Board "' + name + '" was not created. ' + e.message);
            return false
        }
    };

    var constructor = function() {
        return {
            makeABoard: makeABoard
        }
    };

    return constructor;
});