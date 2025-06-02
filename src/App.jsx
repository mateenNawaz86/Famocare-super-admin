import { AuthPage } from "./pages/auth";
import { ReferralManagersPage } from "./pages/referralManagers";
import { Routes, Route } from "react-router-dom";
import { ProfileSettingPage } from "./pages/profileSetting";
import { SupportManagersPage } from "./pages/supportManagers";
import { AddSupportManagersPage } from "./pages/supportManagers/add-support-manager";
import { AddReferralManagersPage } from "./pages/referralManagers/add-referral-manager";
import { VersionControlPage } from "./pages/versionControl";
import { AddVersionControlPage } from "./pages/versionControl/add-version-control";
import { GuideTextPage } from "./pages/guide-text";
import { GuideVideoPage } from "./pages/guide-video";
import { PolicyDocumentsPage } from "./pages/policy-docs";
import { EditGuideTextPage } from "./pages/edit-guide-text";
import { EditPolicyDocumentsPage } from "./pages/edit-policy-documents";
import { LimitsManagementPage } from "./pages/limits-management";
import { EditVideoPage } from "./pages/edit-video";
import { NotificationPage } from "./pages/notifications";
import { GroupsPage } from "./pages/groups";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/referral-managers" element={<ReferralManagersPage />} />
        <Route
          path="/add-referral-manager"
          element={<AddReferralManagersPage />}
        />
        <Route path="/profile-setting" element={<ProfileSettingPage />} />
        <Route path="/support-managers" element={<SupportManagersPage />} />
        <Route
          path="/add-support-manager"
          element={<AddSupportManagersPage />}
        />
        <Route path="/version-control" element={<VersionControlPage />} />
        <Route
          path="/add-version-control"
          element={<AddVersionControlPage />}
        />
        <Route path="/guide-video" element={<GuideVideoPage />} />
        <Route path="guide-video/edit" element={<EditVideoPage />} />
        <Route path="/guide-text" element={<GuideTextPage />} />
        <Route path="/guide-text/edit" element={<EditGuideTextPage />} />
        <Route path="/policy-documents" element={<PolicyDocumentsPage />} />
        <Route path="/limits-management" element={<LimitsManagementPage />} />
        <Route
          path="/policy-documents/edit"
          element={<EditPolicyDocumentsPage />}
        />
      </Routes>
    </>
  );
};

export default App;
