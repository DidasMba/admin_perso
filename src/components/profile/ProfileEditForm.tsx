import React from "react";
// import { FaUserCircle, FaCamera, FaImage } from "react-icons/fa";
import { MdClose } from "react-icons/md";

interface ProfileEditForm {
  data: any; // Le type exact dépend de la structure de tes données
}

const ProfileEditForm: React.FC<{
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsVisible }) => {
  return (
    <div className="fixed w-full flex items-center z-[99999] h-svh  inset-0 backdrop-blur-md">
      <div className="max-w-lg bg-white w-full rounded-md mx-auto">
        <div className="flex justify-end">
          <button onClick={() => setIsVisible(false)}>
            <MdClose size={20} />
          </button>
        </div>
        {/* <div
          className="h-48 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${data?.user.backgroundImage})`, // Assure-toi que `backgroundImage` existe
          }}
        >
          {" "}
          <div
            className="h-48 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${data?.user.backgroundImage})`, // Assure-toi que `backgroundImage` existe
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <div className="relative">
                {data?.user.avatar ? (
                  <img
                    src={data?.user.avatar}
                    alt="Avatar"
                    className="text-gray-200 bg-white rounded-full p-1 shadow-md w-32 h-32 object-cover"
                  />
                ) : (
                  <FaUserCircle
                    size={128}
                    className="text-gray-500 bg-white p-2 rounded-full"
                  />
                )}
                <label
                  className="absolute bottom-2 right-2 bg-customBlue text-white rounded-full p-2 shadow-md hover:bg-[#2d3748] cursor-pointer"
                  htmlFor="avatar-image-upload"
                  aria-label="Changer la photo de profil"
                >
                  <FaCamera size={16} className="" />
                </label>
                <input
                  id="avatar-image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            <label
              className="absolute top-2 right-2 bg-customBlue text-[#4a5568] p-2 rounded-full cursor-pointer shadow-md"
              htmlFor="background-image-upload"
            >
              <FaImage size={20} />
            </label>
            <input
              id="background-image-upload"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="relative">
              {data?.user.avatar ? (
                <img
                  src={data?.user.avatar}
                  alt="Avatar"
                  className="text-gray-200 bg-white rounded-full p-1 shadow-md w-32 h-32 object-cover"
                />
              ) : (
                <FaUserCircle
                  size={128}
                  className="text-gray-500 bg-white p-2 rounded-full"
                />
              )}
              <label
                className="absolute bottom-2 right-2 bg-customBlue text-white rounded-full p-2 shadow-md hover:bg-[#2d3748] cursor-pointer"
                htmlFor="avatar-image-upload"
                aria-label="Changer la photo de profil"
              >
                <FaCamera size={16} className="" />
              </label>
              <input
                id="avatar-image-upload"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
          <label
            className="absolute top-2 right-2 bg-customBlue text-[#4a5568] p-2 rounded-full cursor-pointer shadow-md"
            htmlFor="background-image-upload"
          >
            <FaImage size={20} />
          </label>
          <input
            id="background-image-upload"
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ProfileEditForm;
