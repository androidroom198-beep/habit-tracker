import React from "react";

function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      points: [
        "Bad Habit Tracker does not collect, store, or transmit any personally identifiable information.",
        "The App does not require user registration or login.",
        "The App does not require email addresses.",
        "The App does not require phone numbers.",
        "The App does not require payment information.",
        "The App does not require location information.",
      ],
    },
    {
      title: "2. Data Storage",
      points: [
        "Habit names.",
        "Progress timers.",
        "Achievement badges.",
        "Streak information.",
        "Other app preferences.",
        "All of this information is stored locally on your device using Flutter's local storage mechanisms.",
        "Your data never leaves your device unless you choose to back up or share your device using your operating system's backup services.",
      ],
    },
    {
      title: "3. Data Sharing",
      points: [
        "We do not sell user data.",
        "We do not share user data with third parties.",
        "We do not upload user information to external servers.",
        "We do not use advertising services that collect personal information.",
      ],
    },
    {
      title: "4. Internet Access",
      points: [
        "The App may require internet access only for future updates or external services.",
        "The current version does not upload your personal habit data to any online server.",
      ],
    },
    {
      title: "5. Children's Privacy",
      points: [
        "Bad Habit Tracker is intended for general audiences.",
        "We do not knowingly collect personal information from children under the age of 13.",
      ],
    },
    {
      title: "6. Security",
      points: [
        "Your data is stored locally on your device.",
        "We recommend protecting your device using screen locks, passwords, and backups.",
      ],
    },
    {
      title: "7. Changes to This Privacy Policy",
      points: [
        "We may update this Privacy Policy from time to time.",
        "Any updates will be published through the Google Play Store listing or future versions of the application.",
      ],
    },
    {
      title: "8. Contact Us",
      points: [
        "If you have any questions regarding this Privacy Policy, please contact the developer using the contact information provided on the Google Play Store listing.",
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "40px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1e3a8a",
            marginBottom: "10px",
          }}
        >
          Privacy Policy
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          <strong>Last Updated:</strong> July 2026
        </p>

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
            marginBottom: "35px",
          }}
        >
          <strong>Bad Habit Tracker</strong> ("the App") respects your privacy
          and is committed to protecting your information. This Privacy Policy
          explains how the App handles user data.
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
                paddingLeft: "22px",
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

        <hr style={{ margin: "35px 0" }} />

        <h2 style={{ color: "#1e3a8a" }}>Consent</h2>

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
          }}
        >
          By downloading and using <strong>Bad Habit Tracker</strong>, you
          acknowledge that you have read, understood, and agreed to this Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;