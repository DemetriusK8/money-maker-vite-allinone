import React from 'react'
import OfferGrid from '../components/OfferGrid'
import AdSensePanel from '../components/AdSensePanel'

const items = [
  { title: 'TikTok Viral Products', desc: 'Promote viral finds with affiliate links', url: 'https://amazon.com' },
  { title: 'Etsy Trending', desc: 'Handmade & unique product referrals', url: 'https://etsy.com' }
]

export default function Trending(){ return (<><OfferGrid title='Trending Now' items={items}/><AdSensePanel slot='1234567892'/></>) }
