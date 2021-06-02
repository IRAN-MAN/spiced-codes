(function () {
    // cache the selectors
    var $board = $(".board");
    var $columns = $board.find(".columns");
    var $resetButton = $("#reset");
    var $gameOver = $(".winner-modal-container");
    var currentPlayer = 1;

    $columns
        .on("mouseenter", function () {
            var $emptyHolders = $(this).find(".holder");
            // console.log($emptyHolders);
            // console.log($emptyHolders.length);

            for (var i = $emptyHolders.length - 1; i >= 0; i--) {
                var $currentHolder = $emptyHolders.eq(i);
                // console.log($currentHolder);
                var isTaken =
                    $currentHolder.hasClass("player-1") ||
                    $currentHolder.hasClass("player-2");
                if (!isTaken) {
                    $currentHolder
                        .find(".circle")
                        .addClass(`player-${currentPlayer}-hover-effect`);
                    break;
                }
            }
        })
        .on("mouseleave", ".holder", function () {
            $(".holder")
                .find(".circle")
                .removeClass(`player-${currentPlayer}-hover-effect`);
        })
        .on("click", function columnsClickHandler() {
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

            // check if the player has 4 tokens in vertical holders
            checkForWinner($columnsHolders);

            // get the horizantal holders using its index
            var $rowHolders = getRowHolders(rowIndex);

            // check if the player has 4 tokens in horizantal holders
            checkForWinner($rowHolders);

            var $topDiagonalHolders = getTopDiagonalHolders(
                rowIndex,
                $columnIndex
            );

            checkForWinner($topDiagonalHolders);

            var $bottomDiagonalHolders = getBottomDiagonalHolders(
                rowIndex,
                $columnIndex
            );

            checkForWinner($bottomDiagonalHolders);

            switchPlayers();
        });

    function getTopDiagonalHolders(rowIdx, colIdx) {
        var $diagonals = $();
        var $allHolders = $columns.find(".holder");
        while (rowIdx > 0 && colIdx > 0) {
            rowIdx--;
            colIdx--;
        }
        while (rowIdx <= 5 && colIdx <= 6) {
            $diagonals = $diagonals.add($allHolders.eq(rowIdx + colIdx * 6));
            rowIdx++;
            colIdx++;
        }

        return $diagonals;
    }

    function getBottomDiagonalHolders(rowIdx, colIdx) {
        var $diagonals = $();
        var $allHolders = $columns.find(".holder");
        while (rowIdx < 5 && colIdx > 0) {
            rowIdx++;
            colIdx--;
        }
        while (rowIdx >= 0 && colIdx <= 6) {
            $diagonals = $diagonals.add($allHolders.eq(rowIdx + colIdx * 6));
            rowIdx--;
            colIdx++;
        }
        return $diagonals;
    }

    function checkForWinner($holders) {
        var count = 0;
        for (var i = 0; i < $holders.length; i++) {
            var $currentHolder = $holders.eq(i);
            // if there's a holder with the current player class, add 1 to the variable
            if ($currentHolder.hasClass("player-" + currentPlayer)) {
                count++;

                if (count === 4) {
                    showWinnerHandler($holders);
                }
            } else {
                count = 0;
            }
        }
    }

    function showWinnerHandler($holders) {
        var $winnerHolders = $holders.filter(".player-" + currentPlayer);
        console.log($winnerHolders);
        $winnerHolders.children().addClass("winner");
        $(`<h4>Player ${currentPlayer} has won!</h4>`).insertAfter(
            $gameOver.find(".winner-modal h3")
        );
        setTimeout(function () {
            $gameOver.css({ display: "flex" });
        }, 2500);
    }

    $resetButton.on("click", function () {
        $gameOver.css({ display: "none" });
        window.location.reload();
    });

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
                $currentHolder.find(".token").animate(
                    {
                        top: "+=400px",
                    },
                    "slow"
                );
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
