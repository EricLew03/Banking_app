import React from 'react'
import { HeaderBox } from '@/components/HeaderBox'
import { TotalBalanceBox } from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/RightSideBar';
import BankCard from '@/components/BankCard';

const Home = () => {
  const loggedIn = {firstName: "Eric", lastName :"Lew", email: "ericlew35@gmail.com"};

   return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
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

