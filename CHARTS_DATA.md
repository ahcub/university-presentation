# Charts Data Documentation

## Overview

The application includes four interactive charts that visualize key metrics in cryptocurrency adoption and market evolution from 2013 to 2026.

## Charts Included

### 1. Global Crypto Users (Millions)

**Description**: Estimated number of cryptocurrency users worldwide

**Data Points** (in millions):
- 2013: 1M - Early adopters, primarily Bitcoin enthusiasts
- 2014: 3M - Growing awareness after first major price movements
- 2015: 5M - Ethereum launch brings new users
- 2016: 8M - Increased mainstream media coverage
- 2017: 18M - ICO boom attracts massive new user base
- 2018: 35M - Despite bear market, user base continues growing
- 2019: 42M - Institutional interest begins
- 2020: 106M - COVID-19 drives digital asset adoption
- 2021: 221M - NFT boom and mainstream adoption
- 2022: 320M - Despite market crash, user base expands
- 2023: 425M - Recovery phase, emerging markets growth
- 2024: 480M - ETF approval drives new institutional users
- 2025: 530M - Layer 2 solutions enable mass adoption
- 2026: 580M - Projected continued growth

**Sources**: 
- Crypto.com Research
- Statista Global Crypto Adoption Reports
- Chainalysis Geography of Cryptocurrency Reports
- Industry estimates and projections

### 2. Daily Trading Volume (Billions USD)

**Description**: Average daily trading volume across all cryptocurrency exchanges

**Data Points** (in billions USD):
- 2013: $0.1B - Minimal trading, few exchanges
- 2014: $0.5B - Mt. Gox era, limited infrastructure
- 2015: $1.2B - More exchanges emerge
- 2016: $3.5B - Growing market participation
- 2017: $14B - ICO boom drives massive volume
- 2018: $8B - Bear market reduces activity
- 2019: $12B - Gradual recovery
- 2020: $35B - DeFi summer increases activity
- 2021: $120B - Peak bull market volume
- 2022: $65B - Post-crash normalization
- 2023: $45B - Bear market bottom
- 2024: $85B - ETF launch increases volume
- 2025: $150B - Institutional participation grows
- 2026: $200B - Projected mature market volume

**Sources**:
- CoinMarketCap
- CoinGecko
- The Block Research
- Exchange reported volumes

### 3. Total Market Capitalization (Billions USD)

**Description**: Combined market capitalization of all cryptocurrencies

**Data Points** (in billions USD):
- 2013: $1.5B - Bitcoin dominates small market
- 2014: $5B - First major growth cycle
- 2015: $4B - Post-Mt. Gox recovery
- 2016: $15B - Building momentum
- 2017: $600B - Historic bull run peak
- 2018: $130B - Crypto winter low
- 2019: $180B - Gradual recovery
- 2020: $780B - DeFi and institutional interest
- 2021: $2,900B - All-time high market cap
- 2022: $850B - Terra/LUNA and FTX impact
- 2023: $1,200B - Recovery begins
- 2024: $2,400B - ETF approval drives growth
- 2025: $3,500B - Continued institutional adoption
- 2026: $5,000B - Projected mature market size

**Sources**:
- CoinMarketCap Historical Data
- CoinGecko Market Data
- TradingView
- Industry analysis

### 4. Bitcoin Dominance (%)

**Description**: Bitcoin's share of total cryptocurrency market capitalization

**Data Points** (percentage):
- 2013: 95% - Bitcoin is essentially the only cryptocurrency
- 2014: 90% - Early altcoins emerge
- 2015: 85% - Ethereum announced, more alternatives
- 2016: 87% - Bitcoin still dominant
- 2017: 38% - ICO boom creates thousands of tokens
- 2018: 52% - Bear market, flight to Bitcoin
- 2019: 68% - Bitcoin recovers dominance
- 2020: 70% - Bitcoin leads institutional adoption
- 2021: 42% - Altcoin season, DeFi and NFTs boom
- 2022: 40% - Market crash affects all assets
- 2023: 48% - Bitcoin recovers relative strength
- 2024: 52% - ETF approval strengthens Bitcoin
- 2025: 48% - Ethereum ETF balances market
- 2026: 45% - Mature multi-chain ecosystem

**Sources**:
- CoinMarketCap Dominance Charts
- TradingView BTC.D Index
- Messari Research

## Data Methodology

### Estimation Approach

For historical data (2013-2023):
- Data compiled from multiple reputable sources
- Cross-referenced with industry reports
- Averaged where sources differ
- Conservative estimates used for user counts

For projected data (2024-2026):
- Based on current growth trends
- Adjusted for market maturity
- Conservative institutional adoption estimates
- Accounts for regulatory developments

### Data Accuracy

- **Historical Data (2013-2023)**: Based on actual reported metrics
- **Recent Data (2024-2025)**: Mix of actual data and near-term projections
- **Projected Data (2026)**: Conservative estimates based on trends

### Limitations

1. **User Counts**: Difficult to measure precisely due to:
   - Multiple wallets per user
   - Anonymous transactions
   - Varying definitions of "active user"

2. **Trading Volume**: May include:
   - Wash trading on some exchanges
   - Variations in reporting standards
   - DEX vs CEX volume differences

3. **Market Cap**: Subject to:
   - Price volatility
   - Circulating supply changes
   - New token launches

## Updating the Data

To update chart data, edit `charts.js`:

```javascript
const chartData = {
    users: {
        labels: ['2013', '2014', ...],
        data: [1, 3, ...],
        color: '#627eea'
    },
    // ... other charts
};
```

## Chart Features

- **Interactive**: Hover over data points to see exact values
- **Responsive**: Automatically adjusts to screen size
- **Smooth Curves**: Bezier curves for better visualization
- **Color Coded**: Each metric has a distinct color
- **Gradient Fill**: Visual appeal with gradient backgrounds

## Future Enhancements

Potential additions:
- More granular time periods (monthly/quarterly)
- Additional metrics (DeFi TVL, NFT sales, etc.)
- Comparison overlays
- Export chart data
- Toggle between linear/logarithmic scales
- Regional adoption breakdowns

---

**Note**: All data is for educational purposes. Cryptocurrency markets are highly volatile and past performance does not guarantee future results.

