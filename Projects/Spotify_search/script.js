$(function () {
    var API_URL = "https://spicedify.herokuapp.com/spotify";

    var useInfiniteScroll = location.search.indexOf("scroll=infinite") > -1;

    var $form = $("form");
    var $resultList = $(".result-list");
    var $resultTitle = $(".result-title");
    var $moreButton = $(".load-more-button");

    var nextURL = null;
    var searchValue = null;
    var optionValue = null;
    var hasScrolledCloseToBottom = false;

    $form.on("submit", submitFormHandler);
    $moreButton.on("click", moreButtomClickHandler);

    function submitFormHandler(event) {
        event.preventDefault();
        searchValue = event.currentTarget[0].value;
        optionValue = event.currentTarget[1].value;
        $.ajax({
            url: API_URL,
            data: {
                q: searchValue,
                type: optionValue,
            },
            success: function (data) {
                $resultList.empty();
                var proccessedData = extractInfoFromData(data);
                showResultsTitle(proccessedData, searchValue);
                renderResults(proccessedData.items);
                nextURL = proccessedData.next;
                if (!useInfiniteScroll) {
                    showMoreButton(proccessedData);
                }
                if (nextURL && useInfiniteScroll) {
                    checkScrollPoition();
                }
            },
        });
    }

    function checkScrollPoition() {
        hasScrolledCloseToBottom = checkHasScrollCloseToBottom();
        if (hasScrolledCloseToBottom) {
            var replacedURL = replaceURLName(nextURL);
            $.ajax({
                url: replacedURL,
                success: function (moreData) {
                    var proccessedData = extractInfoFromData(moreData);
                    renderResults(proccessedData.items);
                    nextURL = proccessedData.next;
                    if (nextURL) {
                        checkScrollPoition();
                    }
                },
            });
        } else {
            setTimeout(checkScrollPoition, 500);
        }
    }

    function checkHasScrollCloseToBottom() {
        var $sum = Math.round($(window).height() + $(document).scrollTop());
        if ($sum == $(document).height()) {
            return true;
        } else {
            return false;
        }
    }

    function moreButtomClickHandler() {
        var replacedURL = replaceURLName(nextURL);
        $.ajax({
            url: replacedURL,
            success: function (moreData) {
                var proccessedData = extractInfoFromData(moreData);
                renderResults(proccessedData.items);
                hideMoreButton(proccessedData.next);
            },
        });
    }

    function hideMoreButton(next) {
        next ? (nextURL = replaceURLName(next)) : $moreButton.hide();
    }

    function showMoreButton(data) {
        if (data.next) {
            $moreButton.show();
        }
    }

    function replaceURLName(spotifyURL) {
        return spotifyURL.replace("https://api.spotify.com/v1/search", API_URL);
    }

    function extractInfoFromData(data) {
        if (data.artists) {
            return data.artists;
        }
        return data.albums;
    }

    function showResultsTitle(results, searchValue) {
        if (results.total == 0) {
            $moreButton.hide();
            $resultTitle
                .html(
                    "Sorry, We could not find anything for " +
                        searchValue.toUpperCase()
                )
                .css({ color: "red" });
        } else {
            $resultTitle
                .html("Showing results for: " + searchValue.toUpperCase())
                .css({ color: "black" });
        }
    }

    function renderResults(results) {
        results.forEach(function (result) {
            var $listItem = $("<li class=individual-result></li>");
            var $link = $("<a></a>");
            var $image = $("<img></img>");
            var linkURL = result.external_urls.spotify;
            $link.attr("href", linkURL).html(result.name);

            result.images.length
                ? $image.attr("src", result.images[0].url)
                : $image.attr("src", "https://via.placeholder.com/150");

            $link.appendTo($listItem);
            $image.appendTo($listItem);
            $listItem.appendTo($resultList);
        });
    }
});
