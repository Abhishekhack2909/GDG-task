import React from 'react';
const Speakers = () => {
  const speakers = [
    {
      name: "Workflow Automation",
      title: "Drag & Drop Builder",
      specialty: "Automate multi-step processes",
      image: "/demon-slayer-3840x5270-10716.jpg",
      bio: "Design complex automations in minutes: triggers, AI actions, human approvals, and integrations—no code required."
    },
    {
      name: "Predictive Analytics",
      title: "Real-Time Insights",
      specialty: "ML-powered forecasting",
      image: "/one-piece-luffy-gear-5-3840x4163-10747.jpg",
      bio: "Built-in models surface trends, anomalies, and revenue-impacting signals with self-updating dashboards."
    },
    {
      name: "Security & Governance",
      title: "Enterprise Controls",
      specialty: "Compliance & RBAC",
      image: "/spiderman2.jpg",
      bio: "SOC2-ready architecture with encryption, access policies, audit logging, and region-based data residency."
    }
  ];
  return (
    <section 
      id="speakers" 
      className="section-padding relative overflow-hidden mt-8 bg-enhanced"
      style={{
        backgroundImage: `url('/demon-slayer-3840x5270-10716.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-32 right-32 w-4 h-4 bg-accent-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-32 w-6 h-6 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-64 left-64 w-3 h-3 bg-secondary-400 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-white font-medium mb-6 shadow-2xl">
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
            Platform Capabilities
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>
            <span className="bg-black/60 px-4 py-2 rounded-2xl">Built for</span>
            <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent mt-2" style={{textShadow: 'none'}}>Modern Teams</span>
          </h2>
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto mb-6">
            <p className="text-xl text-white leading-relaxed">
              Everything you need to automate, analyze, and scale—without stitching together multiple tools. Flexible, secure,
              and optimized for rapid iteration.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 hover:border-primary-200 hover:bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)), url('${speaker.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-sm text-secondary-600 font-medium">
                    {speaker.specialty}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {speaker.bio}
                </p>
                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-3xl max-w-2xl mx-auto border border-gray-200">
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
              Explore the Full Platform
            </h3>
            <p className="text-gray-600 mb-6">
              See how Optivize AI unifies automation, analytics, and governance in a single, scalable workspace.
            </p>
            <button className="btn-primary">Get a Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Speakers;