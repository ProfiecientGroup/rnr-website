import { NextApiRequest, NextApiResponse } from "next";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY; // Ensure your API key is in .env

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { input } = req.query;

  console.log("Received request with input:", input); // Log the incoming query parameter

  if (!input || typeof input !== "string") {
    console.error("Invalid input received:", input);
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
        input
      )}&key=${GOOGLE_MAPS_API_KEY}`
    );

    const responseText = await response.text();

    // Check if the response is valid JSON, not HTML (such as an error page)
    if (responseText.startsWith("<!DOCTYPE html>")) {
      console.error(
        "Received HTML instead of JSON. The Google API might be down or the key is invalid."
      );
      throw new Error("Received HTML instead of JSON");
    }

    const data = JSON.parse(responseText); // Parse the JSON response

    if (response.ok) {
      return res.status(200).json(data); // Return the Google Places API response
    } else {
      return res.status(response.status).json(data); // Handle error response from Google API
    }
  } catch (error) {
    console.error("Error in Google Places API request:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
