import React, { FC } from 'react'

const TabButton: FC<{ onClick: () => void, text: string, isActive: boolean }> = ({ text, onClick , isActive=false}) => {
    return (
        <button
            className={`p-3 ${isActive && 'border-b-2 border-primary'} rounded-md cursor-pointer`}
            onClick={onClick} // Appelle la fonction pour afficher/masquer les programmes passés
        >
            {text}
        </button>
    )
}

export default TabButton