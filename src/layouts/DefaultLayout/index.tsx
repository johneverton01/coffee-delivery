import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className='md:w-screen max-w-[1120px] mx-auto px-4'>
      <Header/>
      <Outlet/>
    </div>
  )
}