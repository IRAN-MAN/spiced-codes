/*
Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in 
Internet Explorer 5 and Netscape 4.

 let getNameAndCountry = ({name, country}) => [name, country];

 let getRelocatedCity = (city1, city2={country: 'Germany'}) => {
     let [, country] = getNameAndCountry(city2);
     return {
         ...city1,
         country
     };
 };
*/

const city1 = { name: "Tehran", country: "Iran" };
const city2 = { name: "Trier", country: "Germany" };

// let getNameAndCountry = ({ name, country }) => [name, country];

// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country,
//     };
// };

var getNameAndCountry = function (city) {
    var name = city.name;
    var country = city.country;
    return [name, country];
};

var getRelocatedCity = function (city1, city2) {
    var nameAndCountry = getNameAndCountry(city2);

    var country = nameAndCountry[1];

    city1.country = country;

    return city1;
};

console.log(getRelocatedCity(city1, city2));
