"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function LoginUser() {
  return (
    <ApiSection
      title="Successful Login"
      description="Use this endpoint to login a user with email and password. Returns an authentication token on success."
      endpoint="https://backend-assessment-v7ej.onrender.com/api/auth/login"
      method="POST"
      defaultBody={JSON.stringify(
        {
          email: "om@gmail.com",
          password: "123456",
        },
        null,
        2
      )}
    />
  );
}