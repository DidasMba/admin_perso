// //

// import React, { useState } from "react";
// import { FaUserCircle, FaCamera } from "react-icons/fa";
// import Heading from "../common/Heading";
// import { useGetMeQuery } from "../../lib/features/slice/authSlice";
// import EditButton from "../common/buttons/EditButton";
// import ProfileEditForm from "./ProfileEditForm";

// const defaultBackgroundImage = "/bgsora.jpeg";

// const UserProfile: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [avatarImage, setAvatarImage] = useState("");

//   const { data, isLoading } = useGetMeQuery(null);

//   if (isLoading)
//     return (
//       <div className="min-h-[70svh] flex justify-center items-center">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );

//   return (
//     <main className="w-full flex flex-col items-start p-6 min-h-screen">
//       <Heading text="Profile" />
//       <div className="w-full bg-white shadow-lg rounded-lg">
//         <div
//           className="h-48 bg-cover bg-center relative"
//           style={{
//             backgroundImage: `url("${defaultBackgroundImage}")`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-10"></div>
//           <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
//             <div className="relative">
//               {data?.user.avatar ? (
//                 <img
//                   src={avatarImage || data.user.avatar}
//                   alt="Avatar"
//                   className="text-gray-200 bg-white rounded-full p-1 shadow-md w-32 h-32 object-cover"
//                 />
//               ) : (
//                 <FaUserCircle
//                   size={128}
//                   className="text-gray-500 bg-white p-2 rounded-full"
//                 />
//               )}
//               <label
//                 className="absolute bottom-2 right-2 bg-customBlue text-white rounded-full p-2 shadow-md hover:bg-[#2d3748] cursor-pointer"
//                 htmlFor="avatar-image-upload"
//                 aria-label="Change profile picture"
//               >
//                 <FaCamera size={16} />
//               </label>
//               <input
//                 id="avatar-image-upload"
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => {
//                   const file = e.target.files?.[0];
//                   if (file) {
//                     const reader = new FileReader();
//                     reader.onloadend = () => {
//                       setAvatarImage(reader.result as string);
//                     };
//                     reader.readAsDataURL(file);
//                   }
//                 }}
//                 className="hidden"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <div className="mt-20 p-6 bg-white max-w-lg w-full border border-gray-300 rounded-lg">
//             <div className="bg-gray-200 text-gray-700 text-lg font-semibold p-3 rounded-t-lg select-none cursor-default">
//               Personal Information
//             </div>
//             <div className="space-y-3 p-4">
//               <div className="flex items-center">
//                 <p className="text-sm text-gray-500 w-1/4">Username</p>
//                 <p className="text-lg font-semibold text-gray-700 w-3/4">
//                   {data?.user.username || "Nom d'utilisateur inconnu"}
//                 </p>
//               </div>
//               <div className="flex items-center">
//                 <p className="text-sm text-gray-500 w-1/4">Firstname</p>
//                 <p className="text-lg font-semibold text-gray-700 w-3/4">
//                   {data?.user.firstname || "Nom inconnu"}
//                 </p>
//               </div>
//               <div className="flex items-center">
//                 <p className="text-sm text-gray-500 w-1/4">Lastname</p>
//                 <p className="text-lg font-semibold text-gray-700 w-3/4">
//                   {data?.user.lastname || "Prénom inconnu"}
//                 </p>
//               </div>
//               <div className="flex items-center">
//                 <p className="text-sm text-gray-500 w-1/4">Email</p>
//                 <p className="text-lg font-semibold text-gray-700 w-3/4">
//                   {data?.user.email || "Email inconnu"}
//                 </p>
//               </div>
//               {data?.user.phone && (
//                 <div className="flex items-center">
//                   <p className="text-sm text-gray-500 w-1/4">Phone</p>
//                   <p className="text-lg font-semibold text-gray-700 w-3/4">
//                     {data.user.phone}
//                   </p>
//                 </div>
//               )}
//               {data?.user.gender && (
//                 <div className="flex items-center">
//                   <p className="text-sm text-gray-500 w-1/4">Gender</p>
//                   <p className="text-lg font-semibold text-gray-700 w-3/4">
//                     {data.user.gender}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <EditButton onClick={() => setIsVisible(true)} />
//       </div>
//       {/* {isVisible && <ProfileEditForm setIsVisible={setIsVisible} />} */}
//       {isVisible && (
//         <ProfileEditForm
//           setIsVisible={setIsVisible}
//           initialData={{
//             firstname: data.user.firstname,
//             lastname: data.user.lastname,
//             email: data.user.email,
//             username: data.user.username,
//           }}
//         />
//       )}
//     </main>
//   );
// };

// export default UserProfile;

import React, { useState } from "react";
import { FaUserCircle, FaCamera } from "react-icons/fa";
import Heading from "../common/Heading";
import { useGetMeQuery } from "../../lib/features/slice/authSlice";
import EditButton from "../common/buttons/EditButton";
import ProfileEditForm from "./ProfileEditForm";

const defaultBackgroundImage = "/bgsora.jpeg";

const UserProfile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [avatarImage, setAvatarImage] = useState("");

  const { data, isLoading } = useGetMeQuery(null);

  if (isLoading)
    return (
      <div className="min-h-[70svh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  // Vérification que 'data' est défini avant de l'utiliser
  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Failed to load user data.</p>
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col items-start p-6 min-h-screen">
      <Heading text="Profile" />
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
            <div className="relative">
              {data.user.avatar ? (
                <img
                  src={avatarImage || data.user.avatar}
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
                aria-label="Change profile picture"
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
        <div className="flex justify-center">
          <div className="mt-20 p-6 bg-white max-w-lg w-full border border-gray-300 rounded-lg">
            <div className="bg-gray-200 text-gray-700 text-lg font-semibold p-3 rounded-t-lg select-none cursor-default">
              Personal Information
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-center">
                <p className="text-sm text-gray-500 w-1/4">Username</p>
                <p className="text-lg font-semibold text-gray-700 w-3/4">
                  {data.user.username || "Nom d'utilisateur inconnu"}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-500 w-1/4">Firstname</p>
                <p className="text-lg font-semibold text-gray-700 w-3/4">
                  {data.user.firstname || "Nom inconnu"}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-500 w-1/4">Lastname</p>
                <p className="text-lg font-semibold text-gray-700 w-3/4">
                  {data.user.lastname || "Prénom inconnu"}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-500 w-1/4">Email</p>
                <p className="text-lg font-semibold text-gray-700 w-3/4">
                  {data.user.email || "Email inconnu"}
                </p>
              </div>
              {data.user.phone && (
                <div className="flex items-center">
                  <p className="text-sm text-gray-500 w-1/4">Phone</p>
                  <p className="text-lg font-semibold text-gray-700 w-3/4">
                    {data.user.phone}
                  </p>
                </div>
              )}
              {data.user.gender && (
                <div className="flex items-center">
                  <p className="text-sm text-gray-500 w-1/4">Gender</p>
                  <p className="text-lg font-semibold text-gray-700 w-3/4">
                    {data.user.gender}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <EditButton onClick={() => setIsVisible(true)} />
      </div>

      {isVisible && (
        <ProfileEditForm
          setIsVisible={setIsVisible}
          initialData={{
            firstname: data.user.firstname,
            lastname: data.user.lastname,
            email: data.user.email,
            username: data.user.username,
          }}
        />
      )}
    </main>
  );
};

export default UserProfile;
