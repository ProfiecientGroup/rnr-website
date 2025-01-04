import urls from "global/constants/urls";
import { getCallParams, makeCall } from "helpers/methods";

export const doBooking = async (body: any) => {
    try {
      const callParams = getCallParams("POST", body);
      const response = await makeCall(urls.contactApiCallEndpoint, callParams);
      return response;
    } catch (error: any) {
      throw error;
    }
  };