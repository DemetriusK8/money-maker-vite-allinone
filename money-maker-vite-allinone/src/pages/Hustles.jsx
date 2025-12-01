import React from 'react'
import OfferGrid from '../components/OfferGrid'
import AdSensePanel from '../components/AdSensePanel'

const items = [
  { title: 'Fiverr Referrals', desc: 'Refer clients & freelancers', url: 'https://fiverr.com' },
  { title: 'UserTesting', desc: 'Get paid for testing websites/apps', url: 'https://usertesting.com' }
]

export default function Hustles(){ return (<><OfferGrid title='Side Hustles' items={items}/><AdSensePanel slot='1234567893'/></>) }
