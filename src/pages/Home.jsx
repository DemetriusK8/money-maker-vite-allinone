export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Start Earning Online Today
      </h1>

      <p style={{ marginTop: "12px", fontSize: "18px" }}>
        Discover proven offers and simple strategies to make your first money online.
      </p>

      <h2 style={{ marginTop: "40px", fontSize: "26px" }}>
        Free Guide: 10 Ways to Make Your First $100 Online
      </h2>

      <p style={{ marginTop: "10px" }}>
        Enter your email below and I’ll send you the guide instantly.
      </p>

      {/* MAILERLITE FORM WILL GO HERE */}
      <div
        id="ml-form-placeholder"
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "2px dashed #4f46e5",
        }}
      >
        Email signup form loading…
      </div>
    </main>
  );
}
