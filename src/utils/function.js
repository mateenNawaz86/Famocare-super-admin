import moment from "moment";

export function formatDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${day}.${month}.${year}`;
}

export const getPageTitles = (location) => {
  const pathSegments = location.pathname.split("/").filter(Boolean); // removes empty segments
  const lastSegment = pathSegments[pathSegments.length - 1]; // get last segment

  const titleMap = {
    "profile-setting": "Profile Settings",
    notifications: "Push Notification",
    "referral-managers": "Referral Managers",
    "support-managers": "Support Managers",
    "add-support-manager": "Add Support Manager",
    "add-referral-manager": "Add Referral Manager",
    "version-controls": "Version Control",
    "add-version-controls": "Add Version",
    "guide-videos": "Guide Videos",
    "guide-texts": "Guide Texts",
    groups: "Groups",
    "policy-documents": "Policy Documents",
    "limits-management": "Limits Management",
  };

  let pageTitle = titleMap[lastSegment] || "Dashboard";

  return { pageTitle };
};

export function isJSON(str) {
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}

export const formatDate = (isoString) => {
  if (!isoString) return "N/A";

  const date = moment(isoString);
  return date.isValid() ? date.format("MMM DD YYYY hh:mm A") : "Invalid date";
};

export const getLastHeading = (searchParams) => {
  const queryParams = new URLSearchParams(searchParams);
  const status = queryParams.get("status") || "trial";

  return status === "subscribed"
    ? "Cleared"
    : status === "cancelled"
    ? "Cancelled"
    : "Clearance";
};
