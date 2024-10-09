'use client'
import Articles from '@/app/_components/dasboard/articles';
import Event from '@/app/_components/dasboard/event';
import Program from '@/app/_components/dasboard/program';
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
// import Programme from ; 

export default function Dashboard() {
  const [toggleTabBar, setToggleTabBar] = useState("programs"); // État pour gérer l'affichage des programmes
  const userName = "Christian Banza"; // Nom de la personne, tu peux le remplacer dynamiquement

  const handleTabBar = (tab: string) => {
    setToggleTabBar(tab);
  }

  const renderHistory = () => {
    switch (toggleTabBar) {
      case "programs":
        return <Program />
      case "event":
        return <Event />
      case "article":
        return <Articles />
    }
  }

  return (
    <main className='flex flex-col lg:flex-row items-start gap-8 p-6'>
     <div className='max-w-[279px] w-full p-4 bg-gray-200 rounded-md'>
  <div className='max-w-[150px] mx-auto flex flex-col items-center'>
    <FaUserCircle size={80} className='text-4xl text-primary mb-4' />
    <button className='hover:bg-customHoverBlue text-black px-4 py-2 border-2 border-gray-300 rounded-md'>Télécharger une photo</button>
  </div>

  <div className='flex flex-col items-center mt-4'> {/* Centrer le texte et ajouter un espacement supérieur */}
    <h1 className='font-bold text-lg mb-1'>{userName}</h1> {/* Ajout d'un espacement inférieur */}
    <p className='text-gray-600'>Localisation</p> {/* Ajout d'une couleur pour le texte de localisation */}
  </div>
</div>



      <div className=' flex-1 p-4'>

        {/* Salutation et bouton d'édition */}
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-semibold'>Salut {userName} !</h2>
          <button className=' text-black px-4 py-2 border-2 border-gray-300 hover:bg-customHoverBlue rounded-md'>Éditer Profil</button>
        </div>

        {/* Historique */}
        <div className=''>
          <h3 className='text-xl font-bold '>Historique</h3>
          <ul className='flex space-x-4'>
            <li
               className={`p-3 font-bold rounded-md cursor-pointer ${toggleTabBar === "programs" ? 'border-b-2 border-black' : ''}`}
              onClick={() => handleTabBar("programs")} // Appelle la fonction pour afficher/masquer les programmes passés
            >
              Programme
            </li>
            <li
              className={`p-3 font-bold rounded-md cursor-pointer ${toggleTabBar === "event" ? 'border-b-2 border-black' : ''}`}
              onClick={() => handleTabBar("event")}
            >
              Événement
            </li>
           <li
              className={`p-3 font-bold rounded-md cursor-pointer ${toggleTabBar === "article" ? 'border-b-2 border-black' : ''}`}
              onClick={() => handleTabBar("article")}
            >
              Articles
            </li>
          </ul>
          <div>
            {renderHistory()}
          </div>
        </div>

      </div>


    </main>
  )
}
