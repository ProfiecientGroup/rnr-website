class Urls {
  PROD = false;

  BASE_WEBAPP_URL = this.PROD ? "https://rnr.com/" : "https://rnr.com/";

  bookingApiCallEndpoint = "https://api.rnrchauffeurs.com/calculate-booking-prices";
  corporateLoginApiCallEndpoint = "https://api.rnrchauffeurs.com/corporate-login";
  contactApiCallEndpoint = "https://api.rnrchauffeurs.com/contact ";

  // Social media handles
  STRIPE_PUBLIC_KEY =
    "pk_test_51R2prx1xjPHlV1vS9Zn2MP6FWkcgtGIZsNvkoi62vDa8MdGD0FvcN6y6G1ZCoKRHMrWm5plsIELvPYNlAQtMhSyj00IrJvF6At";
  Facebook = "https://www.facebook.com/rnr.marketing/";
  Instagram = "https://www.instagram.com/rnr_marketing/";
  X = "https://x.com/rnr_email";
  LinkedIn = "https://www.linkedin.com/company/rnr/";
  YouTube = "https://www.youtube.com/@rnr-marketing";
}
export default new Urls();
