'use client';
import React from 'react';
import Image from 'next/image';
import ProfileCard from './components/ProfileCard';

export default function HomePage() {
  const classes = [
    {
      className: 'SI',
      students: [
        { name: 'Makima', imageUrl: '/images/1.jpg' },
        { name: 'Fubuki', imageUrl: '/images/2.jpg' },
        { name: 'Owen', imageUrl: '/images/3.jpg' },
        { name: 'Minu', imageUrl: '/images/4.jpg' },
        { name: 'Jay Jo', imageUrl: '/images/5.jpg' },
      ],
    },
    {
      className: 'KA',
      students: [
        { name: 'Shelly', imageUrl: '/images/6.jpg' },
        { name: 'Anna', imageUrl: '/images/7.jpg' },
        { name: 'Albert', imageUrl: '/images/8.jpg' },
        { name: 'Killua', imageUrl: '/images/9.jpg' },
        { name: 'Boys', imageUrl: '/images/10.jpg' },
      ],
    },
    {
      className: 'BD',
      students: [
        { name: 'Noona', imageUrl: '/images/11.jpg' },
        { name: 'Rose', imageUrl: '/images/12.jpg' },
        { name: 'Megumi', imageUrl: '/images/13.jpg' },
        { name: 'Fushiguro', imageUrl: '/images/14.jpg' },
        { name: 'Samsul', imageUrl: '/images/15.jpg' },
      ],
    },
  ];

  return (
    <div className="container">
      {classes.map((classData) => (
        <ProfileCard key={classData.className} className={classData.className} students={classData.students} />
      ))}
    </div>
  );  
}
