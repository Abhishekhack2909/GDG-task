import React from 'react';

const Venue = () => {
  // Core infrastructure feature cards
  const venueFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4" />
        </svg>
      ),
      title: 'Multi-Region Hosting',
      description: 'Deploy automations across geo regions for latency & compliance.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11c0 7-7 10-7 10S5 18 5 11a7 7 0 1114 0z" />
        </svg>
      ),
      title: 'Data Residency Controls',
      description: 'Choose where data is stored with audit trail visibility.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: '99.99% Uptime SLA',
      description: 'Redundant infrastructure with proactive monitoring.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Advanced Security',
      description: 'Encryption, SSO, RBAC, secrets vault & continuous scanning.'
    }
  ];

  const transportOptions = [
    {
      mode: "Deployment Options",
      details: "Cloud, Private Cloud, or Hybrid edge execution",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 4 9-4m-9 4v10" /></svg>
      )
    },
    {
      mode: "API & Webhooks",
      details: "Bi-directional sync with external systems",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      )
    },
    {
      mode: "Observability",
      details: "Run tracing, metrics, structured logs",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h10M4 14h7M4 18h4" /></svg>
      )
    },
    {
      mode: "Disaster Recovery",
      details: "Automated backups & point-in-time restore",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    }
  ];

  const nearbyHotels = [
    {
      name: "Security & Compliance",
      distance: "SOC2 • GDPR",
      rating: 5,
      price: "Included",
      features: ["Encryption at rest", "SSO & SCIM", "Audit logs"]
    },
    {
      name: "Scalability",
      distance: "Elastic",
      rating: 4,
      price: "Included",
      features: ["Auto scaling", "Queue management", "Retries & DLQ"]
    },
    {
      name: "Support Options",
      distance: "24/7*",
      rating: 4,
      price: "Tier-based",
      features: ["Knowledge base", "Live chat", "Success manager*"]
    }
  ];

  return (
    <section
      id="venue"
      className="section-padding relative overflow-hidden mt-8 bg-enhanced"
      style={{
        backgroundImage: `url('/tanjiro-kamado-5120x2880-23649.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-32 right-32 w-4 h-4 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-6 h-6 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-64 left-64 w-3 h-3 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-white font-semibold mb-8 shadow-2xl">
            <span className="w-3 h-3 bg-accent-400 rounded-full mr-4 animate-pulse shadow-lg"></span>
            Infrastructure & Support
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9)' }}>
            <span className="drop-shadow-2xl">Enterprise-Ready</span>
            <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent drop-shadow-2xl">Architecture at Scale</span>
          </h2>
          <div className="bg-black/70 backdrop-blur-md rounded-2xl px-8 py-6 mb-12 max-w-4xl mx-auto shadow-2xl border border-white/20">
            <p className="text-xl text-white font-medium leading-relaxed drop-shadow-lg">
              A globally distributed platform built for reliability, performance, and trust—so your automations run
              seamlessly while meeting stringent compliance requirements.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div
              className="h-96 rounded-3xl bg-gradient-to-br from-primary-400 to-secondary-400 mb-8 relative overflow-hidden group"
              style={{
                backgroundImage: `
                  linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%),
                  url('/comic-books-bg.jpg')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-display font-bold text-2xl mb-2">Global Edge Network</h3>
                <p className="text-white/90">Latency-aware routing & regional execution nodes</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {venueFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-display font-bold text-lg text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-2xl mb-8 shadow-lg bg-white p-10 border border-gray-100 flex flex-col items-center justify-center h-[400px] text-center">
              <h4 className="font-display font-bold text-2xl text-gray-900 mb-4">Global Infrastructure</h4>
              <p className="text-gray-600 max-w-md mx-auto mb-6">Multi-region execution nodes, latency-aware routing, and automated failover ensure your automations run reliably worldwide.</p>
              <div className="grid grid-cols-3 gap-6 w-full max-w-xl">
                {['NA-East','EU-West','AP-South'].map(r => (
                  <div key={r} className="rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 border border-gray-200 p-4">
                    <p className="text-sm font-semibold text-gray-700">{r}</p>
                    <p className="text-xs text-gray-500 mt-1">Active</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Platform Capabilities</h3>
              <div className="space-y-4">
                {transportOptions.map((option, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{option.mode}</h4>
                      <p className="text-gray-600 text-sm">{option.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="font-display font-bold text-3xl text-white text-center mb-12 text-shadow">Operational Pillars</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {nearbyHotels.map((hotel, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display font-bold text-xl text-gray-900">{hotel.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < hotel.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary-600 font-semibold">{hotel.distance}</span>
                  <span className="text-2xl font-bold text-gray-900">{hotel.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {hotel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl mb-6">Need Architecture Guidance?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Our solutions team helps with migration planning, scaling strategies, and security reviews.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Support
                </span>
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Docs & Guides
                </span>
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

export default Venue;