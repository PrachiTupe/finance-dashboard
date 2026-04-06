"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function RegisterUser() {
  return (
    <ApiSection
      title="Register new User with exsting email"
      description="If exsting email is used, it will return message 'Email already exists'"
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