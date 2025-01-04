class Urls {
  PROD = false;

  BASE_WEBAPP_URL = this.PROD ? "https://rnr.com/" : "https://rnr.com/";

  contactApiCallEndpoint =
    "https://f9f7-2401-4900-838e-d5ae-55c5-c35e-2615-115e.ngrok-free.app/calculate-prices";

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
