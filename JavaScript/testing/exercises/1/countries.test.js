const countries = require("./countries");

test("When find is passed an empty string, it returns an empty array", () => {
    const result = countries.find("");
    expect(result).toStrictEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    const result = countries.find("B");
    expect(result).toStrictEqual([
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
    ]);
});

test("The search is case insensitive", () => {
    const result = countries.find("antigua AND barbuda");
    expect(result).toStrictEqual(["Antigua and Barbuda"]);
});

test("If there are no matching countries, an empty array is returned", () => {
    const result = countries.find("Miladistan");
    expect(result).toStrictEqual([]);
});
