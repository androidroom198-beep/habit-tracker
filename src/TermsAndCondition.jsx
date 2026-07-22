import React from "react";

function TermsAndCondition() {
  const sections = [
    {
      title: "1. Personal Use",
      points: [
        "This application is intended for personal, non-commercial use only.",
        "Users are responsible for how they use the information and features provided by the app.",
      ],
    },
    {
      title: "2. Habit Tracking",
      points: [
        "Bad Habit Tracker is designed to help users monitor their progress in overcoming unwanted habits and maintaining healthier routines.",
        "The app provides motivational tools such as timers, progress tracking, and achievement badges. These features are for informational and motivational purposes only.",
      ],
    },
    {
      title: "3. No Medical Advice",
      points: [
        "Bad Habit Tracker does not provide medical, psychological, or professional healthcare advice.",
        "The app should not be considered a substitute for professional medical treatment or counselling. If you require medical assistance, please consult a qualified healthcare professional.",
      ],
    },
    {
      title: "4. Data Storage",
      points: [
        "Habit data is stored locally on your device.",
        "The application does not intentionally collect, store, or share your personal information with third parties.",
        "Users are responsible for maintaining backups of their data if required.",
      ],
    },
    {
      title: "5. Limitation of Liability",
      points: [
        "While we strive to provide an accurate and reliable experience, we make no guarantees regarding uninterrupted availability or the accuracy of all information displayed within the app.",
        "The developer shall not be held liable for any direct or indirect damages arising from the use or inability to use the application.",
      ],
    },
    {
      title: "6. Updates",
      points: [
        "We may update or improve the application and these Terms & Conditions from time to time without prior notice.",
        "Continued use of the application after any changes constitutes acceptance of the updated terms.",
      ],
    },
    {
      title: "7. Acceptance of Terms",
      points: [
        "By installing and using Bad Habit Tracker, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
      ],
    },
  ];

  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#222",
          }}
        >
          Terms & Conditions
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "35px",
          }}
        >
          Last Updated: July 2026
        </p>

        {sections.map((section, index) => (
          <div key={index} style={{ marginBottom: "30px" }}>
            <h2
              style={{
                color: "#1e3a8a",
                fontSize: "22px",
                marginBottom: "12px",
              }}
            >
              {section.title}
            </h2>

            <ul
              style={{
                paddingLeft: "20px",
                color: "#444",
                lineHeight: "1.8",
              }}
            >
              {section.points.map((point, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <hr style={{ margin: "30px 0" }} />

        <h3 style={{ color: "#1e3a8a" }}>Contact Us</h3>

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          If you have any questions regarding these Terms & Conditions,
          please contact the developer using the contact information provided
          on the application's Google Play Store listing.
        </p>
      </div>
    </div>
  );
}

export default TermsAndCondition;