// import React from "react";

// const UserProfile: React.FC = () => {
//   return <div>UserProfile</div>;
// };

// export default UserProfile;

import React, { useState } from "react";
import { FaUserCircle, FaCamera, FaImage } from "react-icons/fa";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

const UserProfile: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [avatarImage, setAvatarImage] = useState("");

  // Fonction pour changer l'image de fond via une URL
  const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Fonction pour changer l'avatar via une URL
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex flex-col items-start p-6 min-h-screen">
      {/* <Heading>Mon Profile</Heading> */}

      <Heading text={`Mon Profile`} />
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg">
        <div
          className="h-48 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            {/* Avatar */}
            <div className="relative">
              {avatarImage ? (
                <img
                  src={avatarImage}
                  alt="Avatar"
                  className="text-gray-200 bg-white rounded-full p-1 shadow-md w-32 h-32 object-cover"
                />
              ) : (
                <FaUserCircle
                  size={128}
                  className="text-gray-500 bg-white p-2 rounded-full"
                />
              )}

              {/* Icône caméra avec couleur #4a5568 (gris foncé) */}
              <label
                className="absolute bottom-2 right-2 bg-[#4a5568] text-white rounded-full p-2 shadow-md hover:bg-[#2d3748] cursor-pointer"
                htmlFor="avatar-image-upload"
                aria-label="Changer la photo de profil"
              >
                <FaCamera size={16} className="text-yellow-500" />
              </label>
              <input
                id="avatar-image-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Icône pour changer l'image de fond */}
          <label
            className="absolute top-2 right-2 bg-white text-[#4a5568] p-2 rounded-full cursor-pointer shadow-md"
            htmlFor="background-image-upload"
          >
            <FaImage size={20} />
          </label>
          <input
            id="background-image-upload"
            type="file"
            accept="image/*"
            onChange={handleBackgroundChange}
            className="hidden"
          />
        </div>

        <div className="mt-20 p-6 text-center">
          {/* <h2 className="text-xl font-medium text-gray-700">
            Nom d'utilisateur
          </h2> */}

          <Paragraph text={`Nom d'utilisateur`} />

          <p className="text-sm text-gray-500">Adresse email</p>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
