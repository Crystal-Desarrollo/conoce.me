export function mapBrandToIcon(name) {
  switch (name) {
    case "x":
      return "ti-brand-x";
    case "tiktok":
      return "ti-brand-tiktok";
    case "facebook":
      return "ti-brand-facebook";
    case "instagram":
      return "ti-brand-instagram";
    case "linkedin":
      return "ti-brand-linkedin";
    case "github":
      return "ti-brand-github";
    case "maps":
      return "ti-pin";
    case "whatsapp":
      return "ti-brand-whatsapp";
    default:
      return "ti-link";
  }
}

export function getBrandName(name) {
  switch (name) {
    case "x":
      return "X";
    case "tiktok":
      return "TikTok";
    case "facebook":
      return "Facebook";
    case "instagram":
      return "Instagram";
    case "linkedin":
      return "LinkedIn";
    case "github":
      return "GitHub";
    case "maps":
      return "Google Maps";
    default:
      return name;
  }
}
