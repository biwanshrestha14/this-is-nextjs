"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function AuthComponent() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={session.user.image || "/placeholder.svg"}
              alt={session.user.name || "User avatar"}
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-500"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Welcome, {session.user.name}!</h2>
            <p className="text-gray-600">{session.user.email}</p>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Welcome</h2>
        <p className="text-gray-600 mb-6 text-center">Please sign in to continue</p>
        <button
          onClick={() => signIn()}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Sign in
        </button>
      </div>
    </div>
  )
}

