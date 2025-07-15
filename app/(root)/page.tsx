import React from 'react'
import { HeaderBox } from '@/components/HeaderBox'
import { TotalBalanceBox } from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/RightSideBar';
import BankCard from '@/components/BankCard';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  
   return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1000.12}

          />

        </header>

        RECENT TRASACTIONS
      </div>

      <RightSideBar 
      user = {loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 1233.50},{currentBalance:500}]}/>
    </section>    
  )
}

export default Home

