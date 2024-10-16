/** @format */

"use client";
import Articles from "@/app/_components/dasboard/articles";
import Event from "@/app/_components/dasboard/event";
import Program from "@/app/_components/dasboard/program";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { tabItems } from "@/app/_utils/constast";
// import Programme from ;

export default function Dashboard() {
    const [toggleTabBar, setToggleTabBar] = useState("programs"); // État pour gérer l'affichage des programmes
    const userName = "Christian Banza"; // Nom de la personne, tu peux le remplacer dynamiquement
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [errorImage, setErrorImage] = useState<string | null>(null);
    const maxFileSizeMB = 2;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileSizeMB = file.size / (1024 * 1024); // Convert file size to MB

            if (fileSizeMB > maxFileSizeMB) {
                setErrorImage(
                    `File size exceeds the 2 MB limit. Your file size is ${fileSizeMB.toFixed(
                        2
                    )} MB.`
                );
                setPreviewImage(null); // Clear the preview
                return;
            }

            setErrorImage(null); // Clear previous errors
            const imageUrl = URL.createObjectURL(file); // Create a preview URL
            setPreviewImage(imageUrl);
        }
    };

    const handleTabBar = (tab: string) => {
        setToggleTabBar(tab);
    };

    const renderHistory = () => {
        switch (toggleTabBar) {
            case "programs":
                return <Program />;
            case "event":
                return <Event />;
            case "article":
                return <Articles />;
        }
    };

    return (
        <main className='flex flex-col lg:flex-row items-start gap-8 p-6'>
            <div className='max-w-[279px] w-full p-4 bg-gray-200 rounded-md'>
                <div className='flex flex-col gap-4 items-center'>
                    <div className='max-w-[150px] mx-auto flex flex-col items-center'>
                        {previewImage ? (
                            <div className='max-w-[142px] w-full h-[142px] h-full rounded-full'>
                                <img
                                    className='w-full h-full rounded-full object-cover'
                                    id='updload'
                                    src={previewImage}
                                    alt={"profile"}
                                />
                            </div>
                        ) : (
                            <FaUserCircle
                                size={80}
                                className='text-4xl text-primary mb-4 max-w-[142px] w-full max-h-[142px] h-full'
                            />
                        )}
                    </div>
                    {errorImage && (
                        <p className='text-xs md:text-sm text-red-600'>
                            {errorImage}
                        </p>
                    )}

                    <label
                        id='upload-image'
                        className='bg-gray-300 cursor-pointer px-5 py-2 flex flex-row gap-2 border border-gray-300 rounded-md'
                    >
                        <input
                            type='file'
                            className='hidden'
                            name='image'
                            onChange={handleFileChange}
                            accept='image/*'
                            id='upload-image'
                        />
                        <AiOutlineDownload size={20} />{" "}
                        <span>Telecharger photo</span>
                    </label>
                </div>

                <div className='flex flex-col mt-4'>
                    {" "}
                    {/* Centrer le texte et ajouter un espacement supérieur */}
                    <h1 className='font-bold text-lg mb-1'>{userName}</h1>{" "}
                    {/* Ajout d'un espacement inférieur */}
                    <p className='text-gray-600'>Localisation</p>{" "}
                    {/* Ajout d'une couleur pour le texte de localisation */}
                </div>
            </div>

            {/* other column */}
            <div className=' flex-1 p-4 flex flex-col gap-8'>
                {/* Salutation et bouton d'édition */}
                <div className='flex flex-col gap-6 items-start'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl lg:text-3xl font-bold'>
                            Salut {userName} !
                        </h2>
                        <p className='text-sm text-gray-500'>
                            A joiner en 2022
                        </p>
                    </div>
                    <button className='px-6 py-3 border border-primary font-semibold hover:bg-secondary hover:text-white duration-300 ease-in-out rounded-md'>
                        Modifier le Profile
                    </button>
                </div>

                {/* Historique */}
                <div className='flex flex-col gap-6'>
                    <h2 className='text-2xl lg:text-3xl font-bold'>
                        Historique
                    </h2>
                    <ul className='flex space-x-4 border-b border-gray-200'>
                        {tabItems.map((item) => (
                            <li
                                key={item.id}
                                className={`p-3 font-bold cursor-pointer ${
                                    toggleTabBar === item.id
                                        ? "border-b-2 border-black"
                                        : ""
                                }`}
                                onClick={() => handleTabBar(item.id)} // Appelle la fonction pour afficher/masquer les programmes passés
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                    <div>{renderHistory()}</div>
                </div>
            </div>
        </main>
    );
}
