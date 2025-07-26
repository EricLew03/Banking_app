export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  TRANSPORTATION: {
    bg: "bg-[#E0F2FE]",
    circleBg: "bg-[#BAE6FD]",
    text: {
      main: "text-[#0369A1]",
      count: "text-[#0284C7]",
    },
    progress: {
      bg: "bg-[#E0F2FE]",
      indicator: "bg-[#0284C7]",
    },
    icon: "/icons/shopping-bag.svg",
  },
  FOOD_AND_DRINK: {
    bg: "bg-[#FFFAEB]",
    circleBg: "bg-[#FBBF24]",
    text: {
      main: "text-[#B45309]",
      count: "text-[#D97706]",
    },
    progress: {
      bg: "bg-[#FEF3C7]",
      indicator: "bg-[#D97706]",
    },
    icon: "/icons/shopping-bag.svg",
  },
  LOAN_PAYMENTS: {
    bg: "bg-[#FAE8FF]",
    circleBg: "bg-[#D946EF]",
    text: {
      main: "text-[#A21CAF]",
      count: "text-[#C026D3]",
    },
    progress: {
      bg: "bg-[#F5D0FE]",
      indicator: "bg-[#C026D3]",
    },
    icon: "/icons/shopping-bag.svg",
  },
  TRAVEL: {
    bg: "bg-[#EEF2FF]",
    circleBg: "bg-[#1E3A8A]",
    text: {
      main: "text-[#1E40AF]",
      count: "text-[#4338CA]",
    },
    progress: {
      bg: "bg-[#E0E7FF]",
      indicator: "bg-[#4338CA]",
    },
    icon: "/icons/shopping-bag.svg",
  },
  GENERAL_MERCHANDISE: {
    bg: "bg-[#F5F3FF]",
    circleBg: "bg-[#A78BFA]",
    text: {
      main: "text-[#6B21A8]",
      count: "text-[#7C3AED]",
    },
    progress: {
      bg: "bg-[#DDD6FE]",
      indicator: "bg-[#7C3AED]",
    },
    icon: "/icons/shopping-bag.svg",
  },
  INCOME: {
    bg: "bg-[#ECFDF5]",
    circleBg: "bg-[#6EE7B7]",
    text: {
      main: "text-[#047857]",
      count: "text-[#10B981]",
    },
    progress: {
      bg: "bg-[#D1FAE5]",
      indicator: "bg-[#10B981]",
    },
    icon: "/icons/shopping-bag.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};


export const transactionCategoryStyles = {
  TRANSPORTATION: {
    borderColor: "border-[#BAE6FD]",         // lighter blue
    backgroundColor: "bg-[#BAE6FD]",
    textColor: "text-[#0369A1]",
    chipBackgroundColor: "bg-[#E0F2FE]",
  },
  FOOD_AND_DRINK: {
    borderColor: "border-[#FBBF24]",
    backgroundColor: "bg-[#FBBF24]",
    textColor: "text-[#B45309]",
    chipBackgroundColor: "bg-[#FFFAEB]",
  },
  LOAN_PAYMENTS: {
    borderColor: "border-[#D946EF]",
    backgroundColor: "bg-[#D946EF]",
    textColor: "text-[#A21CAF]",
    chipBackgroundColor: "bg-[#FAE8FF]",
  },
  TRAVEL: {
    borderColor: "border-[#1E3A8A]",         // dark blue
    backgroundColor: "bg-[#1E3A8A]",
    textColor: "text-[#1E40AF]",
    chipBackgroundColor: "bg-[#EEF2FF]",
  },
  GENERAL_MERCHANDISE: {
    borderColor: "border-[#A78BFA]",
    backgroundColor: "bg-[#A78BFA]",
    textColor: "text-[#6B21A8]",
    chipBackgroundColor: "bg-[#F5F3FF]",
  },
  INCOME: {
    borderColor: "border-[#6EE7B7]",
    backgroundColor: "bg-[#6EE7B7]",
    textColor: "text-[#047857]",
    chipBackgroundColor: "bg-[#ECFDF5]",
  },

  // Keep as-is
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },

  // Fallback
  default: {
    borderColor: "border-blue-700",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};
