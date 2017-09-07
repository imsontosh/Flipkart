Code submission for  machine coding round.

Please note below pointer.

1) I am using require.js approch to load module. we can also use common.js approch i.e. import/export along with webpack.
2) Less css preprocesser is used along with bootstrap 
3) Grunt is used to complile LESS

Control execution starts from Main.js(Entry point specified in index.html) to App.js

App.js init() is the starting point of js execution.

board.js create a new object everytime a  comment is added and updates data-store.js

board-makers.js creates the UI readinig from board.js constructor.

data-store.js interacts with my data available in session storage

config.js is a config file for require.js

utils.js is a constructor with utility method.
