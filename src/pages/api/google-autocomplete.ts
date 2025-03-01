import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { input } = req.query;

    if (!input) {
      return res
        .status(400)
        .json({ error_message: "Input parameter is required" });
    }

    const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Server-side env variable

    if (!GOOGLE_MAPS_API_KEY) {
      return res
        .status(500)
        .json({ error_message: "Google Maps API key is missing" });
    }

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
      input as string
    )}&key=${GOOGLE_MAPS_API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Google Autocomplete API error:", error);
    return res
      .status(500)
      .json({
        error_message: error.message || "Failed to fetch from Google API",
      });
  }
}
