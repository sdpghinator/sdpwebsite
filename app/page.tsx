export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
		<div className="absolute inset-0 bg-gradient-to-br from-[#1D3B82] via-[#112E51] to-black" />

  		<div className="relative max-w-6xl mx-auto px-6 py-24">
          <span className="inline-block bg-[#D4A017] text-black px-4 py-2 rounded-full font-semibold text-sm">
            RECRUITING IS TOO IMPORTANT TO WING IT
          </span>

          <div className="mt-10">
  			<h1 className="text-6xl md:text-8xl font-black leading-none text-white">
    			Signing Day
  			</h1>

  			<h1 className="text-6xl md:text-8xl font-black leading-none text-[#D4A017] mt-2">
    			Project
  			</h1>
		  </div>

          <p className="mt-6 text-xl text-slate-200 max-w-3xl">
            The football recruiting process can feel overwhelming.
          </p>

          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Signing Day Project helps football families make informed recruiting decisions,
            avoid costly mistakes, and build a plan they can execute with confidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#start" className="bg-[#D4A017] text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90">
              Start Your Signing Day Project
            </a>
            <a href="#resources" className="border border-white px-6 py-3 rounded-xl font-semibold">
              Explore Resources
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
            Most Football Families Are Guessing.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {[
              'Which camps are actually worth attending?',
              'What level of football is realistic?',
              'How should we build a highlight film?',
              'When should coaches be contacted?',
              'Which recruiting services provide real value?',
              'Are we making the right decisions?',
            ].map((item) => (
              <div key={item} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#112E51]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white">What We Help With</h2>
            <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
              Recruiting is not one big decision. It is a series of important decisions made over several years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              ['🗺️','Recruiting Roadmap','Understand what to do, when to do it, and how to avoid common recruiting mistakes.'],
              ['🎥','Highlight Film Strategy','Learn how to create film that helps coaches evaluate an athlete quickly and effectively.'],
              ['🏈','Camps & Showcases','Determine which camps and showcases provide the best value for your recruiting goals.'],
              ['📱','Coach Relationships','Build relationships through effective communication, outreach, and follow-up.']
            ].map(([icon,title,body]) => (
              <div key={title} className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                <div className="text-5xl">{icon}</div>
                <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="bg-slate-950 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-white">
            The SDP Framework
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {['Self Assess','Discover Opportunities','Pursue Relationships'].map((title,i) => (
              <div key={title} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                <div className="text-6xl font-black text-[#D4A017]">{'SDP'[i]}</div>
                <h3 className="text-2xl font-bold mt-4 text-white">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="py-24 text-center bg-[#112E51]">
        <h2 className="text-5xl font-bold text-white">
          Your Recruiting Journey Starts Here
        </h2>

        <p className="mt-6 text-xl text-slate-300">
          Stop guessing. Build a plan. Take control of the recruiting process
        </p>

        <button className="mt-8 bg-[#D4A017] text-black px-8 py-4 rounded-xl font-bold">
          Start Your Signing Day Project
        </button>
      </section>
    </main>
  );
}
