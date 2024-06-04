export default function Home() {
  return (
    <>
      <nav className="navbar mx-auto max-w-5xl px-8">
        <span className="text-xl font-black tracking-tight">GamePlan.Guru</span>
        <div className="flex pl-8 md:pl-12 lg:pl-16 gap-6 md:gap-8 lg:gap-10">
          <a href="#features" className="opacity-80 link link-hover">Features</a>
          <a href="#pricing" className="opacity-80 link link-hover">Pricing</a>
          <a href="#faq" className="opacity-80 link link-hover">Questions</a>
        </div>
      </nav>
      <div className="hero min-h-[80vh]">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Training that Actually Works
            </h1>
            <p className="py-4 opacity-80 text-lg">
              Stop guessing your workouts and make real progress. Get personalized recommendations
              based on your skills, strength, and schedule to help you become a
              better player.
            </p>
            <a className="btn btn-primary text-lg" href="/generator">Get Started -&gt;</a>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <span className="stat-value">50+</span>
          <span className="stat-title">Exercises</span>
        </div>
      </div>
    </>
  );
}
