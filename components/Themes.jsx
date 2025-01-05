import { ChevronRight, PhoneCall, User } from 'lucide-react'
import React from 'react'

const Themes = () => {
  return (
    <section className='min-w-full h-screen flex items-center justify-center flex-col'>
        <div className='themebox'>
            <h2 className='themeboxtitle'>THEMES</h2>
            <p className='flex'><ChevronRight/>AI-Driven Safety Solutions for Real-Time Assistance</p>
            <p className='flex'><ChevronRight/>Cybersecurity & Digital Safety for all</p>
            <p className='flex'><ChevronRight/>Assistance for Elderly & Physically Challenged Individuals</p>
            <p className='flex'><ChevronRight/>Child Safety & Protection</p>
            <p className='flex'><ChevronRight/>Community Empowerment & Public Safety</p>
        </div>
        <div className='themebox'>
            <h2 className='themeboxtitle tb2'>EVENT OVERVIEW</h2>
            <p>The Empower-tech, a Social Well-Being Hackathon aims to bring together innovators, technologists, and changemakers to develop solutions that prioritize social equality, justice, empowerment, and sustainable development. This Hackathon will focus on creating impactful, AI-driven safety solutions to address challenges across demographics while fostering community resilience and inclusivity.</p>
        </div>
        <div className='flex gap-2 flex-wrap'>
        <div className='themebox tb22'>
            <h2 className='themeboxtitle themeboxtitle2 tb2'>VENUE</h2>
            <p className='text-wrap text-center'>VIT Chennai (MG Auditorium)</p>
        </div>
            <div className='themebox tb22'>
                <h2 className='themeboxtitle themeboxtitle2 tb2'>Conducted by</h2>
                <p>ACM</p>
                <p>OSPC</p>
                <p>IEEE WIE</p>
            </div>
        </div>
        <div className='flex gap-2 flex-wrap items-center content-center'>
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

export default Themes