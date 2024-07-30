import React from 'react'
import AcademyCard from './academyCard'

const UpcomingAcademies = ()=>{

    const data = [
        {
            topic:"Glinde",
            date:"2024-09-23",
            language:"Deutsch",
            location:"21509 Glinde(DE)"
        },
        {
            topic:"Glinde",
            date:"2024-09-23",
            language:"Deutsch",
            location:"21509 Glinde(DE)"
        },
        {
            topic:"Glinde",
            date:"2024-09-23",
            language:"Deutsch",
            location:"21509 Glinde(DE)"
        },
        {
            topic:"Glinde",
            date:"2024-09-23",
            language:"Deutsch",
            location:"21509 Glinde(DE)"
        },
         {
            topic:"Glinde",
            date:"2024-09-23",
            language:"Deutsch",
            location:"21509 Glinde(DE)"
        },
        {
            topic:"Glinde",
            date:"2024-09-23",
            language:"Deutsch",
            location:"21509 Glinde(DE)"
        },
         {
            topic:"Glinde",
            date:"2024-09-23",
            language:"Deutsch",
            location:"21509 Glinde(DE)"
        },
        {
            topic:"Glinde",
            date:"2024-09-23",
            language:"Deutsch",
            location:"21509 Glinde(DE)"
        },
         {
            topic:"Glinde",
            date:"2024-09-23",
            language:"Deutsch",
            location:"21509 Glinde(DE)"
        },
        {
            topic:"Glinde",
            date:"2024-09-23",
            language:"Deutsch",
            location:"21509 Glinde(DE)"
        },

    ]
    return <div className='text-gray-800'>
        <h2 className='text-4xl font-bold text-center py-5'>Upcoming Academies</h2>
        <p className='text-xl  text-center py-5'>Your participation is free! Anyone aged 8-14 years is invited.</p>
        <div className='flex flex-wrap justify-center'>
            {
                data.map((item)=>{
                    return <AcademyCard title={item.topic} date={item.date} location={item.location} language={item.language} key={item.topic} />
                })
            }
          
        </div>
      </div>
}

export default UpcomingAcademies;