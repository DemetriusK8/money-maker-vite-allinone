import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    const stored =
      JSON.parse(localStorage.getItem("moneyMakerEmails")) || [];

    stored.push({
      email,
      date: new Date().toISOString(),
    });

    localStorage.setItem("moneyMakerEmails", JSON.stringify(stored));
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-300 p-6 rounded-xl text-center">
        <h3 className="text-lg font-bold text-green-700">
          ✅ You’re in!
        </h3>
        <p className="text-sm text-green-600 mt-1">
          Check your inbox for money-making tips.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl text-center"
    >
      <h3 className="text-xl font-extrabold text-indigo-700 mb-2">
        💌 Get Daily Money-Making Offers
      </h3>

      <p className="text-sm text-indigo-600 mb-4">
        Free tips, trending offers & side hustles sent straight to you.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-64"
          required
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-semibold"
        >
          Get Access
        </button>
      </div>
    </form>
  );
}
