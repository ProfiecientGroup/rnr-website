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
    const response = await makeCall(urls.corporateLoginApiCallEndpoint, callParams);
    return response;
  } catch (error: any) {
    throw error;
  }
};

export const googleApi = async (input: string) => {
  try {
    const callParams = getCallParams("GET", undefined);
    const response = await makeCall(
      `/api/google-autocomplete?input=${encodeURIComponent(input)}`,
      callParams
    );
    let data;
    if (typeof response === "string") {
      data = JSON.parse(response);
    } else {
      data = response;
    }
    return data;
  } catch (error: any) {
    throw error;
  }
};
