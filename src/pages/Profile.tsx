import React from "react";
import BaseLayout from "../components/BaseLayout";
import UserProfile from "../components/profile/UserProfile";

const Profile: React.FC = () => {
  return (
    <BaseLayout>
      <UserProfile />
    </BaseLayout>
  );
};

export default Profile;
