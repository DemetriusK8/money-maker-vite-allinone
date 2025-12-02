import React from 'react'
import AdSensePanel from '../components/AdSensePanel'

export default function Home(){
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Start Earning Today</h1>
      <p className="text-gray-600 mb-6">Use affiliate links, referrals, and AdSense to monetize traffic. This Vite + Tailwind starter is optimized for fast builds and deployment on Vercel.</p>
      <AdSensePanel slot="1234567890" />
    </div>
  )
}
