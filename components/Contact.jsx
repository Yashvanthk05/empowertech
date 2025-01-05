import React from 'react'

const Contact = () => {
  return (
    <section>
        <h2 className='themebox'>CONTACT</h2>
        <div className='flex gap-2 flex-col justify-center'>
            <div className='themebox tb22'>
                <h2 className='themeboxtitle themeboxtitle2 tb2'>STUDENT COORDINATORS</h2>
                <p className='flex'>SRUTHI PRIYA - <PhoneCall/>720021631</p>
                <p className='flex'>JANAA HARINI S - <PhoneCall/> 6364612777</p>
                <p className='flex'>BHARATHI - <PhoneCall/> 7358218079</p>
            </div>
            <div className='themebox tb22'>
                <h2 className='themeboxtitle themeboxtitle2 tb2'>FACULTY COORDINATORS</h2>
                <p className='flex gap-2'><User/> Dr.U.Srinivasa Rao</p>
                <p className='flex gap-2'><User/> Dr.Jayaram</p>
                <p className='flex gap-2'><User/> Dr.Vydeki</p>
                <p className='flex gap-2'><User/> Dr.Suganya R</p>
            </div>
        </div>
    </section>
  )
}

export default Contact