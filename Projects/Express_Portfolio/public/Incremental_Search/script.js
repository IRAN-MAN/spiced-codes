(function () {
    var $field = $("#search");
    var $results = $("#results");
    var API_URL = "https://spicedworld.herokuapp.com/";
    var THROTTLE_INTERVAL = 200;
    var timerID;

    $field
        .on("input", throttleHandler)
        .on("keydown", keydownHandler)
        .on("focus", focusHandler)
        .on("blur", blurHandler);

    $("#results")
        .on("mouseover", ".individual-result", mouseoverHandler)
        .on("mousedown", ".individual-result", mousedownHandler);

    // Handlers

    function throttleHandler() {
        if (timerID) {
            clearTimeout(timerID);
        }
        timerID = setTimeout(function () {
            ajaxInputHandler();
        }, THROTTLE_INTERVAL);
    }

    function ajaxInputHandler() {
        var $valueAtRequest = $field.val();

        $.ajax({
            url: API_URL,
            data: {
                q: $valueAtRequest,
            },
            success: function (data) {
                if (!data.length) {
                    renderNoResults();
                    return;
                }
                var $valueAtResponse = $field.val();
                if ($valueAtRequest !== $valueAtResponse) {
                    return;
                }
                appendAjaxResponse(data);
            },
        });
    }

    function appendAjaxResponse(data) {
        $("#no-results").remove();
        $results.empty();
        data.forEach(function (country) {
            var elementToAppend =
                "<div class=individual-result>" + country + "</div>";
            $results.append(elementToAppend);
            if ($results.length == 4) {
                return;
            }
        });
    }

    function renderNoResults() {
        var noResultsMessage = "<div id=no-results>No Results!</div>";
        $results.html(noResultsMessage);
    }

    function inputHandler() {
        var $val = $field.val();

        if ($val.length == 0) {
            return;
        }
        var matches = [];

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf($val.toLowerCase()) == 0) {
                matches.push(countries[i]);
                if (matches.length == 4) {
                    break;
                }
            }
        }
        if (matches.length == 0) {
            var noResultsMessage = "<div>No Results!</div>";
            $results.html(noResultsMessage);
        } else {
            var upToFourResults = "";
            for (var j = 0; j < matches.length; j++) {
                upToFourResults += "<div class=individual-result>";
                upToFourResults += matches[j];
                upToFourResults += "</div>";
            }
            $results.html(upToFourResults);
        }
    }

    function keydownHandler(event) {
        switch (event.keyCode) {
            case 40: //Down Arrow
                var $highlightedIndex = $(".highlighted").index();
                if ($(".highlighted").length == 0) {
                    $results.children().first().addClass("highlighted");
                } else if (
                    $highlightedIndex !==
                    $(".individual-result").length - 1
                ) {
                    $(".highlighted").next().addClass("highlighted");
                    $(".highlighted").first().removeClass("highlighted");
                }
                break;
            case 38: //Up Arrow
                if ($(".highlighted").length == 0) {
                    $results.children().last().addClass("highlighted");
                } else if (
                    $(".individual-result").first().hasClass("highlighted")
                ) {
                    break;
                } else {
                    $(".highlighted").prev().addClass("highlighted");
                    $(".highlighted").last().removeClass("highlighted");
                }
                break;
            case 13:
                var $resultValue = $(".highlighted").html();
                $field.val($resultValue);
                $results.html("");
                break;
        }
    }

    function mouseoverHandler(event) {
        $(".highlighted").removeClass("highlighted");
        $(event.currentTarget).addClass("highlighted");
    }

    function mousedownHandler(event) {
        var $resultValue = $(event.currentTarget).html();
        $field.val($resultValue);
        $results.html("");
    }

    function focusHandler() {
        $field.trigger("input");
    }

    function blurHandler() {
        $results.html("");
    }

    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "C??te D'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Democratic People's Republic of Korea",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People???s Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Republic of Korea",
        "Republic of Moldova",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Tajikistan",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United Republic of Tanzania",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];
})();
