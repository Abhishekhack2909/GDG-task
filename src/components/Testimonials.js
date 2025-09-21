import React from 'react';

const testimonials = [
  {
    quote: 'The flexibility of their pricing plans allowed us to scale',
    body: 'Software for accounting firms is notoriously outdated, slow, and hard to use. Optivize is different – it\'s a more streamlined, cloud-first approach.',
    author: 'Austin Arthur',
    role: 'Product Designer',
    growth: '5x'
  },
  {
    quote: 'The flexibility of their pricing plans allowed us to scale',
    body: 'Software for accounting firms is notoriously outdated, slow, and hard to use. Optivize is different – it\'s a more streamlined, cloud-first approach.',
    author: 'Austin Arthur',
    role: 'Product Designer',
    growth: '5x'
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-white" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900 mb-4">See How Teams Are Scaling<br className="hidden md:block" /> with AI</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From startups to enterprises, discover how our AI platform delivers measurable results across industries.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="relative rounded-3xl border-4 border-green-300/90 bg-white p-10 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 text-lg mb-4 leading-snug">{t.quote}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.body}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-sm font-bold text-gray-800">AA</div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{t.author}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-600 font-bold text-3xl leading-none mb-2">{t.growth}</div>
                  <div className="text-green-600 text-xs font-medium tracking-wide">Business Growth</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
