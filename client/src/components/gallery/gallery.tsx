import React from 'react'
import GalleryItem from '../galleryItem/galleryItem'

export default function Gallery() {

    const items = [
        {
            id: 1,
            media: '/pins/pin1.jpeg',
            width: 1260,
            height: 900,
        },
        {
            id: 2,
            media: '/pins/pin2.jpeg',
            width: 1260,
            height: 300,
        },
        {
            id: 3,
            media: '/pins/pin3.jpeg',
            width: 1260,
            height: 500,
        },
        {
            id: 4,
            media: '/pins/pin4.jpeg',
            width: 1260,
            height: 800,
        },
        {
            id: 5,
            media: '/pins/pin5.jpeg',
            width: 1260,
            height: 700,
        },
        {
            id: 6,
            media: '/pins/pin6.jpeg',
            width: 1260,
            height: 300,
        },
        {
            id: 7,
            media: '/pins/pin7.jpeg',
            width: 1260,
            height: 400,
        },
        {
            id: 8,
            media: '/pins/pin8.jpeg',
            width: 1260,
            height: 700,
        },
        {
            id: 9,
            media: '/pins/pin9.jpeg',
            width: 1260,
            height: 600,
        },
        {
            id: 10,
            media: '/pins/pin10.jpeg',
            width: 1260,
            height: 600,
        },
        {
            id: 11,
            media: '/pins/pin11.jpeg',
            width: 1260,
            height: 400,
        },
        {
            id: 12,
            media: '/pins/pin12.jpeg',
            width: 1260,
            height: 700,
        },
        {
            id: 13,
            media: '/pins/pin13.jpeg',
            width: 1260,
            height: 800,
        },
        {
            id: 14,
            media: '/pins/pin14.jpeg',
            width: 1260,
            height: 700,
        },
        {
            id: 15,
            media: '/pins/pin15.jpeg',
            width: 1260,
            height: 700,
        },
        {
            id: 16,
            media: '/pins/pin16.jpeg',
            width: 1260,
            height: 700,
        },
        {
            id: 17,
            media: '/pins/pin17.jpeg',
            width: 1260,
            height: 700,
        },
        {
            id: 18,
            media: '/pins/pin18.jpeg',
            width: 1260,
            height: 700,
        },
        {
            id: 19,
            media: '/pins/pin19.jpeg',
            width: 1260,
            height: 700,
        },
        {
            id: 20,
            media: '/pins/pin20.jpeg',
            width: 1260,
            height: 700,
        },
        {
            id: 21,
            media: '/pins/pin21.jpeg',
            width: 1260,
            height: 700,
        },
        
    ]

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5 px-4'>
      {items.map((item) => (
        <GalleryItem key={item.id} {...item} />
      ))}
    </div>
  )
}
