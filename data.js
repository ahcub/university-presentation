const cryptoTimeline = [
    {
        year: 2009,
        events: [
            {
                date: "3 січня 2009",
                title: "Генезис-блок Bitcoin",
                description: "Сатоші Накамото видобуває перший блок Bitcoin, вбудовуючи повідомлення 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'. Це знаменує народження криптовалюти.",
                category: "bitcoin",
                tags: ["Bitcoin", "Блокчейн", "Proof of Work"],
                impact: "Революційно - створено першу децентралізовану цифрову валюту",
                ecosystem: "Bitcoin"
            },
            {
                date: "12 січня 2009",
                title: "Перша транзакція Bitcoin",
                description: "Сатоші Накамото надсилає 10 BTC Хелу Фінні, що стало першою peer-to-peer транзакцією Bitcoin в історії.",
                category: "bitcoin",
                tags: ["Bitcoin", "Транзакція", "P2P"],
                impact: "Довів життєздатність peer-to-peer цифрових грошей",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2010,
        events: [
            {
                date: "22 травня 2010",
                title: "День Bitcoin-піци",
                description: "Ласло Ханєч купує дві піци за 10,000 BTC - перша реальна транзакція Bitcoin. Цей день тепер щорічно святкується як День Bitcoin-піци.",
                category: "bitcoin",
                tags: ["Bitcoin", "Прийняття", "Історичне"],
                impact: "Перше комерційне використання Bitcoin у реальному світі",
                ecosystem: "Bitcoin"
            },
            {
                date: "18 липня 2010",
                title: "Запуск біржі Mt. Gox",
                description: "Mt. Gox, спочатку біржа торгових карток Magic: The Gathering, перетворюється на біржу Bitcoin. Пізніше вона обробляла 70% всіх транзакцій Bitcoin.",
                category: "bitcoin",
                tags: ["Біржа", "Торгівля", "Інфраструктура"],
                impact: "Встановила модель централізованої біржі",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2011,
        events: [
            {
                date: "February 9, 2011",
                title: "Bitcoin Reaches Dollar Parity",
                description: "Bitcoin reaches $1 for the first time, marking a significant psychological milestone for the cryptocurrency.",
                category: "bitcoin",
                tags: ["Bitcoin", "Price", "Milestone"],
                impact: "Validated Bitcoin as a store of value",
                ecosystem: "Bitcoin"
            },
            {
                date: "April 2011",
                title: "Litecoin Created",
                description: "Charlie Lee creates Litecoin as the 'silver to Bitcoin's gold', featuring faster block times and a different hashing algorithm (Scrypt).",
                category: "innovation",
                tags: ["Litecoin", "Altcoin", "Fork"],
                impact: "First major Bitcoin alternative",
                ecosystem: "Litecoin"
            },
            {
                date: "June 2011",
                title: "First Major Bitcoin Hack",
                description: "Mt. Gox suffers its first major security breach, with 2,000 BTC stolen. Bitcoin price crashes from $17 to $0.01 on the exchange.",
                category: "regulation",
                tags: ["Security", "Hack", "Mt. Gox"],
                impact: "Highlighted security vulnerabilities in centralized exchanges",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2012,
        events: [
            {
                date: "September 2012",
                title: "Bitcoin Foundation Established",
                description: "The Bitcoin Foundation is created to standardize, protect, and promote Bitcoin. Early members include Gavin Andresen and Roger Ver.",
                category: "bitcoin",
                tags: ["Bitcoin", "Organization", "Governance"],
                impact: "Provided organizational structure for Bitcoin development",
                ecosystem: "Bitcoin"
            },
            {
                date: "November 28, 2012",
                title: "First Bitcoin Halving",
                description: "Bitcoin's block reward reduces from 50 BTC to 25 BTC, the first halving event in Bitcoin's programmed monetary policy.",
                category: "bitcoin",
                tags: ["Bitcoin", "Halving", "Monetary Policy"],
                impact: "Demonstrated Bitcoin's deflationary design",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2013,
        events: [
            {
                date: "March 2013",
                title: "Bitcoin Surpasses $1 Billion Market Cap",
                description: "Bitcoin's total market capitalization exceeds $1 billion for the first time, with price reaching $92.",
                category: "bitcoin",
                tags: ["Bitcoin", "Market Cap", "Growth"],
                impact: "Attracted institutional attention",
                ecosystem: "Bitcoin"
            },
            {
                date: "December 2013",
                title: "Vitalik Buterin Proposes Ethereum",
                description: "Vitalik Buterin publishes the Ethereum whitepaper, proposing a blockchain with a built-in Turing-complete programming language for smart contracts.",
                category: "ethereum",
                tags: ["Ethereum", "Smart Contracts", "Whitepaper"],
                impact: "Revolutionary - Introduced programmable blockchain concept",
                ecosystem: "Ethereum"
            }
        ]
    },
    {
        year: 2014,
        events: [
            {
                date: "February 2014",
                title: "Mt. Gox Collapse",
                description: "Mt. Gox files for bankruptcy after losing 850,000 BTC (worth ~$450M at the time) to hackers. This remains one of the largest crypto hacks in history.",
                category: "regulation",
                tags: ["Mt. Gox", "Hack", "Security"],
                impact: "Major setback for Bitcoin adoption and trust",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2015,
        events: [
            {
                date: "July 30, 2015",
                title: "Ethereum Mainnet Launch",
                description: "Ethereum launches its mainnet (Frontier), enabling developers to build and deploy smart contracts and decentralized applications for the first time.",
                category: "ethereum",
                tags: ["Ethereum", "Launch", "Smart Contracts"],
                impact: "Revolutionary - Enabled programmable blockchain applications",
                ecosystem: "Ethereum"
            },
            {
                date: "August 2015",
                title: "First Ethereum DApp",
                description: "Augur, a decentralized prediction market, becomes one of the first major DApps built on Ethereum.",
                category: "ethereum",
                tags: ["Ethereum", "DApp", "Prediction Market"],
                impact: "Demonstrated smart contract utility",
                ecosystem: "Ethereum"
            }
        ]
    },
    {
        year: 2016,
        events: [
            {
                date: "April 30, 2016",
                title: "The DAO Launches",
                description: "The DAO (Decentralized Autonomous Organization) raises $150M in the largest crowdfunding campaign in history, representing 14% of all Ether.",
                category: "ethereum",
                tags: ["DAO", "Ethereum", "Crowdfunding"],
                impact: "Proved concept of decentralized organizations",
                ecosystem: "Ethereum"
            },
            {
                date: "June 17, 2016",
                title: "The DAO Hack",
                description: "A hacker exploits a vulnerability in The DAO's code, draining 3.6M ETH (~$50M). This leads to a controversial hard fork of Ethereum.",
                category: "regulation",
                tags: ["DAO", "Hack", "Security"],
                impact: "Led to Ethereum/Ethereum Classic split",
                ecosystem: "Ethereum"
            },
            {
                date: "July 20, 2016",
                title: "Ethereum Hard Fork - ETH/ETC Split",
                description: "Ethereum executes a controversial hard fork to reverse The DAO hack, creating Ethereum (ETH) and Ethereum Classic (ETC).",
                category: "ethereum",
                tags: ["Ethereum", "Hard Fork", "Governance"],
                impact: "Raised questions about immutability and governance",
                ecosystem: "Ethereum"
            },
            {
                date: "July 9, 2016",
                title: "Second Bitcoin Halving",
                description: "Bitcoin's block reward reduces from 25 BTC to 12.5 BTC.",
                category: "bitcoin",
                tags: ["Bitcoin", "Halving"],
                impact: "Continued Bitcoin's deflationary trajectory",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2017,
        events: [
            {
                date: "March 2017",
                title: "Bitcoin ETF Rejected",
                description: "SEC rejects the Winklevoss Bitcoin ETF proposal, citing concerns about market manipulation and lack of regulation.",
                category: "regulation",
                tags: ["Bitcoin", "ETF", "SEC", "Regulation"],
                impact: "Delayed institutional adoption",
                ecosystem: "Bitcoin"
            },
            {
                date: "June 2017",
                title: "ICO Boom Begins",
                description: "Initial Coin Offerings (ICOs) explode in popularity, with projects raising billions. EOS raises $4B, the largest ICO ever.",
                category: "ethereum",
                tags: ["ICO", "Fundraising", "Ethereum"],
                impact: "New fundraising model, later led to regulatory scrutiny",
                ecosystem: "Multi-chain"
            },
            {
                date: "August 1, 2017",
                title: "Bitcoin Cash Fork",
                description: "Bitcoin undergoes a contentious hard fork, creating Bitcoin Cash (BCH) with larger block sizes to improve transaction throughput.",
                category: "bitcoin",
                tags: ["Bitcoin", "Fork", "Scaling"],
                impact: "Highlighted Bitcoin scaling debate",
                ecosystem: "Bitcoin"
            },
            {
                date: "November 2017",
                title: "CryptoKitties Launches",
                description: "CryptoKitties, a blockchain game for breeding digital cats, goes viral and congests the Ethereum network, demonstrating scalability challenges.",
                category: "nft",
                tags: ["NFT", "Gaming", "Ethereum"],
                impact: "First mainstream NFT application",
                ecosystem: "Ethereum"
            },
            {
                date: "December 2017",
                title: "Bitcoin Reaches $20,000",
                description: "Bitcoin reaches an all-time high of nearly $20,000, marking the peak of the 2017 bull run before a major correction.",
                category: "bitcoin",
                tags: ["Bitcoin", "Price", "Bull Run"],
                impact: "Brought mainstream attention to crypto",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2018,
        events: [
            {
                date: "January 2018",
                title: "Crypto Winter Begins",
                description: "Cryptocurrency markets enter a prolonged bear market, with Bitcoin falling from $20,000 to $3,200 by December 2018.",
                category: "regulation",
                tags: ["Bear Market", "Price"],
                impact: "Market consolidation and project failures",
                ecosystem: "Multi-chain"
            },
            {
                date: "September 2018",
                title: "ERC-721 Standard Finalized",
                description: "The ERC-721 token standard for non-fungible tokens (NFTs) is finalized, establishing the foundation for the NFT ecosystem.",
                category: "nft",
                tags: ["NFT", "Ethereum", "Standard"],
                impact: "Standardized NFT creation and trading",
                ecosystem: "Ethereum"
            },
            {
                date: "November 2018",
                title: "Bitcoin Cash Hash War",
                description: "Bitcoin Cash splits into Bitcoin Cash ABC and Bitcoin SV following a contentious hard fork dispute.",
                category: "bitcoin",
                tags: ["Bitcoin Cash", "Fork", "Governance"],
                impact: "Further fragmented Bitcoin community",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2019,
        events: [
            {
                date: "February 2019",
                title: "Lightning Network Growth",
                description: "Bitcoin's Lightning Network surpasses 6,000 nodes and $2M in capacity, offering a Layer 2 scaling solution for instant, low-fee transactions.",
                category: "layer2",
                tags: ["Bitcoin", "Lightning Network", "Layer 2", "Scaling"],
                impact: "Demonstrated viable Layer 2 scaling approach",
                ecosystem: "Bitcoin"
            },
            {
                date: "June 2019",
                title: "Facebook Announces Libra",
                description: "Facebook announces Libra (later renamed Diem), a stablecoin project, triggering regulatory concerns worldwide.",
                category: "regulation",
                tags: ["Stablecoin", "Regulation", "Facebook"],
                impact: "Increased regulatory scrutiny on stablecoins",
                ecosystem: "Multi-chain"
            },
            {
                date: "September 2019",
                title: "Bakkt Launches Bitcoin Futures",
                description: "Bakkt, backed by ICE (owner of NYSE), launches physically-settled Bitcoin futures, bringing institutional infrastructure to crypto.",
                category: "bitcoin",
                tags: ["Bitcoin", "Futures", "Institutional"],
                impact: "Legitimized Bitcoin for institutional investors",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2020,
        events: [
            {
                date: "March 12, 2020",
                title: "Black Thursday Crash",
                description: "COVID-19 panic causes Bitcoin to crash 50% in one day. Ethereum network congestion causes MakerDAO liquidations, nearly breaking the protocol.",
                category: "defi",
                tags: ["DeFi", "MakerDAO", "Market Crash"],
                impact: "Stress-tested DeFi protocols",
                ecosystem: "Ethereum"
            },
            {
                date: "May 11, 2020",
                title: "Third Bitcoin Halving",
                description: "Bitcoin's block reward reduces from 12.5 BTC to 6.25 BTC, further reducing inflation.",
                category: "bitcoin",
                tags: ["Bitcoin", "Halving"],
                impact: "Preceded 2021 bull run",
                ecosystem: "Bitcoin"
            },
            {
                date: "June 2020",
                title: "Compound Launches COMP Token",
                description: "Compound Finance launches its governance token COMP, pioneering 'yield farming' and sparking the DeFi Summer.",
                category: "defi",
                tags: ["DeFi", "Yield Farming", "Governance"],
                impact: "Revolutionary - Started DeFi Summer and liquidity mining trend",
                ecosystem: "Ethereum"
            },
            {
                date: "September 2020",
                title: "Uniswap Launches UNI Token",
                description: "Uniswap, the leading decentralized exchange, launches UNI governance token with a retroactive airdrop worth thousands per user.",
                category: "defi",
                tags: ["DeFi", "DEX", "Airdrop"],
                impact: "Popularized airdrops and DEX governance",
                ecosystem: "Ethereum"
            },
            {
                date: "December 1, 2020",
                title: "Ethereum 2.0 Beacon Chain Launches",
                description: "Ethereum begins its transition to Proof of Stake with the launch of the Beacon Chain, requiring 32 ETH to become a validator.",
                category: "ethereum",
                tags: ["Ethereum", "Proof of Stake", "ETH 2.0"],
                impact: "Started Ethereum's transition to PoS",
                ecosystem: "Ethereum"
            }
        ]
    },
    {
        year: 2021,
        events: [
            {
                date: "January 2021",
                title: "Bitcoin Surpasses $40,000",
                description: "Bitcoin breaks $40,000 driven by institutional adoption from companies like MicroStrategy and Tesla.",
                category: "bitcoin",
                tags: ["Bitcoin", "Price", "Institutional"],
                impact: "Validated Bitcoin as institutional asset",
                ecosystem: "Bitcoin"
            },
            {
                date: "February 8, 2021",
                title: "Tesla Buys $1.5B in Bitcoin",
                description: "Tesla announces it purchased $1.5B worth of Bitcoin and will accept it as payment, causing Bitcoin to surge.",
                category: "bitcoin",
                tags: ["Bitcoin", "Tesla", "Corporate Adoption"],
                impact: "Major corporate endorsement",
                ecosystem: "Bitcoin"
            },
            {
                date: "March 2021",
                title: "Beeple NFT Sells for $69M",
                description: "Digital artist Beeple's NFT 'Everydays: The First 5000 Days' sells at Christie's for $69M, bringing NFTs to mainstream attention.",
                category: "nft",
                tags: ["NFT", "Art", "Mainstream"],
                impact: "Revolutionary - Legitimized NFTs as art form",
                ecosystem: "Ethereum"
            },
            {
                date: "April 14, 2021",
                title: "Coinbase Direct Listing",
                description: "Coinbase goes public via direct listing on NASDAQ with a $86B valuation, the largest crypto company to go public.",
                category: "regulation",
                tags: ["Coinbase", "IPO", "Exchange"],
                impact: "Major milestone for crypto legitimacy",
                ecosystem: "Multi-chain"
            },
            {
                date: "May 2021",
                title: "Ethereum Gas Fees Peak",
                description: "Ethereum gas fees reach all-time highs, with simple transactions costing $50-100, accelerating demand for Layer 2 solutions.",
                category: "ethereum",
                tags: ["Ethereum", "Gas Fees", "Scalability"],
                impact: "Drove Layer 2 adoption",
                ecosystem: "Ethereum"
            },
            {
                date: "May 19, 2021",
                title: "China Bans Crypto Mining",
                description: "China announces a comprehensive ban on cryptocurrency mining, causing Bitcoin hashrate to drop 50% and miners to relocate globally.",
                category: "regulation",
                tags: ["Bitcoin", "Mining", "China", "Regulation"],
                impact: "Decentralized Bitcoin mining globally",
                ecosystem: "Bitcoin"
            },
            {
                date: "August 5, 2021",
                title: "Ethereum EIP-1559 Activation",
                description: "Ethereum implements EIP-1559, introducing fee burning mechanism and making ETH deflationary. This fundamentally changes Ethereum's economics.",
                category: "ethereum",
                tags: ["Ethereum", "EIP-1559", "Tokenomics"],
                impact: "Made ETH deflationary asset",
                ecosystem: "Ethereum"
            },
            {
                date: "September 7, 2021",
                title: "El Salvador Adopts Bitcoin",
                description: "El Salvador becomes the first country to adopt Bitcoin as legal tender, a historic moment for cryptocurrency adoption.",
                category: "bitcoin",
                tags: ["Bitcoin", "Legal Tender", "Adoption"],
                impact: "Revolutionary - First nation-state Bitcoin adoption",
                ecosystem: "Bitcoin"
            },
            {
                date: "October 2021",
                title: "First Bitcoin ETF Approved",
                description: "ProShares Bitcoin Strategy ETF (BITO) launches in the US, the first Bitcoin futures ETF, reaching $1B in assets in two days.",
                category: "bitcoin",
                tags: ["Bitcoin", "ETF", "Institutional"],
                impact: "Opened Bitcoin to traditional investors",
                ecosystem: "Bitcoin"
            },
            {
                date: "November 2021",
                title: "Bitcoin Reaches $69,000 ATH",
                description: "Bitcoin reaches all-time high of $69,000, while Ethereum hits $4,800. Total crypto market cap exceeds $3 trillion.",
                category: "bitcoin",
                tags: ["Bitcoin", "ATH", "Bull Run"],
                impact: "Peak of 2021 bull market",
                ecosystem: "Multi-chain"
            },
            {
                date: "November 2021",
                title: "Solana Ecosystem Explodes",
                description: "Solana (SOL) reaches $260, driven by NFT projects and DeFi growth. The ecosystem demonstrates high-speed, low-cost alternative to Ethereum.",
                category: "innovation",
                tags: ["Solana", "Layer 1", "Alternative"],
                impact: "Proved viability of alternative Layer 1s",
                ecosystem: "Solana"
            }
        ]
    },
    {
        year: 2022,
        events: [
            {
                date: "January 2022",
                title: "Crypto Market Correction Begins",
                description: "Cryptocurrency markets begin major correction as Federal Reserve signals interest rate hikes, Bitcoin falls from $69k to $30k.",
                category: "regulation",
                tags: ["Bear Market", "Macro"],
                impact: "Started 2022 bear market",
                ecosystem: "Multi-chain"
            },
            {
                date: "March 2022",
                title: "Axie Infinity Ronin Bridge Hack",
                description: "Hackers steal $625M from Axie Infinity's Ronin Bridge, the largest DeFi hack ever, exposing vulnerabilities in cross-chain bridges.",
                category: "regulation",
                tags: ["Hack", "Security", "Bridge"],
                impact: "Highlighted bridge security risks",
                ecosystem: "Ethereum"
            },
            {
                date: "May 2022",
                title: "Terra/LUNA Collapse",
                description: "Terra's algorithmic stablecoin UST loses its peg, causing LUNA to crash from $80 to $0.0001, wiping out $40B in value.",
                category: "regulation",
                tags: ["Stablecoin", "Collapse", "DeFi"],
                impact: "Catastrophic - Destroyed confidence in algorithmic stablecoins",
                ecosystem: "Terra"
            },
            {
                date: "June 2022",
                title: "Celsius Network Freezes Withdrawals",
                description: "Celsius Network, a major crypto lender with $20B in assets, freezes withdrawals, later filing for bankruptcy.",
                category: "regulation",
                tags: ["CeFi", "Bankruptcy", "Lending"],
                impact: "Exposed risks in centralized lending",
                ecosystem: "Multi-chain"
            },
            {
                date: "July 2022",
                title: "Three Arrows Capital Collapse",
                description: "Crypto hedge fund Three Arrows Capital (3AC) files for bankruptcy with $3B in liabilities, triggering contagion across the industry.",
                category: "regulation",
                tags: ["Hedge Fund", "Bankruptcy", "Contagion"],
                impact: "Triggered industry-wide contagion",
                ecosystem: "Multi-chain"
            },
            {
                date: "September 15, 2022",
                title: "Ethereum Merge - The Merge",
                description: "Ethereum successfully transitions from Proof of Work to Proof of Stake, reducing energy consumption by 99.95%. One of the most significant technical achievements in crypto history.",
                category: "ethereum",
                tags: ["Ethereum", "The Merge", "Proof of Stake"],
                impact: "Revolutionary - Completed Ethereum's PoS transition",
                ecosystem: "Ethereum"
            },
            {
                date: "November 2022",
                title: "FTX Collapse",
                description: "FTX, the world's second-largest crypto exchange, files for bankruptcy after revelations of misused customer funds. CEO Sam Bankman-Fried arrested.",
                category: "regulation",
                tags: ["FTX", "Bankruptcy", "Fraud"],
                impact: "Catastrophic - Biggest crypto scandal, triggered regulatory crackdown",
                ecosystem: "Multi-chain"
            },
            {
                date: "November 2022",
                title: "Bitcoin Falls to $15,500",
                description: "Following FTX collapse, Bitcoin falls to $15,500, down 77% from all-time high, marking the bottom of the bear market.",
                category: "bitcoin",
                tags: ["Bitcoin", "Bear Market", "Price"],
                impact: "Bear market bottom",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2023,
        events: [
            {
                date: "January 2023",
                title: "Bitcoin Ordinals Launch",
                description: "Bitcoin Ordinals protocol launches, enabling NFT-like inscriptions directly on Bitcoin blockchain, sparking debate about Bitcoin's purpose.",
                category: "nft",
                tags: ["Bitcoin", "NFT", "Ordinals"],
                impact: "Brought NFTs to Bitcoin",
                ecosystem: "Bitcoin"
            },
            {
                date: "March 2023",
                title: "Silicon Valley Bank Collapse",
                description: "SVB collapse causes USDC to briefly depeg as Circle had $3.3B stuck in SVB. Highlights systemic risks in stablecoin backing.",
                category: "regulation",
                tags: ["Stablecoin", "Banking", "USDC"],
                impact: "Exposed stablecoin banking risks",
                ecosystem: "Multi-chain"
            },
            {
                date: "April 2023",
                title: "Bitcoin Surges Past $30,000",
                description: "Bitcoin breaks $30,000 for the first time since June 2022, signaling potential end of bear market.",
                category: "bitcoin",
                tags: ["Bitcoin", "Recovery", "Price"],
                impact: "Bear market recovery begins",
                ecosystem: "Bitcoin"
            },
            {
                date: "June 2023",
                title: "BlackRock Files for Bitcoin ETF",
                description: "BlackRock, the world's largest asset manager, files for a spot Bitcoin ETF, triggering a wave of similar applications from major institutions.",
                category: "bitcoin",
                tags: ["Bitcoin", "ETF", "BlackRock", "Institutional"],
                impact: "Major institutional validation",
                ecosystem: "Bitcoin"
            },
            {
                date: "August 2023",
                title: "Base Chain Launches",
                description: "Coinbase launches Base, an Ethereum Layer 2 built on Optimism's OP Stack, bringing millions of users to L2.",
                category: "layer2",
                tags: ["Layer 2", "Base", "Ethereum"],
                impact: "Accelerated L2 adoption",
                ecosystem: "Ethereum"
            },
            {
                date: "September 2023",
                title: "Friend.tech Social Finance Boom",
                description: "Friend.tech, a social finance app on Base, goes viral, generating $50M+ in fees and pioneering SocialFi on Layer 2.",
                category: "innovation",
                tags: ["SocialFi", "Layer 2", "Base"],
                impact: "Demonstrated L2 scalability for consumer apps",
                ecosystem: "Ethereum"
            },
            {
                date: "November 2023",
                title: "Sam Bankman-Fried Convicted",
                description: "FTX founder Sam Bankman-Fried found guilty on all seven counts of fraud and conspiracy, facing up to 115 years in prison.",
                category: "regulation",
                tags: ["FTX", "Legal", "Fraud"],
                impact: "Accountability for crypto fraud",
                ecosystem: "Multi-chain"
            },
            {
                date: "December 2023",
                title: "Bitcoin Surpasses $44,000",
                description: "Bitcoin rallies to $44,000 on spot ETF optimism, up 160% for the year, best annual performance since 2020.",
                category: "bitcoin",
                tags: ["Bitcoin", "Bull Run", "Price"],
                impact: "Confirmed bull market return",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2024,
        events: [
            {
                date: "January 10, 2024",
                title: "Spot Bitcoin ETFs Approved",
                description: "SEC approves 11 spot Bitcoin ETFs including BlackRock's iShares Bitcoin Trust (IBIT), marking a historic moment for crypto adoption.",
                category: "bitcoin",
                tags: ["Bitcoin", "ETF", "SEC", "Institutional"],
                impact: "Revolutionary - Opened Bitcoin to mainstream investors",
                ecosystem: "Bitcoin"
            },
            {
                date: "March 2024",
                title: "Bitcoin Reaches New ATH $73,750",
                description: "Bitcoin surpasses previous all-time high, reaching $73,750 driven by ETF inflows and halving anticipation.",
                category: "bitcoin",
                tags: ["Bitcoin", "ATH", "ETF"],
                impact: "New price discovery phase",
                ecosystem: "Bitcoin"
            },
            {
                date: "April 19, 2024",
                title: "Fourth Bitcoin Halving",
                description: "Bitcoin's block reward reduces from 6.25 BTC to 3.125 BTC. First halving to occur after spot ETF approval.",
                category: "bitcoin",
                tags: ["Bitcoin", "Halving"],
                impact: "Reduced Bitcoin inflation to ~0.85% annually",
                ecosystem: "Bitcoin"
            },
            {
                date: "May 2024",
                title: "Ethereum ETFs Approved",
                description: "SEC approves spot Ethereum ETFs from BlackRock, Fidelity, and others, following Bitcoin ETF success.",
                category: "ethereum",
                tags: ["Ethereum", "ETF", "Institutional"],
                impact: "Validated Ethereum as institutional asset",
                ecosystem: "Ethereum"
            },
            {
                date: "June 2024",
                title: "Solana ETF Applications Filed",
                description: "Multiple asset managers file for Solana ETFs, signaling institutional interest in alternative Layer 1 blockchains.",
                category: "innovation",
                tags: ["Solana", "ETF", "Institutional"],
                impact: "Expanded institutional crypto beyond BTC/ETH",
                ecosystem: "Solana"
            },
            {
                date: "July 2024",
                title: "Ethereum Pectra Upgrade Announced",
                description: "Ethereum announces Pectra upgrade combining Prague and Electra, focusing on account abstraction and validator improvements.",
                category: "ethereum",
                tags: ["Ethereum", "Upgrade", "Account Abstraction"],
                impact: "Improved user experience and validator efficiency",
                ecosystem: "Ethereum"
            },
            {
                date: "September 2024",
                title: "Arbitrum Surpasses Ethereum in Daily Transactions",
                description: "Arbitrum, an Ethereum Layer 2, processes more daily transactions than Ethereum mainnet, showcasing L2 scaling success.",
                category: "layer2",
                tags: ["Arbitrum", "Layer 2", "Scaling"],
                impact: "Proved L2 scaling thesis",
                ecosystem: "Ethereum"
            },
            {
                date: "October 2024",
                title: "Bitcoin Surpasses $70,000",
                description: "Bitcoin rallies past $70,000 driven by ETF inflows, US election optimism, and institutional adoption.",
                category: "bitcoin",
                tags: ["Bitcoin", "Price", "Institutional"],
                impact: "Continued institutional accumulation",
                ecosystem: "Bitcoin"
            },
            {
                date: "November 2024",
                title: "MicroStrategy Becomes Largest Corporate Bitcoin Holder",
                description: "MicroStrategy's Bitcoin holdings exceed 400,000 BTC (worth $28B+), making it the largest corporate holder.",
                category: "bitcoin",
                tags: ["Bitcoin", "MicroStrategy", "Corporate"],
                impact: "Corporate treasury strategy validation",
                ecosystem: "Bitcoin"
            }
        ]
    },
    {
        year: 2025,
        events: [
            {
                date: "January 2025",
                title: "Bitcoin Reaches $100,000",
                description: "Bitcoin crosses the psychological $100,000 milestone for the first time, driven by sustained ETF inflows and institutional adoption.",
                category: "bitcoin",
                tags: ["Bitcoin", "Price", "Milestone"],
                impact: "Major psychological milestone achieved",
                ecosystem: "Bitcoin"
            },
            {
                date: "February 2025",
                title: "Ethereum Layer 2s Process 10M+ Daily Transactions",
                description: "Combined Ethereum Layer 2 networks (Arbitrum, Optimism, Base, zkSync) process over 10M daily transactions, 5x Ethereum mainnet.",
                category: "layer2",
                tags: ["Layer 2", "Scaling", "Ethereum"],
                impact: "L2s become primary Ethereum scaling solution",
                ecosystem: "Ethereum"
            },
            {
                date: "March 2025",
                title: "EU MiCA Regulation Takes Effect",
                description: "EU's Markets in Crypto-Assets (MiCA) regulation fully implemented, creating comprehensive crypto regulatory framework.",
                category: "regulation",
                tags: ["Regulation", "EU", "MiCA"],
                impact: "First major comprehensive crypto regulation",
                ecosystem: "Multi-chain"
            },
            {
                date: "May 2025",
                title: "Real World Assets (RWA) Surpass $50B",
                description: "Tokenized real-world assets including treasuries, real estate, and commodities exceed $50B on-chain value.",
                category: "defi",
                tags: ["RWA", "Tokenization", "DeFi"],
                impact: "Bridged traditional finance with DeFi",
                ecosystem: "Multi-chain"
            },
            {
                date: "July 2025",
                title: "Bitcoin Lightning Network Reaches 100,000 Nodes",
                description: "Bitcoin's Lightning Network surpasses 100,000 nodes with $1B+ in capacity, enabling instant micropayments globally.",
                category: "layer2",
                tags: ["Bitcoin", "Lightning Network", "Payments"],
                impact: "Scaled Bitcoin for everyday payments",
                ecosystem: "Bitcoin"
            },
            {
                date: "September 2025",
                title: "Ethereum Dencun Upgrade Success",
                description: "Ethereum's Dencun upgrade reduces Layer 2 costs by 90% through proto-danksharding (EIP-4844), making L2s extremely affordable.",
                category: "ethereum",
                tags: ["Ethereum", "Upgrade", "Scaling"],
                impact: "Revolutionary - Made L2 transactions pennies",
                ecosystem: "Ethereum"
            },
            {
                date: "November 2025",
                title: "Stablecoin Market Cap Exceeds $300B",
                description: "Total stablecoin market capitalization surpasses $300B, with USDT, USDC, and others becoming primary medium of exchange.",
                category: "defi",
                tags: ["Stablecoin", "Adoption", "Payments"],
                impact: "Stablecoins become mainstream payment method",
                ecosystem: "Multi-chain"
            }
        ]
    },
    {
        year: 2026,
        events: [
            {
                date: "January 2026",
                title: "Crypto Market Cap Exceeds $5 Trillion",
                description: "Total cryptocurrency market capitalization surpasses $5 trillion, with Bitcoin dominance at 45% and Ethereum at 20%.",
                category: "bitcoin",
                tags: ["Market Cap", "Milestone", "Adoption"],
                impact: "Crypto becomes major asset class",
                ecosystem: "Multi-chain"
            }
        ]
    }
];
