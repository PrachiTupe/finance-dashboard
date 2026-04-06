"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function ChangePassword() {
  return (
    <ApiSection
      title="Change Password - Current password and old password are same"
      description="If new password is the same as the old password, it returns 'New password cannot be the same as old password'"
      endpoint="http://localhost:5000/api/auth/change-password"
      method="PUT"
      defaultBody={JSON.stringify(
        {
          oldPassword: "manager1password",
          newPassword: "manager1password",
        },
        null,
        2
      )}
      // Pre-fill token
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDEyZmY2ODA2ZjcwZTUwOTQyOGZmMyIsInJvbGUiOiJNQU5BR0VSIiwiaWF0IjoxNzc1MzE3MTE4LCJleHAiOjE3NzU5MjE5MTh9.hhT6WZ4GtiRzyBv8DGZQyrTUc6K5lEh7-ItTz61QTv4"
    />
  );
}