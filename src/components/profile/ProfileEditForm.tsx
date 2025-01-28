// // import { FaUserCircle, FaCamera, FaImage } from "react-icons/fa";
// import { MdClose } from "react-icons/md";

// interface ProfileEditForm {
//   data: any; // Le type exact dépend de la structure de tes données
// }

// const ProfileEditForm: React.FC<{
//   setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }> = ({ setIsVisible }) => {
//   return (
//     <div className="fixed w-full flex items-center z-[99999] h-svh  inset-0 backdrop-blur-md">
//       <div className="max-w-lg bg-white w-full rounded-md mx-auto">
//         <div className="flex justify-end">
//           <button onClick={() => setIsVisible(false)}>
//             <MdClose size={20} />
//           </button>
//         </div>

//         {/* Form Content */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* First Name */}
//           <div>
//             <label
//               htmlFor="firstname"
//               className="block text-sm font-medium text-gray-600"
//             >
//               First Name
//             </label>
//             <input
//               type="text"
//               id="firstname"
//               name="firstname"
//               value={formData.firstname}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               placeholder="Enter your first name"
//               required
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label
//               htmlFor="lastname"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lastname"
//               name="lastname"
//               value={formData.lastname}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               placeholder="Enter your last name"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileEditForm;

import React from "react";
import { MdClose } from "react-icons/md";
import { useFormik } from "formik";

interface ProfileEditFormProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  initialData: {
    firstname: string;
    lastname: string;
    email: string;
  };
  onSubmit: (updatedData: {
    firstname: string;
    lastname: string;
    email: string;
  }) => void;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({
  setIsVisible,
  initialData,
  onSubmit,
}) => {
  // Utilisation de useFormik pour gérer l'état et la soumission du formulaire
  const formik = useFormik({
    initialValues: initialData,
    onSubmit: (values) => {
      onSubmit(values); // On passe les données mises à jour au parent
      setIsVisible(false); // Fermer le modal après la soumission
    },
  });

  return (
    <div className="fixed w-full flex items-center z-[99999] h-screen inset-0 backdrop-blur-md">
      <div className="max-w-lg bg-white w-full rounded-md mx-auto p-6 shadow-lg">
        <div className="flex justify-end">
          <button onClick={() => setIsVisible(false)} aria-label="Close">
            <MdClose size={20} />
          </button>
        </div>

        {/* Formulaire avec Formik */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Prénom */}
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Nom */}
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Bouton de soumission */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditForm;
