"use client";
import Head from "next/head";
import React from "react";

export default function WebhookData({
  params: { webhookId },
}: {
  params: { webhookId: string };
}) {
  const [loading, setloading] = React.useState<boolean>(true);
  const [data, setdata] = React.useState<any>(null);

  React.useEffect(() => {
    loadInitialData();
  }, []);

  async function loadInitialData() {
    console.log({ webhookId });
    const data = await fetch(`/api/webhook/${webhookId}`, {
      method: "GET",
    }).then((response) => response.json());
    console.log({ data });
    setdata(data);
    setloading(false);
  }

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="3Zrude9mrTe4FCdHAqRdcWRGkmuWeDkZWls4MG8FOMw"
        />
        <title>Your webhook data</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {loading ? "Carregando..." : JSON.stringify(data, null, 2)}
      </main>
    </>
  );
}
