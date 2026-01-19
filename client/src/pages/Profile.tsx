import { ArrowRightIcon } from '@heroicons/react/16/solid'
import MainHeader from './../components/MainHeader'

export default function Profile() {
  return (
    <div className='relative w-full min-h-screen overflow-hidden bg-black/90 text-white'>

      <MainHeader page={"Профиль"}/>

        <div className='mx-auto max-w-6xl px-4 py-6 mt-28'>

          <div className='grid gap-6 md:grid-cols-[320px_1fr]'>
          
            <aside className='space-y-4'>

              <div className='rounded-xl border border-white p-4'>

                {/* avatar */}
                <div className='h-24 w-24 rounded-full bg-gray-200'/>
                {/* avatar */}

                <div className='mt-3 h-5 w-40 rounded'>
                    <p className='text-white font-bold'>UserName: </p>
                </div>
                <div className='mt-2 h-4 w-56 rounded mb-2'>
                  <p className='text-yellow-400'>@username</p> 
                </div>

              </div>

              {/* Bio */}
              <div className='rounded-xl border border-white p-4'>
                <div className='h-5 w-28 rounded text-white'>
                  <p>Bio: </p>
                </div>
                  <div className='mt-3 space-y-2'>
                    <div className='h-4 w-40 rounded flex items-center'>
                      Frontend <ArrowRightIcon className='w-4 h-4 ml-0.5'/>
                      </div>
                    <div className='h-4 w-36 rounded'>Junior-Dev</div>
                    <div className='h-4 w-32 rounded'>at Tech</div>
                  </div>
              </div>

            {/* Stats */}
              <div className='rounded-xl border border-white p-4'>
                <div className='h-5 w-28 rounded text-white font-bold'>
                  <p>Statistics</p>
                </div>
                  <div className='mt-3 space-y-2'>
                    <div className='h-4 w-40 rounded'>
                      <p>🎯 Active</p>
                    </div>
                    <div className='h-4 w-36 rounded'>
                      <p>✅ Done</p>
                    </div>
                    <div className='h-4 w-32 rounded'>
                      <p>🔥 Streak</p>
                    </div>
                  </div>
              </div>

            </aside>



            <main className='space-y-6'>
              <section className='rounded-xl border p-4'>
                <div className='h-5 w-48 rounded bg-gray-200'></div>
                <div className='mt-4 h-28 rounded bg-gray-100'></div>
              </section>

              <section className='rounded-xl border p-4'>

              </section>

            </main>
            
          </div>
        </div>
    </div>
  )
}
