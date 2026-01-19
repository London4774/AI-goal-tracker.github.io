import MainHeader from '../../components/MainHeader'
import Footer from '../../components/Footer'
import ProfileSidebar from './ProfileSidebar';
import ProfileMain from './ProfileMain';

export default function Profile() {


  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-black/95 text-white'>

      <MainHeader page={"Профиль"}/>
        <div className='mx-auto max-w-6xl px-4 py-6 pt-28'>
          <div className='grid gap-6 md:grid-cols-[320px_1fr]'>
  {/* sidebar */}
            <ProfileSidebar/>
  {/* MAIN */}
            <ProfileMain/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
