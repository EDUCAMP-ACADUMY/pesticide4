import React from 'react';
import { DollarSign, Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      features: [
        'Basic features included',
        '24/7 support',
        'Up to 10 users',
        '5GB storage'
      ]
    },
    {
      name: 'Pro',
      price: 79,
      features: [
        'All Basic features',
        'Priority support',
        'Up to 50 users',
        '25GB storage',
        'Advanced analytics'
      ]
    },
    {
      name: 'Enterprise',
      price: 199,
      features: [
        'All Pro features',
        'Dedicated support',
        'Unlimited users',
        'Unlimited storage',
        'Custom integrations',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col hover:border-gray-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">${plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-8 block w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg px-6 py-3 text-center transition-colors duration-200"
              >
                Get started with {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;