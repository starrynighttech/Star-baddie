export default function Home() {
  return (
    <div className="h-screen w-full text-white">
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/smoke.mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full backdrop-blur-sm">
        <h1 className="text-5xl font-bold tracking-widest">
          Earn Together
        </h1>

        <p className="mt-4 opacity-80">
          Engage • Connect • Earn Rewards
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl">
          Get Started
        </button>
      </div>
    </div>
  )
}
