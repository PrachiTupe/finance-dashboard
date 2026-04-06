"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function LoginUser2() {
  return (
    <ApiSection
      title="Login with non existent email"
      description="If login email doesn't exist, it returns 'user not found'"
      endpoint="http://localhost:5000/api/auth/login"
      method="POST"
      defaultBody={JSON.stringify(
        {
          email: "arbaz@gmail.com",
          password: "123456",
        },
        null,
        2
      )}
    />
  );
}