import React from 'react'

export const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            {/* DoughnutChart */}
        </div>
        
        <div className="bg-red-500 text-white p-4 text-xl">
  Tailwind test
</div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts : {totalBanks}
            </h2>
        </div>
    </section>
  )
}
