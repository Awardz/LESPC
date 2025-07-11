import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import '../index.css'; // Ensure you have the correct path to your CSS file

import Tree from '../assets/Tree.jpg';



function renderEventContent(eventInfo: any) {
  return (
    <div>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      {/* Only show image for tree-art events */}
      {eventInfo.event.classNames.includes('tree-art') && (
        <img src={Tree} alt="Tree Art Event" className="w-full mt-2" />
      )}
    </div>
  );
}

export function Events() {

    return (
        <>
        <div className='bg-green-600 text-white p-8 mt-16'>
            <h1 className='text-4xl font-bold'>Upcoming Events</h1>
            <p className='mt-4'>Join us for our upcoming events and activities in the garden!</p>
        </div>
        <div className='min-h-screen bg-white p-8'>
           <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    height={"auto"}
                    contentHeight={"auto"}
                    headerToolbar={{
                        left: 'prev',
                        center: 'title,today',
                        right: 'next'
                    }}
                    buttonText={{
                        today: 'Current Date',
                        month: 'Month',
                        week: 'Week',
                        day: 'Day'
                        
                    }}
                    eventContent={renderEventContent}
                    events={[
                        
                        { title: 'Community Clean-Up', date: '2023-10-12' },
                        { title: 'Community Clean-Up', start: '2025-07-12', end: '2025-07-17', url: 'https://google.com', 
                            className: 'community-cleanup'
                        },
                        { title: 'Harvest Festival', date: '2025-07-20', className: 'harvest-festival' },
                        { title: 'Garden Workshop', date: '2025-07-05', className: 'garden-workshop' },
                        { title: 'Garden Workshop', date: '2025-07-05', className: 'garden-workshop' },
                        { title: 'Garden Workshop', date: '2025-07-05', className: 'garden-workshop' },
                        { title: 'Tree Art', date: '2025-07-25', className: 'tree-art', image: Tree },
                        
                    ]}
                    
                    navLinks={true}
                    dragScroll={true}
                    dayMaxEvents={true}

                    eventDragStart={() => document.body.style.cursor = 'grabbing'}
                />

        </div>
        <div className='flex flex-col items-center justify-center  text-black p-8 mt-16'>
            <h1 className='text-4xl font-bold'>Upcoming Events</h1>
            <p className='mt-4'>Join us for our upcoming events and activities in the garden!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full px-4 ">
            <div className="bg-transparent rounded-xl border border-white/5 hover:border-green-400/50
                border-l-4 border-l-green-500 hover:border-l-green-300 shadow-lg hover:shadow-green-500/20
                hover:bg-white/5 transition-all duration-500 group overflow-hidden mb-8 transform scale-70 hover:scale-100"> 
                <div className='bg-green-600 text-white p-4 w-full border-b-2 border-green-500'> 
                    <h2 className="text-4xl text-white flex justify-between">
                        <span>Tree Art</span>
                        <span>07.25.2025</span>
                    </h2> 
                </div>
                <img src={Tree} alt="Tree" className="w-full object-cover h-auto"   /> 
                <p className="list-disc list-inside text-2xl font-normal text-black pl-5 pt-5 space-y-5">
                    Built a wealth management app backend with FastAPI, PostgreSQL, and Plaid API, enabling user registration and secure bank account
                    linking for real-time balance tracking.
                </p>
            </div>

                    <div className="bg-transparent rounded-xl border border-white/5 hover:border-green-400/50
                border-l-4 border-l-green-500 hover:border-l-green-300 shadow-lg hover:shadow-green-500/20
                hover:bg-white/5 transition-all duration-500 group overflow-hidden mb-8 transform scale-70 hover:scale-100"> 
                <div className='bg-green-600 text-white p-4 w-full border-b-2 border-green-500'> 
                    <h2 className="text-4xl text-white flex justify-between">
                        <span>Tree Art</span>
                        <span>07.25.2025</span>
                    </h2> 
                </div>
                <img src={Tree} alt="Tree" className="w-full object-cover h-auto"   /> 
                <p className="list-disc list-inside text-2xl font-normal text-black pl-5 pt-5 space-y-5">
                    Built a wealth management app backend with FastAPI, PostgreSQL, and Plaid API, enabling user registration and secure bank account
                    linking for real-time balance tracking.
                </p>
            </div>

                    <div className="bg-transparent rounded-xl border border-white/5 hover:border-green-400/50
                border-l-4 border-l-green-500 hover:border-l-green-300 shadow-lg hover:shadow-green-500/20
                hover:bg-white/5 transition-all duration-500 group overflow-hidden mb-8 transform scale-70 hover:scale-100"> 
                <div className='bg-green-600 text-white p-4 w-full border-b-2 border-green-500'> 
                    <h2 className="text-4xl text-white flex justify-between">
                        <span>Tree Art</span>
                        <span>07.25.2025</span>
                    </h2> 
                </div>
                <img src={Tree} alt="Tree" className="w-full object-cover h-auto"   /> 
                <p className="list-disc list-inside text-2xl font-normal text-black pl-5 pt-5 space-y-5">
                    Built a wealth management app backend with FastAPI, PostgreSQL, and Plaid API, enabling user registration and secure bank account
                    linking for real-time balance tracking.
                </p>
            </div>
                 


        </div>
        </>
    
    )
}
