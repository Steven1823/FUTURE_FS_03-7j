export default function EnvTestPage() {
  return (
    <div className="p-12 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Environment Variables Test</h1>

      <div className="bg-zinc-800 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Blob Storage</h2>
        <p className="mb-2">BLOB_READ_WRITE_TOKEN: {process.env.BLOB_READ_WRITE_TOKEN ? "✅ Set" : "❌ Not set"}</p>
        <p className="text-sm text-gray-400">Note: For security, we don't display the actual token value.</p>
      </div>

      <div className="bg-zinc-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Firebase Config</h2>
        <p className="mb-1">
          NEXT_PUBLIC_FIREBASE_API_KEY: {process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "✅ Set" : "❌ Not set"}
        </p>
        <p className="mb-1">
          NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: {process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? "✅ Set" : "❌ Not set"}
        </p>
        <p className="mb-1">
          NEXT_PUBLIC_FIREBASE_PROJECT_ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? "✅ Set" : "❌ Not set"}
        </p>
      </div>
    </div>
  )
}
