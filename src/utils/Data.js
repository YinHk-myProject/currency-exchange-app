//reference: https://flagpedia.net/download/api

const Data=[
    {
        id : 1,
        country: "United Arab Emirates",
        countryAbbrev:"ae",
        currencyName: "UAE Dirham",
        currencyCode: "AED",
        flagURL: "https://flagcdn.com/w40/ae.png"
    },
    {
        id : 2,
        country: "Argentina",
        countryAbbrev:"ar",
        currencyName: "Argentine Peso",
        currencyCode: "ARS",
        flagURL: "https://flagcdn.com/w40/ar.png"
    },
    {
        id : 3,
        country: "Australia",
        countryAbbrev:"au",
        currencyName: "Australian Dollar",
        currencyCode: "AUD",
        flagURL: "https://flagcdn.com/w40/au.png"
    },
    {
        id : 4,
        country: "Bulgaria",
        countryAbbrev:"bg",
        currencyName: "Bulgarian Lev",
        currencyCode: "BGN",
        flagURL: "https://flagcdn.com/w40/bg.png"
    },
    {
        id : 5,
        country: "Brazil",
        countryAbbrev:"br",
        currencyName: "Brazilian Real",
        currencyCode: "BRL",
        flagURL: "https://flagcdn.com/w40/br.png"
    },
    {
        id : 6,
        country: "Bahamas",
        countryAbbrev:"bs",
        currencyName: "Bahamian Dollar",
        currencyCode: "BSD",
        flagURL: "https://flagcdn.com/w40/bs.png"
    },
    {
        id : 7,
        country: "Canada",
        countryAbbrev:"ca",
        currencyName: "Canadian Dollar",
        currencyCode: "CAD",
        flagURL: "https://flagcdn.com/w40/ca.png"
    },
    {
        id : 8,
        country: "Switzerland",
        countryAbbrev:"ch",
        currencyName: "Swiss Franc",
        currencyCode: "CHF",
        flagURL: "https://flagcdn.com/w40/ch.png"
    },
    {
        id : 9,
        country: "Chile",
        countryAbbrev:"cl",
        currencyName: "Chilean Peso",
        currencyCode: "CLP",
        flagURL: "https://flagcdn.com/w40/cl.png"
    },
    {
        id : 10,
        country: "China",
        countryAbbrev:"cn",
        currencyName: "Chinese Renminbi",
        currencyCode: "CNY",
        flagURL: "https://flagcdn.com/w40/cn.png"
    },
    {
        id : 11,
        country: "Colombia",
        countryAbbrev:"co",
        currencyName: "Colombian Peso",
        currencyCode: "COP",
        flagURL: "https://flagcdn.com/w40/co.png"
    },
    {
        id : 12,
        country: "Czech Republic",
        countryAbbrev:"cz",
        currencyName: "Czech Koruna",
        currencyCode: "CZK",
        flagURL: "https://flagcdn.com/w40/cz.png"
    },
    {
        id : 13,
        country: "Denmark",
        countryAbbrev:"dk",
        currencyName: "Danish Krone",
        currencyCode: "DKK",
        flagURL: "https://flagcdn.com/w40/dk.png"
    },
    {
        id : 14,
        country: "Dominican Republic",
        countryAbbrev:"do",
        currencyName: "Dominican Peso",
        currencyCode: "DOP",
        flagURL: "https://flagcdn.com/w40/do.png"
    },
    {
        id : 15,
        country: "Egypt",
        countryAbbrev:"eg",
        currencyName: "Egyptian Pound",
        currencyCode: "EGP",
        flagURL: "https://flagcdn.com/w40/eg.png"
    },
    {
        id : 16,
        country: "Euro",
        countryAbbrev:"eu",
        currencyName: "Euro",
        currencyCode: "EUR",
        flagURL: "https://flagcdn.com/w40/eu.png"
    },
    {
        id : 17,
        country: "Fiji",
        countryAbbrev:"fj",
        currencyName: "Fiji Dollar",
        currencyCode: "FJD",
        flagURL: "https://flagcdn.com/w40/fj.png"
    },
    {
        id : 18,
        country: "United Kingdom",
        countryAbbrev:"gb",
        currencyName: "British Pound",
        currencyCode: "GBP",
        flagURL: "https://flagcdn.com/w40/gb.png"
    },
    {
        id : 19,
        country: "Guatemala",
        countryAbbrev:"gt",
        currencyName: "Guatemalan Quetzal",
        currencyCode: "GTQ",
        flagURL: "https://flagcdn.com/w40/gt.png"
    },
    {
        id : 20,
        country: "Hong Kong",
        countryAbbrev:"hk",
        currencyName: "Hong Kong Dollar",
        currencyCode: "HKD",
        flagURL: "https://flagcdn.com/w40/hk.png"
    },
    {
        id : 21,
        country: "Croatia",
        countryAbbrev:"hr",
        currencyName: "Croatian Kuna",
        currencyCode: "HRK",
        flagURL: "https://flagcdn.com/w40/hr.png"
    },
	{
        id : 22,
        country: "Hungary",
        countryAbbrev:"hu",
        currencyName: "Hungarian Forint",
        currencyCode: "HUF",
        flagURL: "https://flagcdn.com/w40/hu.png"
    },
    {
        id : 23,
        country: "Indonesia",
        countryAbbrev:"id",
        currencyName: "Indonesian Rupiah",
        currencyCode: "IDR",
        flagURL: "https://flagcdn.com/w40/id.png"
    },
    {
        id : 24,
        country: "Israel",
        countryAbbrev:"il",
        currencyName: "Israeli New Shekel",
        currencyCode: "ILS",
        flagURL: "https://flagcdn.com/w40/il.png"
    },
    {
        id : 25,
        country: "India",
        countryAbbrev:"in",
        currencyName: "Indian Rupee",
        currencyCode: "INR",
        flagURL: "https://flagcdn.com/w40/in.png"
    },
    {
        id : 26,
        country: "Iceland",
        countryAbbrev:"is",
        currencyName: "Icelandic Krona",
        currencyCode: "ISK",
        flagURL: "https://flagcdn.com/w40/is.png"
    },
    {
        id : 27,
        country: "Japan",
        countryAbbrev:"jp",
        currencyName: "Japanese Yen",
        currencyCode: "JPY",
        flagURL: "https://flagcdn.com/w40/jp.png"
    },
    {
        id : 28,
        country: "South Korea",
        countryAbbrev:"kr",
        currencyName: "South Korean Won",
        currencyCode: "KRW",
        flagURL: "https://flagcdn.com/w40/kr.png"
    },
    {
        id : 29,
        country: "Kazakhstan",
        countryAbbrev:"kz",
        currencyName: "Kazakhstani Tenge",
        currencyCode: "KZT",
        flagURL: "https://flagcdn.com/w40/kz.png"
    },
    {
        id : 30,
        country: "Maldives",
        countryAbbrev:"mv",
        currencyName: "Maldivian Rufiyaa",
        currencyCode: "MVR",
        flagURL: "https://flagcdn.com/w40/mv.png"
    },
    {
        id : 31,
        country: "Mexico",
        countryAbbrev:"mx",
        currencyName: "Mexican Peso",
        currencyCode: "MXN",
        flagURL: "https://flagcdn.com/w40/mx.png"
    },
    {
        id : 32,
        country: "Malaysia",
        countryAbbrev:"my",
        currencyName: "Malaysian Ringgit",
        currencyCode: "MYR",
        flagURL: "https://flagcdn.com/w40/my.png"
    },
    {
        id : 33,
        country: "Norway",
        countryAbbrev:"no",
        currencyName: "Norwegian Krone",
        currencyCode: "NOK",
        flagURL: "https://flagcdn.com/w40/no.png"
    },
    {
        id : 34,
        country: "New Zealand",
        countryAbbrev:"nz",
        currencyName: "New Zealand Dollar",
        currencyCode: "NZD",
        flagURL: "https://flagcdn.com/w40/nz.png"
    },
    {
        id : 35,
        country: "Panama",
        countryAbbrev:"pa",
        currencyName: "Panamanian Balboa",
        currencyCode: "PAB",
        flagURL: "https://flagcdn.com/w40/pa.png"
    },
    {
        id : 36,
        country: "Peru",
        countryAbbrev:"pe",
        currencyName: "Peruvian Sol",
        currencyCode: "PEN",
        flagURL: "https://flagcdn.com/w40/pe.png"
    },
    {
        id : 37,
        country: "Philippines",
        countryAbbrev:"ph",
        currencyName: "Philippine Peso",
        currencyCode: "PHP",
        flagURL: "https://flagcdn.com/w40/ph.png"
    },
    {
        id : 38,
        country: "Pakistan",
        countryAbbrev:"pk",
        currencyName: "Pakistani Rupee",
        currencyCode: "PKR",
        flagURL: "https://flagcdn.com/w40/pk.png"
    },
    {
        id : 39,
        country: "Poland",
        countryAbbrev:"pl",
        currencyName: "Polish Zloty",
        currencyCode: "PLN",
        flagURL: "https://flagcdn.com/w40/pl.png"
    },
    {
        id : 40,
        country: "Paraguay",
        countryAbbrev:"py",
        currencyName: "Paraguayan Guarani",
        currencyCode: "PYG",
        flagURL: "https://flagcdn.com/w40/py.png"
    },
    {
        id : 41,
        country: "Romania",
        countryAbbrev:"ro",
        currencyName: "Romanian Leu",
        currencyCode: "RON",
        flagURL: "https://flagcdn.com/w40/ro.png"
    },
    {
        id : 42,
        country: "Russia",
        countryAbbrev:"ru",
        currencyName: "Russian Ruble",
        currencyCode: "RUB",
        flagURL: "https://flagcdn.com/w40/ru.png"
    },
    {
        id : 43,
        country: "Saudi Arabia",
        countryAbbrev:"sa",
        currencyName: "Saudi Riyal",
        currencyCode: "SAR",
        flagURL: "https://flagcdn.com/w40/sa.png"
    },
    {
        id : 44,
        country: "Sweden",
        countryAbbrev:"se",
        currencyName: "Swedish Krona",
        currencyCode: "SEK",
        flagURL: "https://flagcdn.com/w40/se.png"
    },
    {
        id : 45,
        country: "Singapore",
        countryAbbrev:"sg",
        currencyName: "Singapore Dollar",
        currencyCode: "SGD",
        flagURL: "https://flagcdn.com/w40/sg.png"
    },
    {
        id : 46,
        country: "Thailand",
        countryAbbrev:"th",
        currencyName: "Thai Baht",
        currencyCode: "THB",
        flagURL: "https://flagcdn.com/w40/th.png"
    },
    {
        id : 47,
        country: "Turkey",
        countryAbbrev:"tr",
        currencyName: "Turkish Lira",
        currencyCode: "TRY",
        flagURL: "https://flagcdn.com/w40/tr.png"
    },
    {
        id : 48,
        country: "Taiwan",
        countryAbbrev:"tw",
        currencyName: "New Taiwan Dollar",
        currencyCode: "TWD",
        flagURL: "https://flagcdn.com/w40/tw.png"
    },
    {
        id : 49,
        country: "Ukraine",
        countryAbbrev:"ua",
        currencyName: "Ukrainian Hryvnia",
        currencyCode: "UAH",
        flagURL: "https://flagcdn.com/w40/ua.png"
    },
    {
        id : 50,
        country: "United States",
        countryAbbrev:"us",
        currencyName: "United States Dollar",
        currencyCode: "USD",
        flagURL: "https://flagcdn.com/w40/us.png"
    },
    {
        id : 51,
        country: "Uruguay",
        countryAbbrev:"uy",
        currencyName: "Uruguayan Peso",
        currencyCode: "UYU",
        flagURL: "https://flagcdn.com/w40/uy.png"
    },
    {
        id : 52,
        country: "South Africa",
        countryAbbrev:"za",
        currencyName: "South African Rand",
        currencyCode: "ZAR",
        flagURL: "https://flagcdn.com/w40/za.png"
    },	

];

export default Data;


