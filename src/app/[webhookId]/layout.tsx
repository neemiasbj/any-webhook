import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webhook",
  description: "Webhook Data",
  other: {
    "google-site-verification": "3Zrude9mrTe4FCdHAqRdcWRGkmuWeDkZWls4MG8FOMw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
