'use client'
import { db } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

async function addDataToFireStore(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, "messages"),
      {
        name: name,
        email: email,
        message: message

      }
    );
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }

}
export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter()
  const handleSubmission = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(name, email, message);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");
      alert('Data added successfully');
      router.push('/userdata');
      
    }
    else {
      alert('Failed to add data');
    }
  };
  return (<>
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl font-bold m-10">Add Data to FireBase</h1>
      <form onSubmit={handleSubmission} className="max-w-md w-full bg-white p-6 mx-auto shadow-lg rounded-lg">
  <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Contact Us</h2>

  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Enter your name"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Enter your email"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
    <textarea
      id="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
      rows="4"
      className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Write your message here..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
  >
    Submit
  </button>
</form>

    </main>

  </>)
}