import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar'
export default function Layout({ children }) {
  return (
    <div className='flex flex-col '>
      <Navbar/>
     
      
      <main className='container mx-auto flex-1'>{children}</main>
    
    </div>
  );
}