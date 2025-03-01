import { NextApiRequest, NextApiResponse } from "next";

// Get API key from environment variables
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { input } = req.query;
  console.log("Received request with input:", input);

  if (!input || typeof input !== "string") {
    console.error("Invalid input received:", input);
    return res.status(400).json({ error: "Invalid input" });
  }

  if (!GOOGLE_MAPS_API_KEY) {
    console.error("Google Maps API key is not configured");
    return res.status(500).json({ error: "API configuration error" });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
        input
      )}&key=${GOOGLE_MAPS_API_KEY}`
    );

    const responseText = await response.text();

    // Check if the response is valid JSON
    if (responseText.startsWith("<!DOCTYPE html>")) {
      console.error(
        "Received HTML instead of JSON. The Google API might be down or the key is invalid."
      );
      throw new Error("Received HTML instead of JSON");
    }

    const data = JSON.parse(responseText);

    if (response.ok) {
      return res.status(200).json(data);
    } else {
      return res.status(response.status).json(data);
    }
  } catch (error) {
    console.error("Error in Google Places API request:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
