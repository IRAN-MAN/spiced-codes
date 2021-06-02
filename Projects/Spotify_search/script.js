$(function () {
    var API_URL = "https://spicedify.herokuapp.com/spotify";

    var $form = $("form");
    var $resultList = $(".result-list");
    var $resultTitle = $(".result-title");
    var moreButton = $(".load-more-button");

    var nextURL = null;
    var searchValue = null;
    var optionValue = null;

    $form.on("submit", submitFormHandler);

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
                var results = extractItemsFromData(data);
                showResultTitle(results, searchValue);
                renderResults(results);
                console.log(results);
            },
        });
    }

    function extractItemsFromData(data) {
        if (data.artists) {
            return data.artists.items;
        }
        return data.albums.items;
    }

    function renderResults(results) {
        $resultList.empty();
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

    function showResultTitle(results, searchValue) {
        if (results.length == 0) {
            $resultTitle
                .html(
                    "Sorry, We could not find anything for " +
                        searchValue.toUpperCase()
                )
                .css({ color: "red" });
        } else {
            $resultTitle.html(
                "Showing results for: " + searchValue.toUpperCase()
            );
        }
    }
});
