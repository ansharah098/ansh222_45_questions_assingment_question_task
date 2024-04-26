function describe_city(city, Country) {
    if (Country === void 0) { Country = 'default country.'; }
    console.log("".concat(city, " is in ").concat(Country));
}
describe_city('karachi', 'pakistan');
describe_city('Beijing', 'china');
describe_city('dehli', 'India');
describe_city('kabul');
