import strings from "global/constants/strings";
import urls from "global/constants/urls";
import { PhoneNumberUtil } from "google-libphonenumber";

export const markdownText = (markdownText: string) => {
  const regex =
    /(\*\*|__|\[h3\]|\[h4\]|\[h5\]|\[h6\])(.*?)(\*\*|__|\[\/h3\]|\[\/h4\]|\[\/h5\]|\[\/h6\])|\[(.*?)\]\((.*?)\)/g;
  return markdownText.replaceAll(regex, (match, p1, p2, p3, p4, p5) => {
    if (p1 === "**" && p3 === "**") {
      return `<strong style="color:#475569;font-family:Inter">${p2}</strong>`;
    }
    if (p1 === "__" && p3 === "__") {
      return `<em>${p2}</em>`;
    }
    if (p1 === "[h3]" && p3 === "[/h3]") {
      return `<h3 style="margin:0;color:#475569;font-family:Inter"><strong>${p2}</strong></h3>`;
    }
    if (p1 === "[h4]" && p3 === "[/h4]") {
      return `<h4 style="margin:0;display:inline;color:#475569;font-family:Inter">${p2}</h4>`;
    }
    if (p1 === "[h5]" && p3 === "[/h5]") {
      return `<h5 style="margin:0;color:#475569;font-family:Inter"><strong>${p2}</strong></h5>`;
    }
    if (p1 === "[h6]" && p3 === "[/h6]") {
      return `<h6 style="margin:0;color:#475569;font-family:Inter"><strong>${p2}</strong></h6>`;
    }
    if (p4 && p5) {
      return `<a href="${p5}" target="_blank" rel="noopener" rel="noreferrer" style="color:#15c;font-weight:700;text-decoration:underline">${p4}</a>`;
    }

    return match; // Return the original match if no formatting matches
  });
};

export const isTruthy = (value: any, shouldCheckByType: boolean = true) => {
  const validatedByType = shouldCheckByType
    ? customValidatorByType(value)
    : true;

  if (value !== null && value !== undefined && validatedByType) {
    return true;
  }
  return false;
};

const customValidatorByType = (value: any) => {
  if (value !== undefined && value !== null) {
    const type = typeof value;
    switch (type) {
      case "string":
        return value.trim() !== "";
      case "object":
        if (Array.isArray(value)) {
          return value.length > 0;
        } else {
          return Object.keys(value).length > 0;
        }
      default:
        return true;
    }
  }
};

export const getCallParams = (
  method: string,
  body: any = undefined,
  isFileUpload: boolean = false
) => {
  if (isFileUpload) {
    return {
      method,
      body,
      headers: {
        Origin: urls.BASE_WEBAPP_URL,
      },
    };
  }
  if (body) {
    return {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Origin: urls.BASE_WEBAPP_URL,
      },
    };
  }
  return {
    method,
    headers: {
      "Content-Type": "application/json",
      Origin: urls.BASE_WEBAPP_URL,
    },
  };
};

export const makeCall = async (url: string, requestOptions: any) => {
  try {
    const response = await fetch(url, requestOptions);
    if (response && response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (error: any) {
    throw error;
  }
};

export const isPhoneValid = (phone: string) => {
  try {
    const phoneUtil = PhoneNumberUtil.getInstance();
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error: any) {
    return false;
  }
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

// export const openErrorNotification = (
//   message: any,
//   title: string = "Error"
// ) => {
//   globalEmitter.emit(strings.notification, {
//     type: strings.error,
//     message: message,
//     title: title,
//   });
// };
