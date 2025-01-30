'use client'
import { db } from '../../config/firebase'
import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link';

async function getDataFromFireStore() {
    try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const messages = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return messages;
    } catch (error) {
        console.error("Error getting documents:", error);
        return [];
    }
}

export default function UserList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const messages = await getDataFromFireStore();
            setData(messages);
        }
        fetchData();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <h1 className="text-3xl font-bold mb-5">Fetched Messages</h1>

            {data.length > 0 ? (
                <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
                    {data.map((msg) => (
                        <li key={msg.id} className="p-3 border-b last:border-b-0">
                            <p className="text-gray-700"><strong>Name:</strong> {msg.name}</p>
                            <p className="text-gray-700"><strong>Email:</strong> {msg.email}</p>
                            <p className="text-gray-700"><strong>Message:</strong> {msg.message}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">No messages found.</p>
            )}
            <Link href='/'> Go To home </Link>
        </main>
    );
}
