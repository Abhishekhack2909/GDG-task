import React, { useState } from 'react';
const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedSession, setExpandedSession] = useState(null);
  // Repurposed: treat days as pricing tiers, sessions as plan features.
  const schedule = [
    {
      day: "Starter",
      date: "$0 / mo",
      theme: "Launch & Explore",
      sessions: [
        { time: "Included", title: "Unlimited workflow drafts", speaker: "Core Platform", type: "networking", description: "Create and test workflows without production limits." },
        { time: "Included", title: "1 Active Automation", speaker: "Usage", type: "keynote", description: "Keep one automation live while you iterate and learn." },
        { time: "Included", title: "Community Support", speaker: "Support", type: "workshop", description: "Access docs, templates, and community discussions." },
        { time: "Included", title: "Basic Analytics Dashboard", speaker: "Analytics", type: "talk", description: "Track run counts and success rates for active automation." },
        { time: "Included", title: "Single Integration", speaker: "Integrations", type: "panel", description: "Connect one external tool (CRM, DB, or messaging)." },
      ]
    },
    {
      day: "Pro",
      date: "$49 / mo",
      theme: "Scale & Optimize",
      sessions: [
        { time: "All Starter", title: "Up to 10 active automations", speaker: "Usage", type: "networking", description: "Run multiple production workflows simultaneously." },
        { time: "Included", title: "Advanced AI Actions", speaker: "AI", type: "keynote", description: "Fine-tune prompts, scoring, branching, and chaining." },
        { time: "Included", title: "Priority Email Support", speaker: "Support", type: "workshop", description: "Get faster responses from product specialists." },
        { time: "Included", title: "Custom Metrics & Dashboards", speaker: "Analytics", type: "talk", description: "Design dashboards around revenue, retention, or ops KPIs." },
        { time: "Included", title: "Versioning & Rollback", speaker: "Governance", type: "panel", description: "Safely iterate with automatic history and restore points." },
        { time: "Included", title: "Role-Based Access (RBAC)", speaker: "Security", type: "workshop", description: "Segment permissions by team, project, or environment." },
      ]
    },
    {
      day: "Enterprise",
      date: "Custom",
      theme: "Secure & Extend",
      sessions: [
        { time: "All Pro", title: "Unlimited automations & runs", speaker: "Usage", type: "networking", description: "Scale without usage ceilings across org units." },
        { time: "Included", title: "Dedicated Success Manager", speaker: "Success", type: "keynote", description: "Strategic onboarding, architecture reviews, and ROI tracking." },
        { time: "Included", title: "SAML SSO & SCIM", speaker: "Security", type: "workshop", description: "Centralize identity and automated provisioning." },
        { time: "Included", title: "Audit Logging & Export", speaker: "Compliance", type: "talk", description: "Meet regulatory requirements with immutable event logs." },
        { time: "Included", title: "Custom Integrations & APIs", speaker: "Platform", type: "panel", description: "Extend platform with private connectors and webhooks." },
        { time: "Included", title: "24/7 Premium Support", speaker: "Support", type: "ceremony", description: "Round-the-clock assistance for mission-critical workloads." },
      ]
    }
  ];
  const getSessionTypeColor = (type) => {
    const colors = {
      keynote: 'from-primary-500 to-primary-600',
      talk: 'from-secondary-500 to-secondary-600',
      workshop: 'from-accent-500 to-accent-600',
      panel: 'from-purple-500 to-purple-600',
      networking: 'from-gray-500 to-gray-600',
      ceremony: 'from-yellow-500 to-yellow-600'
    };
    return colors[type] || 'from-gray-500 to-gray-600';
  };
  const getSessionIcon = (type) => {
    const icons = {
      keynote: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      talk: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      workshop: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      panel: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      networking: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      ceremony: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    };
    return icons[type] || icons.talk;
  };
  return (
    <section 
      id="schedule" 
      className="section-padding relative overflow-hidden mt-8 bg-enhanced"
      style={{
        backgroundImage: `url('/comic-books-bg.jpg')`,
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
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-white font-semibold mb-8 shadow-2xl">
            <span className="w-3 h-3 bg-accent-400 rounded-full mr-4 animate-pulse shadow-lg"></span>
            Simple, Transparent Pricing
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9)' }}>
            <span className="drop-shadow-2xl">Choose the Plan</span>
            <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent drop-shadow-2xl">
              That Fits Your Team
            </span>
          </h2>
          <div className="bg-black/70 backdrop-blur-md rounded-2xl px-8 py-6 mb-12 max-w-4xl mx-auto shadow-2xl border border-white/20">
            <p className="text-xl text-white font-medium leading-relaxed drop-shadow-lg">
              Flexible tiers for startups, growing teams, and enterprises. Upgrade anytime as your automation needs expand.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
          {schedule.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeDay === index
                  ? 'bg-white text-primary-600 shadow-xl'
                  : 'glass-effect text-white hover:bg-white/20'
              }`}
            >
              <div className="text-center">
                <div className="font-display font-bold text-lg">{day.day}</div>
                <div className="text-sm opacity-80">{day.date}</div>
                <div className="text-xs mt-1 font-medium">{day.theme}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                {schedule[activeDay].day} Plan · {schedule[activeDay].theme}
              </h3>
              <p className="text-white/80">{schedule[activeDay].date}</p>
            </div>
            <div className="space-y-4">
              {schedule[activeDay].sessions.map((session, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10"
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedSession(expandedSession === `${activeDay}-${index}` ? null : `${activeDay}-${index}`)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getSessionTypeColor(session.type)} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                          {getSessionIcon(session.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="font-display font-bold text-lg text-white truncate">{session.title}</h4>
                            <span className="text-accent-400 font-semibold text-sm sm:ml-4 flex-shrink-0">{session.time}</span>
                          </div>
                          <p className="text-white/70 text-sm">{session.speaker}</p>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <svg
                          className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                            expandedSession === `${activeDay}-${index}` ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={`transition-all duration-300 overflow-hidden ${
                    expandedSession === `${activeDay}-${index}` ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6 border-t border-white/10">
                      <p className="text-white/80 leading-relaxed mt-4">{session.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getSessionTypeColor(session.type)} text-white`}>
                          {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                        </span>
                        <button className="text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors">Learn More</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="btn-primary"><span className="flex items-center justify-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>Upgrade or Talk to Sales</span></button>
        </div>
      </div>
    </section>
  );
};
export default Schedule;