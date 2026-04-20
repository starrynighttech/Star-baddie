export default function Referral() {
  const code = "ABC123"

  return (
    <div className="p-8 bg-black text-white min-h-screen">

      <h1 className="text-3xl mb-6">Referral Program</h1>

      <div className="bg-gray-900 p-6 rounded-xl text-center">

        <p className="mb-2">Your Referral Code</p>

        <p className="text-2xl font-bold mb-4">{code}</p>

        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="px-6 py-2 bg-white text-black rounded-lg"
        >
          Copy Code
        </button>

      </div>

    </div>
  )
}
