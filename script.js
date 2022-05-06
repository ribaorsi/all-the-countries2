const peru = 
[
    {
        "name": {
            "common": "Peru",
            "official": "Republic of Peru",
            "nativeName": {
                "aym": {
                    "official": "Piruw Suyu",
                    "common": "Piruw"
                },
                "que": {
                    "official": "Piruw Ripuwlika",
                    "common": "Piruw"
                },
                "spa": {
                    "official": "República del Perú",
                    "common": "Perú"
                }
            }
        },
        "tld": [
            ".pe"
        ],
        "cca2": "PE",
        "ccn3": "604",
        "cca3": "PER",
        "cioc": "PER",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "PEN": {
                "name": "Peruvian sol",
                "symbol": "S/ "
            }
        },
        "idd": {
            "root": "+5",
            "suffixes": [
                "1"
            ]
        },
        "capital": [
            "Lima"
        ],
        "altSpellings": [
            "PE",
            "Republic of Peru",
            "República del Perú"
        ],
        "region": "Americas",
        "subregion": "South America",
        "languages": {
            "aym": "Aymara",
            "que": "Quechua",
            "spa": "Spanish"
        },
        "translations": {
            "ara": {
                "official": "جمهورية بيرو",
                "common": "بيرو"
            },
            "ces": {
                "official": "Peruánská republika",
                "common": "Peru"
            },
            "cym": {
                "official": "Republic of Peru",
                "common": "Peru"
            },
            "deu": {
                "official": "Republik Peru",
                "common": "Peru"
            },
            "est": {
                "official": "Peruu Vabariik",
                "common": "Peruu"
            },
            "fin": {
                "official": "Perun tasavalta",
                "common": "Peru"
            },
            "fra": {
                "official": "République du Pérou",
                "common": "Pérou"
            },
            "hrv": {
                "official": "Republika Peru",
                "common": "Peru"
            },
            "hun": {
                "official": "Perui Köztársaság",
                "common": "Peru"
            },
            "ita": {
                "official": "Repubblica del Perù",
                "common": "Perù"
            },
            "jpn": {
                "official": "ペルー共和国",
                "common": "ペルー"
            },
            "kor": {
                "official": "페루 공화국",
                "common": "페루"
            },
            "nld": {
                "official": "Republiek Peru",
                "common": "Peru"
            },
            "per": {
                "official": "جمهوری پرو",
                "common": "پرو"
            },
            "pol": {
                "official": "Republika Peru",
                "common": "Peru"
            },
            "por": {
                "official": "República do Peru",
                "common": "Perú"
            },
            "rus": {
                "official": "Республика Перу",
                "common": "Перу"
            },
            "slk": {
                "official": "Peruánska republika",
                "common": "Peru"
            },
            "spa": {
                "official": "República de Perú",
                "common": "Perú"
            },
            "swe": {
                "official": "Republiken Peru",
                "common": "Peru"
            },
            "urd": {
                "official": "جمہوریہ پیرو",
                "common": "پیرو"
            },
            "zho": {
                "official": "秘鲁共和国",
                "common": "秘鲁"
            }
        },
        "latlng": [
            -10,
            -76
        ],
        "landlocked": false,
        "borders": [
            "BOL",
            "BRA",
            "CHL",
            "COL",
            "ECU"
        ],
        "area": 1285216,
        "demonyms": {
            "eng": {
                "f": "Peruvian",
                "m": "Peruvian"
            },
            "fra": {
                "f": "Péruvienne",
                "m": "Péruvien"
            }
        },
        "flag": "🇵🇪",
        "maps": {
            "googleMaps": "https://goo.gl/maps/uDWEUaXNcZTng1fP6",
            "openStreetMaps": "https://www.openstreetmap.org/relation/288247"
        },
        "population": 32971846,
        "gini": {
            "2019": 41.5
        },
        "fifa": "PER",
        "car": {
            "signs": [
                "PE"
            ],
            "side": "right"
        },
        "timezones": [
            "UTC-05:00"
        ],
        "continents": [
            "South America"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/pe.png",
            "svg": "https://flagcdn.com/pe.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/pe.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/pe.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                -12.05,
                -77.05
            ]
        },
        "postalCode": {
            "format": "#####",
            "regex": "^(\\d{5})$"
        }
    }
]
;

function loadEvent() {
    const rootElement = document.getElementById("root")

/* ellenőrizzük h hány elemű a tömb, hogy mi az elem típusa, ezeket kiírjuk konzolra, majd kiírunk egy navigált adatot, a tömb első elemében, azon belül a névben a hivatalos nevet */
    console.log(`peru's lenght: `, peru.length);
    console.log(typeof peru);
    console.log(peru[0].name.official);
/* elmentjük a peru objektumot egy külön változóba (később csak erre hivatkozunk) */
    const peruO=peru[0];        
    console.log(peruO);
/* Egy változóba beillesztjük a html-ünket, és az egyes elemekhez template literalként (${}) beírjuk a JSON fájl megfelelő hivatkozásait */
const peruHTML = `
<section class="independent">
<img src="${peruO.flags.png}" alt="flag">
<h1>${peruO.name.official}</h1>
<h2>${peruO.capital[0]}</h2>
<ul>Languages:
<li>${peruO.languages.aym}</li>
<li>${peruO.languages.que}</li>
<li>${peruO.languages.spa}</li>
</ul>
<!-- Ha a Landlocked true
<h4>I've never met the sea</h4>-->
</section>

`;
console.log(typeof peruHTML);
console.log(rootElement);
/* úgy jelenítjük meg a html kódunkat innen a js-ből, hogy az elérhető elemhez (ami most a rootElement) hozzátesszük insertAdjacentHTML metódussal - ez 2 argumentumot vár, a beillesztés helyét és egy stringet ami tartalmazza a HTML-t amit beilleszt (ez most a peruHTML változóba lett elmentve) */
rootElement.insertAdjacentHTML("beforeend", peruHTML);
}
/*
function landlocked() {
    if (peruO.landlocked === true)
    peruHTML.insertAdjacentHTML("beforeend", "I've never met the sea")
} */
window.addEventListener("load", loadEvent);

