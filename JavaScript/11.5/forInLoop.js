var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};
// console.log(a);
var b = {};

for (var p in a) {
    b[a[p]] = p;
}
console.log(a);
console.log(b);
