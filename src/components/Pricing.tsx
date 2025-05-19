import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Standard support',
      '5GB storage',
      'Basic security features'
    ],
    cta: 'Start with Starter',
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 team members',
      'Advanced analytics',
      'Priority support',
      '25GB storage',
      'Enhanced security features',
      'Custom branding'
    ],
    cta: 'Go Professional',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '$199',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Unlimited storage',
      'Advanced security suite',
      'Custom branding',
      'API access',
      'Dedicated account manager'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Plans for businesses of all sizes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the perfect plan for your needs. Always know what you'll pay.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 ${
                plan.highlighted ? 'border-2 border-primary-500 relative' : 'border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase bg-primary-600 text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="px-6 py-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <a
                  href="#"
                  className={`mt-8 block w-full py-3 px-6 rounded-md text-center font-medium ${
                    plan.highlighted
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
