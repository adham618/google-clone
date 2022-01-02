const API_KEY = process.env.API_KEY
const CONTEXT_KEY = process.env.CONTEXT_KEY


export interface IRequest {

}

const data: IRequest = {
  "kind": "customsearch#search",
  "url": {
    "type": "application/json",
    "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  },
  "queries": {
    "request": [
      {
        "title": "Google Custom Search - hj",
        "totalResults": "1120000",
        "searchTerms": "hj",
        "count": 10,
        "startIndex": 1,
        "inputEncoding": "utf8",
        "outputEncoding": "utf8",
        "safe": "off",
        "cx": "e7fb775d59ffd1418"
      }
    ],
    "nextPage": [
      {
        "title": "Google Custom Search - hj",
        "totalResults": "1120000",
        "searchTerms": "hj",
        "count": 10,
        "startIndex": 11,
        "inputEncoding": "utf8",
        "outputEncoding": "utf8",
        "safe": "off",
        "cx": "e7fb775d59ffd1418"
      }
    ]
  },
  "context": {
    "title": "Google"
  },
  "searchInformation": {
    "searchTime": 0.322144,
    "formattedSearchTime": "0.32",
    "totalResults": "1120000",
    "formattedTotalResults": "1,120,000"
  },
  "items": [
    {
      "kind": "customsearch#result",
      "title": "Google Maps",
      "htmlTitle": "Google Maps",
      "link": "https://www.google.com/maps/contrib/108086772011076743937/reviews",
      "displayLink": "www.google.com",
      "snippet": "H J ; Photo of McDonald's. McDonald's. XJXW+MVC, Lebanon ; Photo of Mandaloun cafe. Mandaloun cafe. WHQR+HHW, Haret El Bellan, Lebanon ; Photo of Auchan Drive ...",
      "htmlSnippet": "<b>H J</b> ; Photo of McDonald&#39;s. McDonald&#39;s. XJXW+MVC, Lebanon ; Photo of Mandaloun cafe. Mandaloun cafe. WHQR+HHW, Haret El Bellan, Lebanon ; Photo of Auchan Drive&nbsp;...",
      "cacheId": "eGAjvYbipMMJ",
      "formattedUrl": "https://www.google.com/maps/contrib/108086772011076743937/reviews",
      "htmlFormattedUrl": "https://www.google.com/maps/contrib/108086772011076743937/reviews",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6AKPxcKCbFW7eGHGdTjCiqmdQQ5IgvK--21nWN8kIjF239s-qTIZ3Jk8T",
            "width": "310",
            "height": "163"
          }
        ],
        "metatags": [
          {
            "referrer": "origin",
            "og:image": "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_5.png",
            "og:image:width": "256",
            "twitter:card": "summary",
            "og:site_name": "Contributions by H J",
            "viewport": "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
            "og:title": "Contributions by H J",
            "og:image:height": "256",
            "google": "notranslate",
            "og:description": "Level 5 Local Guide | 527 Points"
          }
        ],
        "place": [
          {
            "image": "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_5.png",
            "name": "Contributions by H J",
            "description": "Level 5 Local Guide | 527 Points"
          }
        ],
        "cse_image": [
          {
            "src": "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_5.png"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "H.J. Stead Company, 34 Linden St, Geneva, NY - Google Maps",
      "htmlTitle": "<b>H.J.</b> Stead Company, 34 Linden St, Geneva, NY - Google Maps",
      "link": "https://www.google.com/maps/search/?api=1&query=H.J.%20Stead%20Company%2C%2034%20Linden%20St%2C%20Geneva%2C%20NY&query_place_id=ChIJu2EN5RbF0IkRgvy8udpM-6g",
      "displayLink": "www.google.com",
      "snippet": "H.J. Stead Company, 34 Linden St, Geneva, NY. Connect to internet to see place info.",
      "htmlSnippet": "<b>H.J.</b> Stead Company, 34 Linden St, Geneva, NY. Connect to internet to see place info.",
      "cacheId": "cs4M7uzNdm0J",
      "formattedUrl": "https://www.google.com/maps/search/?api=1&query=H.J...query...",
      "htmlFormattedUrl": "https://www.google.com/maps/search/?api=1&amp;query=H.J...query...",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs",
            "width": "204",
            "height": "247"
          }
        ],
        "metatags": [
          {
            "referrer": "origin",
            "twitter:card": "summary",
            "theme-color": "#3367d6",
            "viewport": "initial-scale=1.0, user-scalable=no",
            "google": "notranslate"
          }
        ],
        "cse_image": [
          {
            "src": "https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "CN302385817S - Solar led light (hj-p339) - Google Patents",
      "htmlTitle": "CN302385817S - Solar led light (<b>hj</b>-p339) - Google Patents",
      "link": "https://www.google.com/patents/CN302385817S?cl=en",
      "displayLink": "www.google.com",
      "snippet": "1. The name of this design product: solar LED light (HJ-P339). 2. The purpose of this design product: It is a solar LED lamp. 3.",
      "htmlSnippet": "1. The name of this design product: solar LED light (<b>HJ</b>-P339). 2. The purpose of this design product: It is a solar LED lamp. 3.",
      "formattedUrl": "https://www.google.com/patents/CN302385817S?cl=en",
      "htmlFormattedUrl": "https://www.google.com/patents/CN302385817S?cl=en",
      "pagemap": {
        "metatags": [
          {
            "referrer": "origin-when-crossorigin",
            "citation_patent_application_number": "CN:201230443145.0",
            "citation_patent_number": "CN:302385817:S",
            "dc.description": "1.  The name of this design product: solar LED light (HJ-P339).  2.  The purpose of this design product: It is a solar LED lamp.  3.  The main points of this design: overall shape and pattern.  4.  The picture or photo that best shows the main points of the design: the main view.  5. The bottom view and the top view are symmetrical, and the rear view has no design points, so the bottom view and the rear view are omitted.",
            "dc.type": "patent",
            "viewport": "width=device-width, initial-scale=1",
            "dc.title": "Solar led light (hj-p339)",
            "dc.date": "2012-09-17",
            "dc.contributor": "陈友来"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Hj Hassan Guest House",
      "htmlTitle": "<b>Hj</b> Hassan Guest House",
      "link": "https://www.google.com/travel/hotels/entity/CgoIjqnLmbnx_-E_EAE?sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABogCgIaABIaEhQKBwjlDxAGGBUSBwjlDxAGGBYYATICEAAqCQoFOgNVU0QaAA&ei=nPczYamnOJLFlQaimofgAQ&ei=2Da5YZzPIeuL8LAP2f2qgAY&ei=Q9e-Yd-kCrSI8LAPlIeDuAQ&ved=2ahUKEwif0pKBpO_0AhU0BBwAHZTDAEcQ_OQGegQIARBk",
      "displayLink": "www.google.com",
      "snippet": "More. GREAT DEAL$16. 26% less than usual. Hj Hassan Guest House. 4.7. (49). Call. Directions. Website. Overview. Prices. Reviews. Location. Photos. About.",
      "htmlSnippet": "More. GREAT DEAL$16. 26% less than usual. <b>Hj</b> Hassan Guest House. 4.7. (49). Call. Directions. Website. Overview. Prices. Reviews. Location. Photos. About.",
      "formattedUrl": "https://www.google.com/.../CgoIjqnLmbnx_-E_EAE?...",
      "htmlFormattedUrl": "https://www.google.com/.../CgoIjqnLmbnx_-E_EAE?...",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeWvIlybRCmI69S3DElekIEYBdpuftybm5TaB3ddN4A4Ydm7WNG3nkOjA",
            "width": "272",
            "height": "185"
          }
        ],
        "metatags": [
          {
            "application-name": "Travel",
            "og:image": "https://lh5.googleusercontent.com/p/AF1QipN_7M6_NtwAQT0gGyvQdkO6zRX-zw5AKXunblx3=w296-h202-n-k-no-v1",
            "og:type": "website",
            "og:image:width": "296",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hj Hassan Guest House 4.7 ★ (49)",
            "mod": "true",
            "og:site_name": "Google Hotel Search",
            "apple-mobile-web-app-title": "Travel",
            "og:title": "Hj Hassan Guest House 4.7 ★ (49)",
            "og:image:height": "202",
            "og:description": "$16 · Jan 10–11, 2022",
            "twitter:image": "https://lh5.googleusercontent.com/p/AF1QipN_7M6_NtwAQT0gGyvQdkO6zRX-zw5AKXunblx3=w296-h202-n-k-no-v1",
            "referrer": "origin",
            "twitter:image:alt": "Hj Hassan Guest House 4.7 ★ (49)",
            "apple-mobile-web-app-status-bar-style": "black",
            "msapplication-tap-highlight": "no",
            "viewport": "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
            "apple-mobile-web-app-capable": "yes",
            "twitter:description": "$16 · Jan 10–11, 2022",
            "mobile-web-app-capable": "yes",
            "og:locale": "en_US",
            "og:url": "https://www.google.com/travel/hotels/entity/ChkIjqnLmbnx_-E_Gg0vZy8xMWRfdjdyMG1tEAE?g2lb=4356900"
          }
        ],
        "cse_image": [
          {
            "src": "https://lh5.googleusercontent.com/p/AF1QipN_7M6_NtwAQT0gGyvQdkO6zRX-zw5AKXunblx3=w296-h202-n-k-no-v1"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "H. J. Grand Hotel",
      "htmlTitle": "<b>H. J.</b> Grand Hotel",
      "link": "https://www.google.com/travel/hotels/entity/ChgI84HCwZrtpd77ARoLL2cvMXRkbXkxcHkQAQ?utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABogCgIaABIaEhQKBwjlDxAFGAMSBwjlDxAFGAQYATICEAAqDwoLKAFKAiABOgNVU0QaAA&sa=X&rp=OAE&ei=-ZeRYKnGGMmU9wX61Y74Dw&ei=PRHeYL3lC4if2QLLgLKgAw&ved=2ahUKEwj996_Ux8LxAhWIT1YKHUuADDQQv6wDegUIARC6AQ",
      "displayLink": "www.google.com",
      "snippet": "H. J. Grand Hotel. 4.1. (68)·5-star hotel. Call. Directions. Overview. Prices. Reviews. Location. Photos. About. Nightly price. Free cancellation only.",
      "htmlSnippet": "<b>H. J.</b> Grand Hotel. 4.1. (68)·5-star hotel. Call. Directions. Overview. Prices. Reviews. Location. Photos. About. Nightly price. Free cancellation only.",
      "cacheId": "Mi1PjeJTjx8J",
      "formattedUrl": "https://www.google.com/.../ ChgI84HCwZrtpd77ARoLL2cvMXRkbXkxcHkQAQ?...",
      "htmlFormattedUrl": "https://www.google.com/.../ ChgI84HCwZrtpd77ARoLL2cvMXRkbXkxcHkQAQ?...",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSXE8Jp2VD9d2dbYao3YUOrTXhyRLT7GaVOoEcJgUFaUIIIp3Ez1ikgjTv7",
            "width": "272",
            "height": "185"
          }
        ],
        "metatags": [
          {
            "application-name": "Travel",
            "og:image": "https://lh3.googleusercontent.com/proxy/slJqVZr2sFgwfzS0bJOGdeEo1U3WIOTQU2Si_kmIwa4n3Ca19_Ja-YI6d_pXybZZbtiv-Wm3PFuEDgGVF7wJ2ax82iO_SYUxf8Rc2lkCbWTE-JL5L8aYipOmYQBntj7SbHefZWaFJOhsZqM-XzSkNfdHHwCAO_w=w296-h202-n-k-no-v1",
            "og:type": "website",
            "og:image:width": "296",
            "twitter:card": "summary_large_image",
            "twitter:title": "H. J. Grand Hotel 4.1 ★ (68)",
            "mod": "true",
            "og:site_name": "Google Hotel Search",
            "apple-mobile-web-app-title": "Travel",
            "og:title": "H. J. Grand Hotel 4.1 ★ (68)",
            "og:image:height": "202",
            "og:description": "$58 · Jan 9–10, 2022",
            "twitter:image": "https://lh3.googleusercontent.com/proxy/slJqVZr2sFgwfzS0bJOGdeEo1U3WIOTQU2Si_kmIwa4n3Ca19_Ja-YI6d_pXybZZbtiv-Wm3PFuEDgGVF7wJ2ax82iO_SYUxf8Rc2lkCbWTE-JL5L8aYipOmYQBntj7SbHefZWaFJOhsZqM-XzSkNfdHHwCAO_w=w296-h202-n-k-no-v1",
            "referrer": "origin",
            "twitter:image:alt": "H. J. Grand Hotel 4.1 ★ (68)",
            "apple-mobile-web-app-status-bar-style": "black",
            "msapplication-tap-highlight": "no",
            "viewport": "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
            "apple-mobile-web-app-capable": "yes",
            "twitter:description": "$58 · Jan 9–10, 2022",
            "mobile-web-app-capable": "yes",
            "og:locale": "en_US",
            "og:url": "https://www.google.com/travel/hotels/entity/ChgI84HCwZrtpd77ARoLL2cvMXRkbXkxcHkQAQ?g2lb=4356900"
          }
        ],
        "cse_image": [
          {
            "src": "https://cdn.ostrovok.ru/t/1024x768/mec/b3/77/b377509bd2d02d4e69553e4d44e2ab69625bf570.jpeg"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "CN302413479S - Digital display voltmeter (hj-401a) - Google Patents",
      "htmlTitle": "CN302413479S - Digital display voltmeter (<b>hj</b>-401a) - Google Patents",
      "link": "https://www.google.com/patents/CN302413479S?cl=en",
      "displayLink": "www.google.com",
      "snippet": "1. The name of the product with this design: digital display voltmeter (HJ-401A); 2. The purpose of this design product: as a voltage meter for ...",
      "htmlSnippet": "1. The name of the product with this design: digital display voltmeter (<b>HJ</b>-401A); 2. The purpose of this design product: as a voltage meter for&nbsp;...",
      "formattedUrl": "https://www.google.com/patents/CN302413479S?cl=en",
      "htmlFormattedUrl": "https://www.google.com/patents/CN302413479S?cl=en",
      "pagemap": {
        "metatags": [
          {
            "referrer": "origin-when-crossorigin",
            "citation_patent_application_number": "CN:201230548633.8",
            "citation_patent_number": "CN:302413479:S",
            "dc.description": "1.  The name of the product with this design: digital display voltmeter (HJ-401A); 2.  The purpose of this design product: as a voltage meter for electromechanical equipment; 3.  The main points of the design: the shape and pattern of the product; 4.  Picture or photo that best shows the main points of the design: three-dimensional diagram; 5.  The top view is symmetrical with the bottom view, the right view is symmetrical with the left view, the rear view has no design essentials, and the top view, right view and rear view are omitted.",
            "dc.type": "patent",
            "viewport": "width=device-width, initial-scale=1",
            "dc.title": "Digital display voltmeter (hj-401a)",
            "dc.date": "2012-11-13",
            "dc.contributor": "冯建平"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "Hj Hassan Guest House",
      "htmlTitle": "<b>Hj</b> Hassan Guest House",
      "link": "https://www.google.com/travel/hotels/entity/CgoIjqnLmbnx_-E_EAE?sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABogCgIaABIaEhQKBwjlDxAGGBUSBwjlDxAGGBYYATICEAAqCQoFOgNVU0QaAA&ei=nPczYamnOJLFlQaimofgAQ&ei=2Da5YZzPIeuL8LAP2f2qgAY&ei=av3GYfedDLSI8LAPlIeDuAQ&ved=2ahUKEwj3-rbC6f70AhU0BBwAHZTDAEcQ_OQGegQIARBn",
      "displayLink": "www.google.com",
      "snippet": "Hj Hassan Guest House · Check availability · Location summary · Google review summary · Photos · About this hotel · Web results · More resorts · Similar to Hj Hassan ...",
      "htmlSnippet": "<b>Hj</b> Hassan Guest House &middot; Check availability &middot; Location summary &middot; Google review summary &middot; Photos &middot; About this hotel &middot; Web results &middot; More resorts &middot; Similar to <b>Hj</b> Hassan&nbsp;...",
      "formattedUrl": "https://www.google.com/.../CgoIjqnLmbnx_-E_EAE?...",
      "htmlFormattedUrl": "https://www.google.com/.../CgoIjqnLmbnx_-E_EAE?...",
      "pagemap": {
        "cse_thumbnail": [
          {
            "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGNgWjCWeVMchwlOjrf9Rmj1ufQWUqSZH-pLF9Q4b9Ow",
            "width": "272",
            "height": "185"
          }
        ],
        "metatags": [
          {
            "application-name": "Travel",
            "og:image": "https://lh5.googleusercontent.com/p/AF1QipN_7M6_NtwAQT0gGyvQdkO6zRX-zw5AKXunblx3=w592-h404-n-k-no-v1",
            "og:type": "website",
            "og:image:width": "296",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hj Hassan Guest House 4.7 ★ (49)",
            "mod": "true",
            "og:site_name": "Google Hotel Search",
            "apple-mobile-web-app-title": "Travel",
            "og:title": "Hj Hassan Guest House 4.7 ★ (49)",
            "og:image:height": "202",
            "og:description": "$16 · Jan 10–11, 2022",
            "twitter:image": "https://lh5.googleusercontent.com/p/AF1QipN_7M6_NtwAQT0gGyvQdkO6zRX-zw5AKXunblx3=w592-h404-n-k-no-v1",
            "referrer": "origin",
            "twitter:image:alt": "Hj Hassan Guest House 4.7 ★ (49)",
            "apple-mobile-web-app-status-bar-style": "black",
            "msapplication-tap-highlight": "no",
            "viewport": "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
            "apple-mobile-web-app-capable": "yes",
            "twitter:description": "$16 · Jan 10–11, 2022",
            "mobile-web-app-capable": "yes",
            "og:locale": "en_US",
            "og:url": "https://www.google.com/travel/hotels/entity/ChkIjqnLmbnx_-E_Gg0vZy8xMWRfdjdyMG1tEAE?g2lb=4356900"
          }
        ],
        "cse_image": [
          {}
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "CN301878245S - Ultrasonic medicine fumigation treatment machine ...",
      "htmlTitle": "CN301878245S - Ultrasonic medicine fumigation treatment machine ...",
      "link": "https://www.google.com/patents/CN301878245S?cl=en",
      "displayLink": "www.google.com",
      "snippet": "1. The name of the design product: Ultrasonic Medicine Fumigation Treatment Machine (HJ-9834). 2. Application of design product: TCM anorectal special ...",
      "htmlSnippet": "1. The name of the design product: Ultrasonic Medicine Fumigation Treatment Machine (<b>HJ</b>-9834). 2. Application of design product: TCM anorectal special&nbsp;...",
      "formattedUrl": "https://www.google.com/patents/CN301878245S?cl=en",
      "htmlFormattedUrl": "https://www.google.com/patents/CN301878245S?cl=en",
      "pagemap": {
        "metatags": [
          {
            "referrer": "origin-when-crossorigin",
            "citation_patent_application_number": "CN:201130340612.2",
            "citation_patent_number": "CN:301878245:S",
            "dc.description": "1. The name of the design product: Ultrasonic Medicine Fumigation Treatment Machine (HJ-9834).  2. Application of design product: TCM anorectal special instrument.  3. The main points of appearance design: the combination of overall shape and pattern.  4. Design key picture: main view.",
            "dc.type": "patent",
            "viewport": "width=device-width, initial-scale=1",
            "dc.title": "Ultrasonic medicine fumigation treatment machine (hj-9834)",
            "dc.date": "2011-09-26",
            "dc.contributor": "朱晓秋"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "CN301770708S - Door flower (hj-1388) - Google Patents",
      "htmlTitle": "CN301770708S - Door flower (<b>hj</b>-1388) - Google Patents",
      "link": "https://www.google.com/patents/CN301770708S?cl=en",
      "displayLink": "www.google.com",
      "snippet": "1. The name of this design product: Door Flower (HJ-1388). 2. The purpose of this design product: used for door decoration. 3. The main point of the design ...",
      "htmlSnippet": "1. The name of this design product: Door Flower (<b>HJ</b>-1388). 2. The purpose of this design product: used for door decoration. 3. The main point of the design&nbsp;...",
      "formattedUrl": "https://www.google.com/patents/CN301770708S?cl=en",
      "htmlFormattedUrl": "https://www.google.com/patents/CN301770708S?cl=en",
      "pagemap": {
        "metatags": [
          {
            "referrer": "origin-when-crossorigin",
            "citation_patent_application_number": "CN:201130242376.0",
            "citation_patent_number": "CN:301770708:S",
            "dc.description": "1. The name of this design product: Door Flower (HJ-1388).  2. The purpose of this design product: used for door decoration.  3. The main point of the design of this design product: lies in the combination of shape and pattern.  4. The picture that best shows the main points of the design: the main view.  5. The rear view is symmetrical to the front view, the rear view is omitted, other views have no design essentials, and other views are omitted.",
            "dc.type": "patent",
            "viewport": "width=device-width, initial-scale=1",
            "dc.title": "Door flower (hj-1388)",
            "dc.date": "2011-07-26",
            "dc.contributor": "李碧坚"
          }
        ]
      }
    },
    {
      "kind": "customsearch#result",
      "title": "CN302413478S - Digital display voltmeter (hj-301e) - Google Patents",
      "htmlTitle": "CN302413478S - Digital display voltmeter (<b>hj</b>-301e) - Google Patents",
      "link": "https://www.google.com/patents/CN302413478S?cl=en",
      "displayLink": "www.google.com",
      "snippet": "1. The name of this design product: Digital Display Voltmeter (HJ-301E); 2. The purpose of this design product: as a voltage meter for electromechanical ...",
      "htmlSnippet": "1. The name of this design product: Digital Display Voltmeter (<b>HJ</b>-301E); 2. The purpose of this design product: as a voltage meter for electromechanical&nbsp;...",
      "formattedUrl": "https://www.google.com/patents/CN302413478S?cl=en",
      "htmlFormattedUrl": "https://www.google.com/patents/CN302413478S?cl=en",
      "pagemap": {
        "metatags": [
          {
            "referrer": "origin-when-crossorigin",
            "citation_patent_application_number": "CN:201230548357.5",
            "citation_patent_number": "CN:302413478:S",
            "dc.description": "1.  The name of this design product: Digital Display Voltmeter (HJ-301E); 2.  The purpose of this design product: as a voltage meter for electromechanical equipment; 3.  The main points of the design: the shape and pattern of the product; 4.  Picture or photo that best shows the main points of the design: three-dimensional diagram; 5.  The top view is symmetrical to the bottom view, and the top view is omitted; the left view is the same as the bottom view rotated 90 degrees clockwise, and the right view is the same as the bottom view rotated 90 degrees counterclockwise, and the left and right views are omitted.",
            "dc.type": "patent",
            "viewport": "width=device-width, initial-scale=1",
            "dc.title": "Digital display voltmeter (hj-301e)",
            "dc.date": "2012-11-13",
            "dc.contributor": "冯建平"
          }
        ]
      }
    }
  ]
}
export default data