define(
    'App', ['Utils', 'DataStore', 'BoardsMaker'],
    function(Utils, DS, BoardsMaker) {
        var defaults = {
            'selectors': {
                'boards_section': '.js-board-holder',
                'board_maker_form': '#board-maker-form',
                'board_holder': '.js-board-holder'
            }
        };
        /*---------- Update UI   ----------*/
        function generateBoard(name, board_holder, boardId) {
            var tmp = new BoardsMaker();
            var board = tmp.makeABoard(name);

            if (board && board.node) {
                board_holder.appendChild(board.node);
            }

        }
        /*---------- Prepares UI and attach events   ----------*/
        var setUpAddBoardForm = function(obj) {
            var form = document.querySelectorAll(obj.board_maker_form)[0];
            var board_holder = document.querySelector(obj.board_holder);

            function makeABoard(event) {
                var tmp, name;

                if (event.type == 'submit') {
                    event.preventDefault()

                    name = event.currentTarget.querySelector('input[type="text"]').value;

                    if (!name) {
                        return;
                    }

                    generateBoard(name, board_holder);
                    event.currentTarget.querySelector('input[type="text"]').value = "";

                }
            }

            form.addEventListener('submit', makeABoard, true);
        }
        /*----------  Method Execution start from here  ----------*/

        var init = function(config) {
            var selectors;

            config = Utils.extend(defaults, config);
            selectors = config.selectors;

            setUpAddBoardForm(selectors);

            DS.init(config.boards_index);

        }

        return {
            'init': init
        }
    })