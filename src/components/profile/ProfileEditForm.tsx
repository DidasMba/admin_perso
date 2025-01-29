import React from "react";
import { MdClose } from "react-icons/md";
import { useFormik } from "formik";
import SaveButton from "../common/buttons/SaveButton";

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
  console.log("Initial Data:", initialData);
  // Utilisation de useFormik pour gérer l'état et la soumission du formulaire
  const formik = useFormik({
    initialValues: initialData || { firstname: "", lastname: "", email: "" },
    onSubmit: (values) => {
      onSubmit(values);
      setIsVisible(false);
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
          <SaveButton onClick={() => setIsVisible(true)} />
        </form>
      </div>
    </div>
  );
};

export default ProfileEditForm;
