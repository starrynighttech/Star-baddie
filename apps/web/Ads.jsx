export default function Ads() {
  const ads = [
    { id: 1, title: "Watch Video Ad", reward: 0.5 },
    { id: 2, title: "Engage with Content", reward: 1 }
  ]

  return (
    <div className="p-8 bg-black text-white min-h-screen">

      <h1 className="text-3xl mb-6">Engage & Earn</h1>

      <div className="grid gap-4">

        {ads.map(ad => (
          <div key={ad.id} className="bg-gray-900 p-6 rounded-xl flex justify-between items-center">

            <div>
              <h2 className="text-lg">{ad.title}</h2>
              <p className="opacity-60">Reward: ${ad.reward}</p>
            </div>

            <button className="px-4 py-2 bg-white text-black rounded-lg">
              Start
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}
