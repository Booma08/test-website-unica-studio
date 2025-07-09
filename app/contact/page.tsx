"use client";

import Head from "next/head";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };


    return (
        <>
            <Head>
                <title>Contactez Uncia Studio</title>
            </Head>

            <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white text-black">
                <div className="max-w-xl w-full text-center">
                    <h1 className="text-4xl font-bold mb-4">Vous avez un projet ? Parlons-en !</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Que vous soyez une marque, un créateur ou un studio, je serais ravi de collaborer avec vous pour donner vie à vos idées en 3D.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-gray-200">
                            <input
                                type="text"
                                name="name"
                                placeholder="Votre nom"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Votre email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
                            />
                            <textarea
                                name="message"
                                placeholder="Décrivez votre projet..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-blue-900 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-500 transition-all duration-200"
                            >
                                ✉️ Envoyer
                            </button>
                        </form>
                    ) : (
                        <div className="text-green-600 text-lg font-semibold">Merci ! Votre message a bien été envoyé.</div>
                    )}
                </div>
            </main>
        </>
    );
}
