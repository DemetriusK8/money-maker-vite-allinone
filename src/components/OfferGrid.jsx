import React from 'react'

export default function OfferGrid({title, items}){
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx)=>(
          <div key={idx} className="bg-white rounded-xl p-5 shadow">
            <h3 className="font-semibold text-lg">{it.title}</h3>
            <p className="text-sm text-gray-600 my-2">{it.desc}</p>
            <a href={it.url} target="_blank" rel="noreferrer" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">Visit</a>
          </div>
        ))}
      </div>
    </section>
  )
}
