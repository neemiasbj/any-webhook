import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webhook",
  description: "Webhook Data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
