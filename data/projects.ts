export type Projects = {
    name: string;
    shortInfo: string;
    status: string;
    blockchains: string[];
    description: string;
    header_img_path: string;
    slug: string;
    tag: string[];
    products: string[];
    website: string;
    year: string;
    integration_url: string;
    twitter: string;
    telegram: string;
    discord: string;
    youtube: string;
    github: string;
    img_path: string;
    type: string;
    integrationTitle: string;


};


const projects = [
    {
        "name": "Metalottery",
        "shortInfo": "The cross-metaverse lottery",
        "status": "Live",
        "description": "Metalottery aims to become the cross-metaverse lottery. Thanks to blockchain technology and Chainlink, Metalottery is able to guarantee a secure and transparent gaming process.",
        "header_img_path": "/img/project-headers/metalottery_header.jpeg",
        "slug": "metalottery",
        "tag": [
            "Gaming"
        ],
        "website": "https://play.decentraland.org/",
        "year": "2021",
        "integration_url": "https://metalottery.medium.com/metalottery-integrates-chainlink-vrf-to-bring-verifiable-randomness-to-its-decentraland-based-815b46eb2113",
        "twitter": "https://twitter.com/decentraland",
        "telegram": "",
        "discord": "https://decentraland.org/discord/",
        "youtube": "",
        "github": "http://github.com/decentraland",
        "img_path": "https://storage.cloud.google.com/chainlink-atlas-images/project-logos/metalottery.jpeg",
        "type": "Project",
        "integrationTitle": "Metalottery integrates Chainlink VRF to bring verifiable randomness to its Decentraland-based lottery"
    },
    {
        "name": "RSGP Finance",
        "shortInfo": "Nostalgic NFT gamified platform",
        "status": "Intent",
        "description": "RSGP.finance is a nostalgic Old School RuneScape (OSRS) inspired, yield farming platform with NFT gamification on the Binance Smart Chain. Users can earn RSGP tokens, obtain classic and unique rare items in the form of an NFT, that all can be used to maximize rewards on the platform or traded on the marketplace.",
        "header_img_path": "/img/project-headers/rsgp-finance_header.jpeg",
        "slug": "rsgp-finance",
        "tag": [
            "Gaming"
        ],
        "website": "https://rsgp.finance/#/",
        "year": "2021",
        "integration_url": "https://rsgp.medium.com/rsgp-finance-will-integrate-chainlink-vrf-to-secure-randomized-gameplay-on-chain-5d5b494b093f",
        "twitter": "https://twitter.com/RSGPfinance",
        "telegram": "https://t.me/RSGPfinance",
        "discord": "https://discord.gg/53xqK7Gfjf",
        "youtube": "",
        "github": "http://github.com/rsgp",
        "img_path": "https://storage.cloud.google.com/chainlink-atlas-images/project-logos/rsgp-finance.jpeg",
        "type": "Project",
        "integrationTitle": "RSGP.finance‌ ‌Will‌ ‌Integrate‌ ‌Chainlink‌ ‌VRF‌ ‌to‌ ‌Secure‌ ‌Randomized‌ ‌Gameplay‌ ‌On-Chain‌"
    },
    {
        "name": "Notable",
        "shortInfo": "The NFT Experience Platform",
        "status": "Live",
        "description": "Notable provides a very powerful Markdown editor, it's the same one VS Code uses in fact, so features like multi-cursors, a minimap and best-in-class syntax highlighting are built-in.",
        "header_img_path": "/img/project-headers/notable_header.jpeg",
        "slug": "notable",
        "tag": [
            "Gaming"
        ],
        "website": "https://notable.app/",
        "year": "2022",
        "integration_url": "https://medium.com/@Notable-nft/notable-integrates-chainlink-vrf-to-help-power-random-airdrops-draws-and-giveaways-198e86b48d79",
        "twitter": "https://twitter.com/TheNotableApp",
        "telegram": "https://t.me/notablenft",
        "discord": "",
        "youtube": "https://www.youtube.com/channel/UCcjJ9nPhOkdy4SfjAlyIsug/about",
        "github": "",
        "img_path": "https://storage.cloud.google.com/chainlink-atlas-images/project-logos/notable.jpeg",
        "type": "Project",
        "integrationTitle": "Notable Integrates Chainlink VRF to Help Power Random Airdrops, Draws, and Giveaways"
    },
]

module.exports = {
    projects
};