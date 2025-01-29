import React from "react";

interface SaveButtonProps {
  onClick: () => void; // Fonction à appeler lors du clic
  // isEditing: boolean; // État pour savoir si on est en mode édition
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick }) => {
  return (
    <div className="mt-4 flex justify-end p-6">
      <button
        onClick={onClick} // Appelle la fonction passée en prop
        className="bg-customBlue text-white p-2 rounded-lg flex items-center gap-2 hover:bg-[#2d3748] cursor-pointer"
      >
        {/* {isEditing ? "Enregistrer Changement" : "Modifier Profile"} */}
        Enregistrer
      </button>
    </div>
  );
};

export default SaveButton;
