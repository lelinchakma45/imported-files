import React, { useState, useEffect } from 'react';
import { Zap, Shield, BarChart, Users } from 'lucide-react';

const features = [
  {
    name: 'Lightning Fast Performance',
    description: 'Our platform is optimized for speed, ensuring your users have a seamless experience every time.',
    icon: Zap,
  },
  {
    name: 'Enterprise-Grade Security',
    description: 'Rest easy knowing your data is protected with state-of-the-art security measures and compliance.',
    icon: Shield,
  },
  {
    name: 'Advanced Analytics',
    description: 'Gain valuable insights with our comprehensive analytics dashboard and reporting tools.',
    icon: BarChart,
  },
  {
    name: 'Team Collaboration',
    description: 'Empower your team with collaborative tools designed to boost productivity and innovation.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides all the tools and features you need to grow your business and delight your customers.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div>
                  <span className="rounded-md inline-flex p-3 bg-primary-50 text-primary-700 group-hover:bg-primary-100 transition-colors duration-300">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute top-6 right-6 text-primary-300 group-hover:text-primary-400 transition-colors duration-300">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
