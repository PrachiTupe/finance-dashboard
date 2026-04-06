"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function GetViewer() {
  return (
    <ApiSection
      title="Get Viewers - USER"
      description="Use this endpoint to fetch all viewers of the user."
      endpoint="/users/viewers"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1Mjk0MjE0LCJleHAiOjE3NzU4OTkwMTR9.XCbe4AiBSAVqspSWYaq8Y7h7mv3TE62AE4LEQwToFGw"    />
  );
}