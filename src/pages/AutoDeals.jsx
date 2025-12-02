import React, { useEffect, useState } from 'react'
import OfferGrid from '../components/OfferGrid'
import AdSensePanel from '../components/AdSensePanel'
import axios from 'axios'

export default function AutoDeals(){
  const [deals, setDeals] = useState([])

  useEffect(()=>{
    const fetchDeals = async ()=>{
      try {
        // This is a mock endpoint. Replace with your real affiliate feed later.
        const res = await axios.get('https://api.publicapis.org/entries') // public api as placeholder
        // transform into offers
        const sample = (res.data.entries || []).slice(0,6).map((e,i)=>({ title: e.API || ('Offer '+i), desc: e.Description, url: e.Link || 'https://example.com' }))
        setDeals(sample)
      } catch(e){ console.warn('fetch deals error', e) }
    }
    fetchDeals()
    const id = setInterval(fetchDeals, 1000*60*15) // 15 minutes
    return ()=>clearInterval(id)
  },[])

  return (
    <div>
      <OfferGrid title='Auto-Updating Affiliate Deals' items={deals} />
      <AdSensePanel slot='1234567894' />
    </div>
  )
}
