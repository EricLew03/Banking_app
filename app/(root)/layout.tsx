import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import MobileNav from '@/components/MobileNav';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect, useRouter } from 'next/navigation';



export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in')



  return (
  
      <main className  = 'flex h-screen w-full font-inter'>
        <Sidebar user = {loggedIn}/>

        <div className='flex size-full flex-col'>
          <div className='root-layout'>
            <Image src = 'icons/logo2.svg' width = {30} height = {30} alt = 'logo'/>
            <div>
              <MobileNav user = {loggedIn}/>
            </div>
          </div>
          {children}
        </div>
        
    
    </main>
   
  );
}
