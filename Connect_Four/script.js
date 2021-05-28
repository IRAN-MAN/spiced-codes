(function () {
    // cache the selectors
    var $board = $(".board");
    var $columns = $board.find(".columns");
    var currentPlayer = 1;

    $columns.on("click", function columnsClickHandler() {
        // cache the selected column
        var $selectedColumn = $(this);

        // cache the token holders to pass to the dropToken function
        var $columnsHolders = $selectedColumn.find(".holder");

        // get the index of targeted column
        var $columnIndex = $selectedColumn.index();

        // update the board with new token and get the index of targeted row
        var rowIndex = dropToken($columnsHolders);

        // prevent the player to drop the token on already full column
        if (rowIndex < 0) {
            return;
        }
        switchPlayers();
    });

    function dropToken($columnsHolders) {
        // loop in selected column from bottom
        for (var i = $columnsHolders.length - 1; i >= 0; i--) {
            var $currentHolder = $columnsHolders.eq(i);
            // check if the current holder is taken
            var isTaken =
                $currentHolder.hasClass("player-1") ||
                $currentHolder.hasClass("player-2");
            // if is not taken, add the corresponding class and return the position
            if (!isTaken) {
                $currentHolder.addClass("player-" + currentPlayer);
                return i;
            }
        }
        // if there's no empty holders, return -1
        return -1;
    }

    // switch players
    function switchPlayers() {
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
    }
})();
