import React from 'react'

export default function User() {
  return (
    <div className='flex items-center gap-2 pl-4 pr-2 py-2'>
      <img src="/general/noAvatar.png" alt="noAvatar" className='w-6 h-6'/>
      <span className='text-sm'>Username</span>
    </div>
  )
}
