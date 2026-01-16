import { Link } from "react-router-dom";

const issues = [
  "General Issues",
  "Validation",
  "Staking",
  "Fix Bugs",
  "Glitches",
  "Migration",
  "Claim Rewards",
  "Withdrawal Management",
  "IDO",
  "Blockchain Recovery",
  "Smart Contract Audits and Debugging",
  "Token Deployment and Correction",
  "DeFi Protocol Optimization",
  "Airdrops",
  "Claim Presale",
  "Token Bridge Solutions",
  "NFT (Non-Fungible Token) Solutions",
  "Discount Buy and Sell",
  "KYC Verification",
  "APR Activation",
  "Token Stake and Token Unstake",
  "Connect to DApp",
  "Transaction Delay",
  "Unable to Buy Coin/Token",
  "Token Bridge",
  "Swap Functionality Enhancement",
  "Buy & Sell Liquidity Issues",
  "Deposit and Withdrawal Management",
  "Slippage Mitigation",
  "Rectification",
  "High Gas Fees",
  "Slippage Error",
  "Transaction Error",
  "Locked Account",
  "Trading Wallet Issues",
  "Multi-Chain Support",
  "Token Burn",
  "Token Minting",
  "DAO Governance Setup",
  "Crypto Tax Reports",
  "Wallet Connection Issues",
  "Gas Fee Estimator",
  "dApp Integration Support",
  "Whitelist Management",
  "Token Vesting Schedules",
  "Private Sale Access",
  "Public Sale Configuration",
  "LP Token Management",
  "Smart Contract Upgrades",
  "Bridge Malfunction",
  "NFT Minting Issues",
  "Gasless Transactions",
  "DEX Integration",
  "CEX Listing Support",
  "Oracle Integration",
  "Multi-Sig Wallet Setup",
  "Cross-Chain Transactions",
  "Blockchain Sync Errors",
  "Airdrop Distribution Errors",
  "Wallet Draining Protection",
  "Cold Wallet Setup",
  "Gas Optimization for Contracts",
  "Flash Loan Protection",
  "Anti-Bot Measures",
  "Revoke Token Access",
  "Other Issues Not Listed",
];

const IssuesSection = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#050814] via-[#0a1b22] to-[#3f8f83] rounded-b-[3rem]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {issues.map((issue, index) => (
            <Link
              key={index}
              to="/wallet"
              className="
                px-6 py-3 rounded-full
                bg-white 
                text-sm font-medium text-black 
                border border-white/10
                hover:bg-[#8ee6d9]
                hover:text-black
                hover:border-transparent
                transition-all duration-300
              "
            >
              {issue}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IssuesSection;
