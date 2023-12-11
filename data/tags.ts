
export type Tags = {
    name: string;
    description: string;

};


const tags = [
    {
        "name": "DeFi",
        "description": "Platforms leveraging blockchain technology to provide decentralized financial services, such as lending, borrowing, and trading."
    },
    {
        "name": "NFT",
        "description": "Digital assets representing ownership or proof of authenticity for unique items, often used in art, collectibles, and gaming."
    },
    {
        "name": "Gaming",
        "description": "Technologies and platforms related to blockchain-based or decentralized gaming ecosystems."
    },
    {
        "name": "Data Provider",
        "description": "Services or platforms that supply blockchain-related data, analytics, or information."
    },
    {
        "name": "Blockchain",
        "description": "General category for projects focusing on blockchain technology without specifying a particular niche."
    },
    {
        "name": "Node Operator",
        "description": "Entities responsible for operating and maintaining nodes in a blockchain network."
    },
    {
        "name": "Protocol",
        "description": "Fundamental rules and standards governing communication and interaction within a blockchain network."
    },
    {
        "name": "DEX",
        "description": "Platforms facilitating peer-to-peer cryptocurrency trading without the need for intermediaries."
    },
    {
        "name": "BUILD",
        "description": "Projects or platforms related to the development and construction of blockchain ecosystems."
    },
    {
        "name": "Play to Earn",
        "description": "Gaming models where players can earn rewards, usually in the form of cryptocurrency, for in-game achievements."
    },
    {
        "name": "Infrastructure",
        "description": "Foundational components and services supporting the operation of blockchain networks."
    },
    {
        "name": "Web3",
        "description": "The next generation of the World Wide Web, characterized by decentralized protocols and user-controlled data."
    },
    {
        "name": "DAO",
        "description": "Decentralized Autonomous Organizations governed by smart contracts and run by community consensus rather than traditional hierarchical structures."
    },
    {
        "name": "Layer2",
        "description": "Scalability solutions built on top of existing blockchains to enhance transaction throughput."
    },
    {
        "name": "Grants",
        "description": "Initiatives providing funding or resources to support the development of blockchain projects."
    },
    {
        "name": "Launchpad",
        "description": "Platforms facilitating the launch of new blockchain projects or token offerings."
    },
    {
        "name": "Payments",
        "description": "Solutions enabling the transfer of value using cryptocurrencies."
    },
    {
        "name": "Developer Tool",
        "description": "Tools and resources designed to aid developers in building applications on blockchain platforms."
    },
    {
        "name": "Enterprise",
        "description": "Blockchain solutions tailored for business and enterprise use."
    },
    {
        "name": "Metaverse",
        "description": "Virtual shared spaces combining aspects of social media, online gaming, and augmented/virtual reality."
    },
    {
        "name": "Insurance",
        "description": "Blockchain-based platforms offering decentralized insurance solutions."
    },
    {
        "name": "Social",
        "description": "Platforms leveraging blockchain for social networking, content creation, or community building."
    },
    {
        "name": "AI",
        "description": "Projects leveraging artificial intelligence technologies to provide innovative solutions."
    },
    {
        "name": "Collaboration",
        "description": "Platforms and tools facilitating collaboration and communication in a decentralized or blockchain context."
    },
    {
        "name": "Real Estate",
        "description": "Blockchain applications and platforms related to real estate, property management, and transactions."
    },
    {
        "name": "GameFi",
        "description": "The intersection of gaming and decentralized finance, often involving play-to-earn models and tokenized in-game assets."
    },
    {
        "name": "Marketing",
        "description": "Blockchain solutions focused on marketing and advertising technologies."
    },
    {
        "name": "Sports",
        "description": "Blockchain applications in the sports industry, including fan engagement, tokenized assets, and sports management."
    },
    {
        "name": "CeFi",
        "description": "Centralized Finance, referring to traditional financial services integrated with blockchain or decentralized technologies."
    },
    {
        "name": "Compliance",
        "description": "Projects addressing regulatory compliance and governance on the blockchain."
    },
    {
        "name": "Credentials",
        "description": "Blockchain-based solutions for managing and verifying digital credentials, certifications, and licenses."
    },
    {
        "name": "Education",
        "description": "Blockchain applications in the education sector, including e-learning, credential verification, and academic record management."
    },
    {
        "name": "Web2",
        "description": "Contrasting with Web3, this category refers to projects within the traditional, centralized World Wide Web paradigm."
    },
    {
        "name": "Security",
        "description": "Blockchain applications and solutions focused on enhancing cybersecurity and data protection."
    },
    {
        "name": "Art",
        "description": "The intersection of blockchain technology with the creation, distribution, and ownership of digital and traditional art."
    },
    {
        "name": "Consortium",
        "description": "Collaborative efforts among multiple entities to build and maintain blockchain networks and applications."
    },
    {
        "name": "Monetisation",
        "description": "Blockchain-based strategies and technologies for monetizing content, services, or assets."
    },
    {
        "name": "Storage",
        "description": "Decentralized storage solutions leveraging blockchain technology."
    },
    {
        "name": "Carbon Credits",
        "description": "Blockchain initiatives addressing carbon credits, emissions trading, and environmental sustainability."
    },
    {
        "name": "Social Impact",
        "description": "Projects using blockchain technology to create positive social and environmental impact."
    },
    {
        "name": "Analytics",
        "description": "Blockchain applications and platforms providing data analytics and insights."
    },
    {
        "name": "Health",
        "description": "Blockchain applications in the healthcare industry, including medical records management and healthcare data security."
    },
    {
        "name": "Video",
        "description": "Blockchain applications related to video content creation, distribution, and ownership."
    },
    {
        "name": "Privacy",
        "description": "Blockchain projects focusing on enhancing user privacy and data protection."
    },
    {
        "name": "Research",
        "description": "Blockchain initiatives dedicated to research and development in various fields."
    },
    {
        "name": "Music",
        "description": "Blockchain applications in the music industry, including royalty distribution and music rights management."
    },
    {
        "name": "SCALE",
        "description": "Projects and technologies addressing scalability challenges in blockchain networks."
    },
    {
        "name": "Ecommerce",
        "description": "Blockchain applications and platforms facilitating decentralized e-commerce transactions."
    },
    {
        "name": "IoT",
        "description": "Integration of blockchain with the Internet of Things (IoT) for enhanced security and data integrity."
    },
    {
        "name": "Reputation",
        "description": "Blockchain solutions for managing and verifying online reputation and trust."
    },
    {
        "name": "Retail",
        "description": "Blockchain applications and platforms in the retail industry, including supply chain and inventory management."
    },
    {
        "name": "Ticketing",
        "description": "Blockchain applications in ticketing systems, including event ticketing and verification."
    },
    {
        "name": "Energy",
        "description": "Blockchain initiatives addressing energy management, trading, and sustainability."
    },
    {
        "name": "Auctions",
        "description": "Blockchain-based auction platforms and solutions."
    },
    {
        "name": "Liquid Staking",
        "description": "Protocols that enable you to earn staking rewards on your tokens while also providing a tradeable and liquid receipt for your staked position."
    },
    {
        "name": "Lending",
        "description": "Protocols that allow users to borrow and lend assets"
    },
    {
        "name": "Yield",
        "description": "Protocols that pay you a reward for your staking/LP on their platform"
    },
    {
        "name": "Synthetics",
        "description": "Synthetic assets are financial instruments that simulate the value of other assets, often real-world assets, without requiring direct ownership of the underlying assets. These synthetic assets are typically created on blockchain platforms and are governed by smart contracts."
    },
    { "name": "Layer 1", "description": "" },
    { "name": "Zero Knowledge", "description": "" },
    { "name": "Centralized Exchange", "description": "" },
    { "name": "Wallet", "description": "" }
]

module.exports = {
    tags
};