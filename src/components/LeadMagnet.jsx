// src/components/LeadMagnet.jsx
import React, { useState } from 'react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔒 For now, just show a success message.
    // When you connect Mailchimp/ConvertKit, replace this with their form action.
    setStatus('Thanks! Check your inbox for your copy.');
    setEmail('');
  };

  return (
    <section className="bg-indigo-50 border-t border-b border-indigo-100 py-10 mt-10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Free Guide: 10 Ways to Make Your First $100 Online
        </h2>
        <p className="text-gray-600 mb-6">
          Drop your email and I&apos;ll send you a simple, beginner-friendly guide with
          hustles you can start this week (including the tools on this site).
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your best email"
            className="px-4 py-3 rounded-lg border border-gray-300 flex-1 min-w-0 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Get the Free Guide
          </button>
        </form>

        {status && (
          <p className="mt-3 text-sm text-emerald-600 font-medium">
            {status}
          </p>
        )}

        <p className="mt-3 text-xs text-gray-400">
          No spam, ever. Just real money-making ideas and deal updates.
        </p>
      </div>
    </section>
  );
}
