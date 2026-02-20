export const COLORS = {
  primary: "#2B53A0",
  accent: "#337AB7",
  background: "#FFFFFF",
  text: "#666666",
  link: "#337AB7",
  emergency: "#dc2626", // Red for emergency elements
};

export const COMPANY_NAME = "Kirschbaum";
export const COMPANY_FULL_NAME = "Kurt Kirschbaum GmbH";
export const LOCATION = "Düsseldorf";
export const SLOGAN = "Tradition trifft Innovation – Ihr Meisterbetrieb in Düsseldorf seit 1890.";

export const CONTACT = {
  phone: "0211 391635",
  phoneLink: "+49211391635",
  email: "info@kirschbaum-gmbh.de",
  street: "Wilhelm-Tell-Straße 23",
  zip: "40219",
  city: "Düsseldorf",
  address: "Wilhelm-Tell-Straße 23, 40219 Düsseldorf",
  openingHours: "Mo-Do: 07:30-17:00 Uhr, Fr: 07:30-15:00 Uhr",
  emergencyHours: "24h Notdienst",
};

export const SOCIALS = {
  instagram: "https://instagram.com/kirschbaum_shk",
  facebook: "https://facebook.com/kirschbaum_shk",
};

export const LEGAL = {
  managingDirector: "Marcel Stoeck",
  court: "Amtsgericht Düsseldorf",
  registrationNumber: "HRB 13698",
  vatId: "DE119431113",
  profession: "Gas- und Wasserinstallateurmeister sowie Heizungs- und Lüftungsbauermeister",
  chamber: "Handwerksrolle der HWK Düsseldorf",
  chamberNumber: "108 65 61",
};

export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/Veu4TMt3dUhRbAmH6";

export const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};
