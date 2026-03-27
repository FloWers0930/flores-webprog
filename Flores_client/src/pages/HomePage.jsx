import Button from '../Components/Button'

const features = [
  {
    tag: 'Design',
    title: 'Layout Systems',
    description: 'Structured grids and spacing rules that ensure visual consistency across every screen and component.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
  },
  {
    tag: 'Components',
    title: 'Reusable Blocks',
    description: 'Modular UI elements built once and reused everywhere — buttons, cards, navbars, and more.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop'
  },
  {
    tag: 'Workflow',
    title: 'Rapid Prototyping',
    description: 'From concept to clickable prototype in minutes using a streamlined wireframe-first approach.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop'
  }
]

function KpiCard({ number, label }) {
  return (
    <div className="border-[1.5px] border-[#1a1a18] rounded-md p-5 bg-white hover:shadow-[4px_4px_0px_0px_rgba(26,26,24,1)] transition-shadow duration-200">
      <div className="font-[Syne] text-[28px] font-extrabold leading-none mb-1.5">
        {number}
      </div>
      <div className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#9b9890]">
        {label}
      </div>
    </div>
  )
}

function FeatureCard({ tag, title, description, image }) {
  return (
    <article className="group border-[1.5px] border-[#1a1a18] rounded-md bg-white overflow-hidden flex flex-col h-full hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(26,26,24,1)] transition-all duration-200">
      <div className="h-[180px] overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-[#1a1a18]/0 group-hover:bg-[#1a1a18]/5 transition-colors duration-200" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[9px] font-semibold tracking-[0.16em] uppercase text-[#9b9890] mb-2">
          {tag}
        </p>
        <h3 className="font-[Syne] text-[15px] font-bold mb-2 group-hover:text-[#6b6860] transition-colors">
          {title}
        </h3>
        <p className="text-[12.5px] leading-relaxed text-[#6b6860] flex-1">
          {description}
        </p>
        <div className="mt-4 pt-4 border-t border-[#e8e6e0] flex items-center gap-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#9b9890] group-hover:text-[#1a1a18] transition-colors">
          Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </article>
  )
}

function HomePage() {
  return (
    <main className="w-full">
      {/* Hero - Full Width */}
      <section className="border-b-[1.5px] border-[#1a1a18] py-16 px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto">
          <div>
            <div className="inline-block mb-4 px-3 py-1 border border-[#d8d5ce] rounded-full">
              <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#9b9890]">
                Hero Section
              </span>
            </div>
            <h1 className="font-[Syne] text-[52px] lg:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-6">
              Welcome to <span className="text-[#6b6860]">Wireframe</span> Studio Layout
            </h1>
            <p className="text-base leading-relaxed text-[#6b6860] max-w-[480px] mb-8">
              Discover the art of wireframing with a simple layout system for hero content, key numbers, and feature cards.
            </p>
            <div className="flex gap-3">
              <Button>Learn More</Button>
              <button className="px-5 py-2.5 border-[1.5px] border-[#1a1a18] rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase hover:bg-[#1a1a18] hover:text-white transition-colors">
                View Work
              </button>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-lg overflow-hidden border-[1.5px] border-[#1a1a18]">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=750&fit=crop" 
              alt="Wireframe studio workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-md border border-[#1a1a18]">
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase">Studio V.2.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* KPI - Full Width */}
      <section className="border-b-[1.5px] border-[#1a1a18] py-16 px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#9b9890] mb-2">
                KPI Section
              </p>
              <h2 className="font-[Syne] text-xl font-bold">
                Quick overview blocks
              </h2>
            </div>
            <span className="text-[10px] text-[#9b9890] tracking-[0.1em] uppercase">Updated daily</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <KpiCard number="12" label="Projects" />
            <KpiCard number="08" label="Sections" />
            <KpiCard number="24" label="Screens" />
            <KpiCard number="04" label="Layouts" />
          </div>
        </div>
      </section>

      {/* Feature Cards - Full Width */}
      <section className="py-16 px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#9b9890] mb-2">
                Feature Cards
              </p>
              <h2 className="font-[Syne] text-xl font-bold">
                Simple wireframe cards
              </h2>
            </div>
            <button className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#9b9890] hover:text-[#1a1a18] transition-colors flex items-center gap-1">
              View all features <span>→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage