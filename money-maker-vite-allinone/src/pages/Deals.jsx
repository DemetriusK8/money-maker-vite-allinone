import React from 'react'
import OfferGrid from '../components/OfferGrid'
import AdSensePanel from '../components/AdSensePanel'

const items = [
  { title: 'Amazon Daily Deals', desc: 'Add your affiliate links for Amazon products', url: 'https://amazon.com' },
  { title: 'Best Buy Deals', desc: 'Electronics referral offers', url: 'https://bestbuy.com' }
]

export default function Deals(){ return (<><OfferGrid title='Affiliate Deals' items={items}/><AdSensePanel slot='1234567891'/></>) }
