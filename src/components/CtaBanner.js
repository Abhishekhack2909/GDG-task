import React from 'react';

const CtaBanner = () => {
  return (
    <section className="relative py-24" id="cta">
      <div className="container-custom">
        <div className="rounded-[48px] bg-gradient-to-r from-green-200 via-green-300 to-green-200 p-[1px]">
          <div className="rounded-[46px] bg-gradient-to-br from-green-300/60 via-white to-green-200/50 md:flex items-stretch overflow-hidden">
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900 mb-6">Automate Your Sales<br />Analysis with AI</h2>
              <p className="text-gray-700 mb-8 max-w-md">Authenticate, monetize & launch an advanced workflow—faster than ever before.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-900 font-medium hover:shadow">Start Free Trial</button>
                <button className="px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800">Book a Demo</button>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex items-center justify-center">
              <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Status Tracker</h3>
                  <button className="text-xs px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-50">See All</button>
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="text-xs font-medium text-gray-500 mb-2">Active</div>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center font-semibold text-sm text-gray-800">TK</div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Tahsan Khna</p>
                          <p className="text-xs text-gray-500">UI Designer</p>
                        </div>
                      </div>
                      <span className="text-xs rounded-full px-2 py-1 bg-green-100 text-green-700 font-medium">Active</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 mb-2">Offline</div>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-semibold text-sm text-gray-700">KM</div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Keliana Mery</p>
                          <p className="text-xs text-gray-500">Developer</p>
                        </div>
                      </div>
                      <span className="text-xs rounded-full px-2 py-1 bg-amber-100 text-amber-700 font-medium">03m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;
