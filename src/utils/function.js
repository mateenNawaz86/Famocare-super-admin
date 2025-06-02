import moment from "moment";

export function formatDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${day}.${month}.${year}`;
}

export const getPageTitles = (location) => {
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const joinedPath = pathSegments.join("/");

  const titleMap = {
    "profile-setting": "Profile Settings",
    notifications: "Push Notification",
    "referral-managers": "Referral Managers",
    "support-managers": "Support Managers",
    "add-support-manager": "Add Support Manager",
    "add-referral-manager": "Add Referral Manager",
    "version-control": "Version Control",
    "add-version-control": "Add Version",
    "guide-video": "Guide Videos",
    "guide-text": "Guide Texts",
    "guide-text/edit": "Edit Guide Text",
    "guide-video/edit": "Edit Guide Video",
    "policy-documents/edit": "Policy Documents",
    groups: "Groups",
    "policy-documents": "Policy Documents",
    "limits-management": "Limits Management",
  };

  const pageTitle = titleMap[joinedPath] || "Dashboard";
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
