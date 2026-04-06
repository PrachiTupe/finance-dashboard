"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function LoginUser1() {
  return (
    <ApiSection
      title="Login with Invalid Password"
      description="If login password is wrong, it returns 'Invalid Password'"
      endpoint="/auth/login"
      method="POST"
      defaultBody={JSON.stringify(
        {
          email: "soham@gmail.com",
          password: "123456",
        },
        null,
        2
      )}
    />
  );
}