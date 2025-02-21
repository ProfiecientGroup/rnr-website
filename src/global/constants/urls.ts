class Urls {
  PROD = false;

  BASE_WEBAPP_URL = this.PROD ? "https://rnr.com/" : "https://rnr.com/";

  bookingApiCallEndpoint =
    "https://ff23-2409-4050-2ebc-f010-fcc6-68e-a00-d8e6.ngrok-free.app/calculate-booking-prices";

  Pricing = `/pricing`;

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
