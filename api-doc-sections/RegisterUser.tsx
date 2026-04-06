"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function RegisterUser() {
  return (
    <ApiSection
      title="Register new User with new email"
      description="Use this endpoint to create a new user account. Provide name, email, and password. Email should be completely new"
      endpoint="/auth/register"
      method="POST"
      defaultBody={JSON.stringify(
        {
          name: "Shruti",
          email: "shruti@gmail.com",
          password: "shrutipassword",
        },
        null,
        2
      )}
    />
  );
}