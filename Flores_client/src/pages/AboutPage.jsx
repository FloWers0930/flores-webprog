function TeamCard({ name, role, image }) {
  return (
    <div className="group border-[1.5px] border-[#1a1a18] rounded-md p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(26,26,24,1)] transition-all duration-200 hover:-translate-y-0.5">
      <div className="w-14 h-14 rounded-full overflow-hidden mb-3 border border-[#e8e6e0]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h4 className="font-[Syne] text-base font-bold mb-1">
        {name}
      </h4>
      <span className="text-[11px] text-[#9b9890] tracking-[0.08em] uppercase">
        {role}
      </span>
    </div>
  )
}

function KpiCard({ number, label }) {
  return (
    <div className="border-[1.5px] border-[#1a1a18] rounded-md py-5 px-6 bg-white hover:shadow-[4px_4px_0px_0px_rgba(26,26,24,1)] transition-shadow duration-200">
      <div className="font-[Syne] text-[32px] font-extrabold leading-none mb-1.5">
        {number}
      </div>
      <div className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#9b9890]">
        {label}
      </div>
    </div>
  )
}

function AboutPage() {
  const team = [
    { name: "Alex Rivera", role: "Lead Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "Jordan Kim", role: "Frontend Dev", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { name: "Sam Flores", role: "UX Researcher", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" },
    { name: "Morgan Lee", role: "Product Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" }
  ]

  return (
    <main className="w-full">
      {/* About Hero - Full Width */}
      <section className="border-b-[1.5px] border-[#1a1a18] py-16 px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#9b9890] mb-4">
            About
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="font-[Syne] text-[48px] lg:text-[56px] font-extrabold leading-[1.1] mb-6">
                We design <span className="text-[#6b6860]">systems</span>, not just screens.
              </h1>
              <div className="space-y-4 max-w-[600px]">
                <p className="text-base leading-relaxed text-[#6b6860]">
                  Wireframe Studio is a design and development collective focused on building structured, scalable UI frameworks that help teams ship faster without sacrificing quality.
                </p>
                <p className="text-base leading-relaxed text-[#6b6860]">
                  Our approach starts with wireframes — low-fidelity skeletons that expose layout problems early, before a single line of production code is written.
                </p>
                <p className="text-base leading-relaxed text-[#6b6860]">
                  We believe great design is invisible. When a layout works perfectly, users don't notice it — they just move through it effortlessly.
                </p>
              </div>
              
              <div className="mt-10 flex gap-6">
                <div className="text-center">
                  <div className="font-[Syne] text-3xl font-extrabold">5+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#9b9890] mt-1">Years</div>
                </div>
                <div className="w-px bg-[#d8d5ce]" />
                <div className="text-center">
                  <div className="font-[Syne] text-3xl font-extrabold">50+</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#9b9890] mt-1">Clients</div>
                </div>
                <div className="w-px bg-[#d8d5ce]" />
                <div className="text-center">
                  <div className="font-[Syne] text-3xl font-extrabold">100%</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#9b9890] mt-1">Remote</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#9b9890] mb-4">
                Our Team
              </p>
              <div className="grid grid-cols-2 gap-4">
                {team.map((member, index) => (
                  <TeamCard key={index} {...member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Full Width */}
      <section className="py-16 px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#9b9890] mb-2">
                By the Numbers
              </p>
              <h2 className="font-[Syne] text-xl font-bold">
                What we've shipped
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <KpiCard number="12" label="Projects" />
            <KpiCard number="08" label="Sections" />
            <KpiCard number="24" label="Screens" />
            <KpiCard number="04" label="Layouts" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage