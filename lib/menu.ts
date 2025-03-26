import * as types from "../Components/DropDownMenu/types"
export const storeSubMenu: types.MenuList[] = [
    {
        id: 101,
        type: "Shop",
        children: [
            { id: 11, name: "Shop Latest" },
            { id: 12, name: "Mac" },
            { id: 13, name: "Ipad" },
            { id: 14, name: "Iphone" },
            { id: 15, name: "Apple Watch" },
            { id: 16, name: "Accessories" }
        ]
    },
    {
        id: 102,
        type: "Quick Links",
        children: [
            { id: 21, name: "Find a Store" },
            { id: 22, name: "order Status" },
            { id: 23, name: "Ways to buy" },
            { id: 24, name: "Personal Setup" }
        ]
    },
    {
        id: 103,
        type: "Shop speacial Stores",
        children: [
            { id: 31, name: "Find a Store" },
            { id: 32, name: "order Status" },
        ]
    }
]

export const macSubMenu: types.MenuList[] = [
    {
        id: 201,
        type: "Explore Mac",
        children: [
            { id: 11, name: "Explore All Mac" },
            { id: 12, name: "Macbook Air" },
            { id: 13, name: "Macbook Pro" },
            { id: 14, name: "Imac" },
            { id: 15, name: "MacMini" },
            { id: 16, name: "Mac Studio" },
            { id: 17, name: "Mac Pro" },
            { id: 18, name: "Displays" },
        ]
    },
    {
        id: 202,
        type: "Shop Mac",
        children: [
            { id: 21, name: "Shop Mac" },
            { id: 22, name: "Mac Accessories" },
            { id: 23, name: "Ways to buy" },
        ]
    },
    {
        id: 203,
        type: "More from Mac",
        children: [
            { id: 31, name: "Mac Support" },
            { id: 32, name: "AppleCare+ for Mac" },
            { id: 33, name: "MacOS Sequoia" },
            { id: 34, name: "Apple Intelligence" },
            { id: 35, name: "Apps by Apple" },
            { id: 36, name: "Continuity" },
            { id: 37, name: "iCloud+" },
            { id: 38, name: "Mac for Business" },
            { id: 39, name: "Education" },
        ]
    }
]

export const ipadSubMenu: types.MenuList[] = [
    {
        id: 301,
        type: "Explore Ipad",
        children: [
            { id: 11, name: "Explore All iPad" },
            { id: 12, name: "iPad Pro" },
            { id: 13, name: "iPad Air" },
            { id: 14, name: "iPad" },
            { id: 15, name: "iPad mini" },
            { id: 16, name: "Apple Pencil" },
            { id: 17, name: "Keyboards" },
        ]
    },
    {
        id: 302,
        type: "Shop iPad",
        children: [
            { id: 21, name: "Shop iPad" },
            { id: 22, name: "iPad Accessories" },
            { id: 23, name: "Ways to buy" },
        ]
    },
    {
        id: 303,
        type: "More from iPad",
        children: [
            { id: 31, name: "iPad Support" },
            { id: 32, name: "AppleCare+ for iPad" },
            { id: 33, name: "iPadOS 18" },
            { id: 34, name: "Apple Intelligence" },
            { id: 35, name: "Apps by Apple" },
            { id: 37, name: "iCloud+" },
            { id: 39, name: "Education" },
        ]
    }
]

export const iphoneSubMenu: types.MenuList[] = [
    {
        id: 401,
        type: "Explore iPhone",
        children: [
            { id: 11, name: "Explore All iPhone" },
            { id: 12, name: "iPhone 16 Pro" },
            { id: 13, name: "iPhone 16" },
            { id: 14, name: "iPhone 16e" },
            { id: 15, name: "iPhone 15" },
        ]
    },
    {
        id: 402,
        type: "Shop iPhone",
        children: [
            { id: 21, name: "Shop iPhone" },
            { id: 22, name: "iPhone Accessories" },
            { id: 23, name: "Apple Trade In" },
            { id: 24, name: "Ways to buy" },
        ]
    },
    {
        id: 403,
        type: "More from iPhone",
        children: [
            { id: 31, name: "iPhone Support" },
            { id: 32, name: "AppleCare+ for iPhone" },
            { id: 33, name: "iOS 18" },
            { id: 34, name: "Apple Intelligence" },
            { id: 35, name: "Apps by Apple" },
            { id: 36, name: "iPhone Privacy" },
            { id: 37, name: "iCloud+" },
            { id: 38, name: "Wallet" },
            { id: 39, name: "Siri" },
        ]
    }
]


export const wathcSubMenu: types.MenuList[] = [
    {
        id: 501,
        type: "Explore Watch",
        children: [
            { id: 11, name: "Explore All Apple Watch" },
            { id: 12, name: "Apple Watch Series 10" },
            { id: 13, name: "Apple Watch Ultra 2" },
            { id: 14, name: "Apple Watch SE" },
            { id: 15, name: "Apple Watch Nike" },
        ]
    },
    {
        id: 502,
        type: "Shop Watch",
        children: [
            { id: 21, name: "Shop Apple Watch" },
            { id: 22, name: "Apple Watch Straps" },
            { id: 23, name: "Apple Watch Accessories" },
            { id: 24, name: "Ways to Buy" },
        ]
    },
    {
        id: 503,
        type: "More from Watch",
        children: [
            { id: 31, name: "Apple Watch Support" },
            { id: 32, name: "AppleCare+" },
            { id: 33, name: "WatchOS 11" },
            { id: 34, name: "Apple Watch For Your Kids" },
            { id: 35, name: "Apps by Apple" },
        ]
    }
]

export const entertainmentSubmenu: types.MenuList[] = [
    {
        id: 601,
        type: "Explore Entertainment",
        children: [
            { id: 11, name: "Explore Entertainment" },
            { id: 12, name: "Apple One" },
            { id: 13, name: "Apple TV+" },
            { id: 14, name: "Apple Music" },
            { id: 15, name: "Apple Arcade" },
            { id: 16, name: "Apple Podcasts" },
            { id: 17, name: "Apple Books" },
            { id: 18, name: "Apple Store" },
        ]
    },
    {
        id: 602,
        type: "Support",
        children: [
            { id: 21, name: "Apple TV+ Support" },
            { id: 22, name: "Apple Music Support" },
        ]
    }
]

export const accessoriesSubmenu: types.MenuList[] = [
    {
        id: 701,
        type: "Shop Accessories",
        children: [
            { id: 11, name: "Shop All Accessories" },
            { id: 12, name: "Mac" },
            { id: 13, name: "iPad" },
            { id: 14, name: "iPhone" },
            { id: 15, name: "Apple Watch" },
            { id: 16, name: "AirPods" },
            { id: 17, name: "TV & Home" },
        ]
    },
    {
        id: 702,
        type: "Explore Accessories",
        children: [
            { id: 21, name: "Made by Apple" },
            { id: 22, name: "Beats by Dr.Dre" },
            { id: 23, name: "AirTag" },
        ]
    }
]

export const supportSubmenu: types.MenuList[] = [
    {
        id: 801,
        type: "Explore Support",
        children: [
            { id: 11, name: "iPhone" },
            { id: 12, name: "Mac" },
            { id: 13, name: "iPad" },
            { id: 14, name: "Watch" },
            { id: 16, name: "AirPods" },
            { id: 17, name: "Music" },
            { id: 18, name: "TV" },
        ]
    },
    {
        id: 802,
        type: "Get Help",
        children: [
            { id: 21, name: "Community" },
            { id: 22, name: "Check Coverage" },
            { id: 23, name: "Repair" },
        ]
    },
    {
        id: 803,
        type: "Helpful Topics",
        children: [
            { id: 21, name: "Get AppleCare+" },
            { id: 22, name: "Apple Account and Password" },
            { id: 23, name: "Biling & Subscription" },
            { id: 24, name: "Accessibility" },
        ]
    }
]

export const airpodsSubmenu: types.MenuList[] = [
    {
        id: 901,
        type: "Explore AirPods",
        children: [
            { id: 11, name: "Explore All AirPods" },
            { id: 12, name: "AirPods 4" },
            { id: 13, name: "AirPods Pro 2" },
            { id: 14, name: "AirPods Max" },
        ]
    },
    {
        id: 902,
        type: "Shop AirPods",
        children: [
            { id: 21, name: "Shop AirPods" },
            { id: 22, name: "AirPods Accessories" },
        ]
    },
    {
        id: 903,
        type: "More from AirPods",
        children: [
            { id: 21, name: "AirPods Support" },
            { id: 22, name: "AppleCare+ for HeadPhones" },
            { id: 23, name: "Apple Music" },
        ]
    }
]


export const allSubMenus: Record<string, types.MenuList[]> = {
    Store: [
        {
            id: 101,
            type: "Shop",
            children: [
                { id: 11, name: "Shop Latest" },
                { id: 12, name: "Mac" },
                { id: 13, name: "Ipad" },
                { id: 14, name: "Iphone" },
                { id: 15, name: "Apple Watch" },
                { id: 16, name: "Accessories" }
            ]
        },
        {
            id: 102,
            type: "Quick Links",
            children: [
                { id: 21, name: "Find a Store" },
                { id: 22, name: "Order Status" },
                { id: 23, name: "Ways to buy" },
                { id: 24, name: "Personal Setup" }
            ]
        },
        {
            id: 103,
            type: "Shop Special Stores",
            children: [
                { id: 31, name: "Find a Store" },
                { id: 32, name: "Order Status" }
            ]
        }
    ],
    Mac: [
        {
            id: 201,
            type: "Explore Mac",
            children: [
                { id: 11, name: "Explore All Mac" },
                { id: 12, name: "Macbook Air" },
                { id: 13, name: "Macbook Pro" },
                { id: 14, name: "iMac" },
                { id: 15, name: "Mac Mini" },
                { id: 16, name: "Mac Studio" },
                { id: 17, name: "Mac Pro" },
                { id: 18, name: "Displays" }
            ]
        },
        {
            id: 202,
            type: "Shop Mac",
            children: [
                { id: 21, name: "Shop Mac" },
                { id: 22, name: "Mac Accessories" },
                { id: 23, name: "Ways to buy" }
            ]
        }
    ],
    iPhone: [
        {
            id: 401,
            type: "Explore iPhone",
            children: [
                { id: 11, name: "Explore All iPhone" },
                { id: 12, name: "iPhone 16 Pro" },
                { id: 13, name: "iPhone 16" },
                { id: 14, name: "iPhone 16e" },
                { id: 15, name: "iPhone 15" }
            ]
        },
        {
            id: 402,
            type: "Shop iPhone",
            children: [
                { id: 21, name: "Shop iPhone" },
                { id: 22, name: "iPhone Accessories" },
                { id: 23, name: "Apple Trade In" },
                { id: 24, name: "Ways to buy" }
            ]
        }
    ],
    Watch: [
        {
            id: 501,
            type: "Explore Watch",
            children: [
                { id: 11, name: "Explore All Apple Watch" },
                { id: 12, name: "Apple Watch Series 10" },
                { id: 13, name: "Apple Watch Ultra 2" },
                { id: 14, name: "Apple Watch SE" },
                { id: 15, name: "Apple Watch Nike" }
            ]
        }
    ],
    Entertainment: [
        {
            id: 601,
            type: "Explore Entertainment",
            children: [
                { id: 11, name: "Explore Entertainment" },
                { id: 12, name: "Apple One" },
                { id: 13, name: "Apple TV+" },
                { id: 14, name: "Apple Music" },
                { id: 15, name: "Apple Arcade" }
            ]
        }
    ],
    Accessories: [
        {
            id: 701,
            type: "Shop Accessories",
            children: [
                { id: 11, name: "Shop All Accessories" },
                { id: 12, name: "Mac" },
                { id: 13, name: "iPad" },
                { id: 14, name: "iPhone" }
            ]
        }
    ],
    Support: [
        {
            id: 801,
            type: "Explore Support",
            children: [
                { id: 11, name: "iPhone" },
                { id: 12, name: "Mac" },
                { id: 13, name: "iPad" }
            ]
        }
    ],
    AirPods: [
        {
            id: 901,
            type: "Explore AirPods",
            children: [
                { id: 11, name: "Explore All AirPods" },
                { id: 12, name: "AirPods 4" },
                { id: 13, name: "AirPods Pro 2" }
            ]
        }
    ]
};

export const footerDescription = `<p>o Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.<br/>
Representative example:<br/>
A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.<br/>
‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
<br/>1. Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to English (Australia, Canada, Ireland, New Zealand, South Africa, UK or US), as part of an iOS 18, iPadOS 18 and macOS Sequoia software update. Additional features and Chinese (Simplified), English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese (Brazil) and Spanish language support will be available in early April, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
<br/>A subscription is required for Apple TV+. <br/>
Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>`

export const footerMenu = [
    {
        heading: "Shop and Learn",
        children: [
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "AirPods",
            "TV & Home",
            "AirTag",
            "Accessories",
            "Gift Cards",
        ],
    },
    {
        heading: "Apple Wallet",
        children: ["Wallet"],
    },
    {
        heading: "Account",
        children: [
            "Manage Your Apple Account",
            "Apple Store Account",
            "iCloud.com",
        ],
    },
    {
        heading: "Entertainment",
        children: [
            "Apple One",
            "Apple TV+",
            "Apple Music",
            "Apple Arcade",
            "Apple Podcasts",
            "Apple Books",
            "App Store",
        ],
    },
    {
        heading: "Apple Store",
        children: [
            "Find a Store",
            "Genius Bar",
            "Today at Apple",
            "Group Reservations",
            "Apple Camp",
            "Apple Trade In",
            "Ways to Buy",
            "Recycling Programme",
            "Order Status",
            "Shopping Help",
        ],
    },
    {
        heading: "For Business",
        children: ["Apple and Business", "Shop for Business"],
    },
    {
        heading: "For Education",
        children: ["Apple and Education", "Shop for Education", "Shop for University"],
    },
    {
        heading: "For Healthcare",
        children: ["Apple in Healthcare", "Mac in Healthcare", "Health on Apple Watch"],
    },
    {
        heading: "Apple Values",
        children: ["Accessibility", "Education", "Environment", "Privacy", "Supply Chain"],
    },
    {

        heading: "About Apple",
        children: [
            "Newsroom",
            "Apple Leadership",
            "Career Opportunities",
            "Investors",
            "Ethics & Compliance",
            "Events",
            "Contact Apple",
        ],
    }
]