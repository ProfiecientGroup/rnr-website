export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch(
      "http://13.60.40.222/calculate-booking-prices",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: `http://rnr-chauffers.s3-website.eu-north-1.amazonaws.com`,
        },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
