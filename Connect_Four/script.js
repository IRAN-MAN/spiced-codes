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

        // check if the player has 4 tokens in vertical holders
        checkForWinner($columnsHolders);

        // get the index of targeted column
        var $columnIndex = $selectedColumn.index();

        // update the board with new token and get the index of targeted row
        var rowIndex = dropToken($columnsHolders);

        // prevent the player to drop the token on already full column
        if (rowIndex < 0) {
            return;
        }

        // get the horizantal holders using its index
        var $rowHolders = getRowHolders(rowIndex);

        checkForWinner($rowHolders);

        switchPlayers();
    });

    function checkForWinner($holders) {
        var count = 0;
        for (var i = 0; i < $holders.length; i++) {
            var $currentHolder = $holders.eq(i);
            // if there's a holder with the current player class, add 1 to the variable
            if ($currentHolder.hasClass("player-" + currentPlayer)) {
                count++;
                console.log("player-" + currentPlayer, count);
                if (count === 4) {
                    console.log("Player " + currentPlayer + " has won!");
                    // setTimeout(function () {
                    //     window.location.reload();
                    // }, 1000);
                }
            } else {
                count = 0;
            }
        }
    }

    function getRowHolders(rowIndex) {
        //empty jquery object
        var $rowHolder = $();
        // loop over the columns, add the holders at rowIndex to the $rowsHolder
        for (var i = 0; i < $columns.length; i++) {
            var $column = $columns.eq(i);
            var $holderPos = $column.find(".holder").eq(rowIndex);
            $rowHolder = $rowHolder.add($holderPos);
        }
        return $rowHolder;
    }

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
        currentPlayer === 1 ? (currentPlayer = 2) : (currentPlayer = 1);
    }
})();
