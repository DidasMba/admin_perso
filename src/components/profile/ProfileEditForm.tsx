import React from "react";

interface ProfileEditFormProps {
  data: any; // Le type exact dépend de la structure de tes données
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ data }) => {
  return (
    <div>
      <input
        type="text"
        defaultValue={data?.user.firstname}
        className="border border-gray-300 p-2 rounded-lg"
        placeholder="Edit First Name"
      />
      <input
        type="text"
        defaultValue={data?.user.lastname}
        className="mt-2 border border-gray-300 p-2 rounded-lg"
        placeholder="Edit Last Name"
      />
    </div>
  );
};

export default ProfileEditForm;
