"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Comment {
    id: number;
    content: string;
    rating: number;
    createdAt: string;
    user: {
        firstname: string;
        lastname: string;
        avatar: string;
    };
    event: {
        theme: string;
    };
}

const FeedbackPage = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch comments on page load
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get("/api/admin/feedback/comments");
                setComments(response.data.data);
                setLoading(false);
            } catch (err) {
                setError("Erreur lors du chargement des commentaires.");
                setLoading(false);
            }
        };
        fetchComments();
    }, []);

    if (loading) {
        return <p>Chargement des commentaires...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Feedback des Événements</h1>
            {comments.length === 0 ? (
                <p>Aucun commentaire pour le moment.</p>
            ) : (
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Utilisateur</th>
                            <th className="py-2">Événement</th>
                            <th className="py-2">Commentaire</th>
                            <th className="py-2">Note</th>
                            <th className="py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((comment) => (
                            <tr key={comment.id} className="border-b">
                                <td className="py-2">
                                    <div className="flex items-center">
                                        <img
                                            src={comment.user.avatar}
                                            alt={comment.user.firstname}
                                            className="w-10 h-10 rounded-full mr-2"
                                        />
                                        <span>
                                            {comment.user.firstname}{" "}
                                            {comment.user.lastname}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-2">{comment.event.theme}</td>
                                <td className="py-2">{comment.content}</td>
                                <td className="py-2">{comment.rating}/5</td>
                                <td className="py-2">
                                    {new Date(
                                        comment.createdAt
                                    ).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FeedbackPage;
