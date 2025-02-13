// import React from "react";
// import { FaEnvelope, FaVenusMars } from "react-icons/fa";
// import Paragraph from "../common/Paragraph";

// interface UserInfoProps {
//   user: {
//     firstname?: string;
//     lastname?: string;
//     email?: string;
//     gender?: string;
//   };
// }

// const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
//   return (
//     <div className="bg-white mt-20 p-6 text-center shadow-md rounded-lg">
//       <Paragraph
//         text={`${user.firstname || "Prénom inconnu"} ${
//           user.lastname || "Nom inconnu"
//         }`}
//       />

//       {user.email && (
//         <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
//           <FaEnvelope /> {user.email}
//         </p>
//       )}

//       <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
//         <FaVenusMars /> Genre: {user.gender || "Non spécifié"}
//       </p>
//     </div>
//   );
// };

// export default UserInfo;
