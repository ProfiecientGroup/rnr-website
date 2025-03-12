class Urls {
  PROD = false;

  BASE_WEBAPP_URL = this.PROD ? "https://rnr.com/" : "https://rnr.com/";

  bookingApiCallEndpoint = "http://13.60.40.222:80/calculate-booking-prices";
  corporateLoginApiCallEndpoint = "http://13.60.40.222:80/corporate-login";
  Pricing = `/pricing`;

  contactApiCallEndpoint =
    "http://13.60.40.222:80/contact ";
  // Book a demo

  Calendly = "https://calendly.com/rnr";

  // Social media handles

  Facebook = "https://www.facebook.com/rnr.marketing/";
  Instagram = "https://www.instagram.com/rnr_marketing/";
  X = "https://x.com/rnr_email";
  LinkedIn = "https://www.linkedin.com/company/rnr/";
  YouTube = "https://www.youtube.com/@rnr-marketing";
}
export default new Urls();
