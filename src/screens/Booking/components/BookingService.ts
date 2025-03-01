import urls from "global/constants/urls";
import { getCallParams, makeCall } from "helpers/methods";

export const doBooking = async (body: any) => {
  try {
    const callParams = getCallParams("POST", body);
    const response = await makeCall(urls.bookingApiCallEndpoint, callParams);
    return response;
  } catch (error: any) {
    throw error;
  }
};

export const doCorporateLogin = async (body: any) => {
  try {
    const callParams = getCallParams("POST", body);
    const response = await makeCall(
      urls.corporateLoginApiCallEndpoint,
      callParams
    );
    return response;
  } catch (error: any) {
    throw error;
  }
};

// export const googleApi = async (input: string) => {
//   try {
//     const callParams = getCallParams("GET");
//     const response = await makeCall(
//       `/api/google-autocomplete?input=${encodeURIComponent(input)}`,
//       callParams
//     );
//     let data;
//     if (typeof response === "string") {
//       data = JSON.parse(response);
//     } else {
//       data = response;
//     }
//     return data;
//   } catch (error: any) {
//     throw error;
//   }
// };

// export const googleApi = async (input: string) => {
//   try {
//     const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
//     console.log("Google API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

//     if (!GOOGLE_MAPS_API_KEY) {
//       throw new Error("Google Maps API key is missing");
//     }

//     // const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
//     //   input
//     // )}&key=${GOOGLE_MAPS_API_KEY}`;
//     const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=test&key=AIzaSyAh3BlCUTtjDCrtl9b0cViB6YVX9qKwUxs`;

//     const callParams = getCallParams("GET"); // Ensure callParams includes necessary headers
//     const response = await makeCall(url, callParams);

//     return response;
//   } catch (error: any) {
//     console.error("Error fetching Google Autocomplete data:", error);
//     throw new Error("Failed to fetch Google Autocomplete data");
//   }
// };

export const googleApi = async (input: string) => {
  try {
    if (!input.trim()) {
      throw new Error("Input is required");
    }
    
    // Use your new API endpoint instead of calling Google directly
    const url = `/api/google-autocomplete?input=${encodeURIComponent(input)}`;
    const callParams = getCallParams("GET"); // Make sure getCallParams returns appropriate headers
    const response = await makeCall(url, callParams);
    return response;
  } catch (error: any) {
    console.error("Error fetching Google Autocomplete data:", error);
    throw new Error("Failed to fetch Google Autocomplete data");
  }
};