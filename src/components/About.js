import React from 'react';
const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l1 .75L12 19l2 1.75 1-.75-.75-3M6 10h12M6 6h12M6 14h12" />
        </svg>
      ),
      title: "Automated Workflows",
      description: "Eliminate manual tasks with drag-and-drop AI process automation."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        </svg>
      ),
      title: "Predictive Analytics",
      description: "Forecast outcomes with built-in ML models tuned for business KPIs."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11c0 7-7 10-7 10S5 18 5 11a7 7 0 1114 0z" />
        </svg>
      ),
      title: "Security & Compliance",
      description: "Enterprise-grade encryption, role-based access, and audit trails."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Seamless Integrations",
      description: "Connect CRMs, data warehouses, and collaboration tools in minutes."
    }
  ];
  return (
    <section 
      id="about" 
      className="section-padding relative overflow-hidden mt-8"
      style={{
        backgroundImage: `url('/123.jpg')`,
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
            Why Optivize AI
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>
            <span className="bg-black/60 px-4 py-2 rounded-2xl">One Platform</span>
            <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent mt-2" style={{textShadow: 'none'}}>Endless Possibilities</span>
          </h2>
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto mb-6">
            <p className="text-xl text-white leading-relaxed">
              Optivize AI helps teams automate repetitive work, surface real-time insights, and adapt faster—without writing code.
              Built for scale, security, and speed so you focus on growth, not glue work.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100 hover:border-primary-200"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Ready to Scale with AI?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start automating today and unlock measurable productivity, cost savings, and smarter decisions in weeks—not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105">
                Book a Demo
              </button>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
export default About;