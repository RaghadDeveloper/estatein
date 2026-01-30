export const getFinalLink = (
  type: "email" | "location" | "phone" | "website",
  link: string,
) => {
  switch (type) {
    case "email":
      return `mailto:${link}`;
    case "location":
      return `https://www.google.com/maps/search/?api=1&query=${link && encodeURIComponent(link)}`;
    case "phone":
      return `tel:${link?.replace(/\s+/g, "")}`;
    case "website":
      return link?.startsWith("http") ? link : `https://${link}`;
    default:
      return link;
  }
};
