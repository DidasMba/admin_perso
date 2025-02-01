import React, { useState } from "react";
import { FaUserCircle, FaCamera } from "react-icons/fa";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import { useGetMeQuery } from "../../lib/features/slice/authSlice";
import EditButton from "../common/buttons/EditButton";
import ProfileEditForm from "./ProfileEditForm";

// Image par défaut
const defaultBackgroundImage = "/bgsora.jpeg";

const UserProfile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [avatarImage, setAvatarImage] = useState("");

  const { data, isLoading } = useGetMeQuery(null);
  const [isEditing, setIsEditing] = useState(false);

  if (isLoading)
    return (
      <div className="min-h-[70svh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <main className="w-full flex flex-col items-start p-6 min-h-screen">
      <Heading text={`Profile`} />
      <div className="w-full bg-white shadow-lg rounded-lg">
        <div
          className="h-48 bg-cover bg-center relative"
          style={{
            backgroundImage: `url("${defaultBackgroundImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>

          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            {/* Avatar */}
            <div className="relative">
              {data?.user.avatar ? (
                <img
                  src={avatarImage ? avatarImage : data?.user.avatar}
                  alt="Avatar"
                  className="text-gray-200 bg-white rounded-full p-1 shadow-md w-32 h-32 object-cover"
                />
              ) : (
                <FaUserCircle
                  size={128}
                  className="text-gray-500 bg-white p-2 rounded-full"
                />
              )}
              {/* Icône caméra pour changer l'avatar */}
              <label
                className="absolute bottom-2 right-2 bg-customBlue text-white rounded-full p-2 shadow-md hover:bg-[#2d3748] cursor-pointer"
                htmlFor="avatar-image-upload"
                aria-label="Changer la photo de profil"
              >
                <FaCamera size={16} />
              </label>
              <input
                id="avatar-image-upload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setAvatarImage(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 p-6 text-center">
          <Paragraph text={data?.user.lastname || "Nom inconnu"} />

          <p className="text-sm text-gray-500">
            {data?.user.firstname || "Prénom inconnu"}
          </p>
          <p className="text-sm text-gray-500">
            {data?.user.lastname || "Nom inconnu"}
          </p>

          {data?.user.email && (
            <p className="text-sm text-gray-500">{data.user.email}</p>
          )}
        </div>
        {/* Utilisation du bouton d'édition */}
        <EditButton onClick={() => setIsVisible(true)} />
      </div>
      {isVisible && <ProfileEditForm setIsVisible={setIsVisible} />}
    </main>
  );
};

export default UserProfile;
