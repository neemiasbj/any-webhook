import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webhook",
  description: "Webhook Data",
  other: {
    "google-site-verification": "3IERGxmTxp1kF_nMZk7QVhqRxTU64mqX2bT55hFKKSk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
