'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Truck, Clock, Package, Shield, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PriceBreakdown {
  baseRate: number;
  insurance: number;
  fuelSurcharge: number;
  total: number;
}

const PRICING = {
  sameDay: {
    base: 18.00,
    perMile: 0.50,
    minMiles: 5,
    maxMiles: 50,
  },
  nextDay: {
    base: 12.00,
    perMile: 0.35,
    minMiles: 5,
    maxMiles: 500,
  },
  insurance: {
    basic: 2.50,    // Up to £100
    standard: 5.00,  // Up to £500
    premium: 10.00   // Up to £1000
  },
  sizeMultiplier: {
    small: 1.0,
    medium: 1.2,
    large: 1.5
  },
  fuelSurcharge: 4.00 // Flat rate for now
};

export function PricingCalculator() {
  const router = useRouter();
  const [serviceType, setServiceType] = useState<'sameDay' | 'nextDay'>('sameDay');
  const [distance, setDistance] = useState(15);
  const [packageSize, setPackageSize] = useState<'small' | 'medium' | 'large'>('small');
  const [insurance, setInsurance] = useState<'basic' | 'standard' | 'premium'>('basic');
  const [priceBreakdown, setPriceBreakdown] = useState<PriceBreakdown>({
    baseRate: 0,
    insurance: 0,
    fuelSurcharge: 0,
    total: 0
  });

  // Button handlers
  const handleBookDelivery = () => {
    const bookingData = {
      serviceType,
      distance,
      packageSize,
      insurance,
      pricing: priceBreakdown
    };
    
    // Store booking data in localStorage for the contact form
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    
    // Navigate to contact page with booking intent
    router.push('/contact?intent=booking');
  };

  const handleGetQuote = () => {
    const quoteData = {
      serviceType,
      distance,
      packageSize,
      insurance,
      pricing: priceBreakdown
    };
    
    // Store quote data in localStorage for the contact form
    localStorage.setItem('quoteData', JSON.stringify(quoteData));
    
    // Navigate to contact page with quote intent
    router.push('/contact?intent=quote');
  };

  // Calculate pricing whenever inputs change
  useEffect(() => {
    const service = serviceType === 'sameDay' ? PRICING.sameDay : PRICING.nextDay;
    
    // Calculate base rate based on distance
    const baseRate = Math.max(
      service.base,
      service.base + (Math.max(0, distance - service.minMiles) * service.perMile)
    ) * PRICING.sizeMultiplier[packageSize];

    // Get insurance cost
    const insuranceCost = PRICING.insurance[insurance];
    
    // Calculate total
    const total = baseRate + insuranceCost + PRICING.fuelSurcharge;

    setPriceBreakdown({
      baseRate: parseFloat(baseRate.toFixed(2)),
      insurance: insuranceCost,
      fuelSurcharge: PRICING.fuelSurcharge,
      total: parseFloat(total.toFixed(2))
    });
  }, [serviceType, distance, packageSize, insurance]);

  return (
    <Card className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-sm border-slate-800 shadow-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-sky-400 flex items-center gap-2">
          <Package className="w-6 h-6" />
          Delivery Calculator
        </CardTitle>
        <p className="text-sm text-slate-400">
          Get an instant quote for your delivery needs
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Service Type */}
        <div className="space-y-2">
          <Label className="text-slate-300">Service Type</Label>
          <RadioGroup 
            value={serviceType} 
            onValueChange={(value: 'sameDay' | 'nextDay') => setServiceType(value)}
            className="grid grid-cols-2 gap-2"
          >
            <div>
              <RadioGroupItem 
                value="sameDay" 
                id="same-day" 
                className="peer sr-only" 
              />
              <Label
                htmlFor="same-day"
                className={`flex flex-col items-center justify-between rounded-md border-2 border-slate-700 bg-slate-900 p-4 hover:bg-slate-800 cursor-pointer ${
                  serviceType === 'sameDay' ? 'border-sky-500 bg-sky-900/20' : ''
                }`}
              >
                <Zap className="mb-2 h-6 w-6 text-amber-400" />
                <span className="font-medium">Same Day</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem 
                value="nextDay" 
                id="next-day" 
                className="peer sr-only" 
              />
              <Label
                htmlFor="next-day"
                className={`flex flex-col items-center justify-between rounded-md border-2 border-slate-700 bg-slate-900 p-4 hover:bg-slate-800 cursor-pointer ${
                  serviceType === 'nextDay' ? 'border-sky-500 bg-sky-900/20' : ''
                }`}
              >
                <Clock className="mb-2 h-6 w-6 text-sky-400" />
                <span className="font-medium">Next Day</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Distance Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-slate-300">Distance: {distance} miles</Label>
            <Badge variant="outline" className="border-slate-700 text-slate-300">
              {distance} mi
            </Badge>
          </div>
          <Slider
            value={[distance]}
            min={serviceType === 'sameDay' ? 5 : 5}
            max={serviceType === 'sameDay' ? 50 : 500}
            step={1}
            onValueChange={(value) => setDistance(value[0])}
            className="[&>span:first-child]:h-2 [&>span:first-child]:bg-slate-800"
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>{serviceType === 'sameDay' ? '5 mi' : '5 mi'}</span>
            <span>{serviceType === 'sameDay' ? '50 mi max' : '500 mi max'}</span>
          </div>
        </div>

        {/* Package Size */}
        <div className="space-y-2">
          <Label className="text-slate-300">Package Size</Label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'small', label: 'Small', desc: 'Envelope, Small Box' },
              { id: 'medium', label: 'Medium', desc: 'Suitcase, Large Box' },
              { id: 'large', label: 'Large', desc: 'Furniture, Pallets' }
            ].map((size) => (
              <div key={size.id}>
                <input
                  type="radio"
                  id={`size-${size.id}`}
                  name="package-size"
                  className="hidden peer"
                  checked={packageSize === size.id}
                  onChange={() => setPackageSize(size.id as 'small' | 'medium' | 'large')}
                />
                <Label
                  htmlFor={`size-${size.id}`}
                  className={`block p-3 text-center rounded-md border-2 cursor-pointer transition-colors ${
                    packageSize === size.id
                      ? 'border-sky-500 bg-sky-900/20 text-white'
                      : 'border-slate-700 bg-slate-900 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <span className="block font-medium">{size.label}</span>
                  <span className="text-xs opacity-70">{size.desc}</span>
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance */}
        <div className="space-y-2">
          <Label className="text-slate-300">Insurance Coverage</Label>
          <div className="space-y-2">
            {[
              { id: 'basic', label: 'Basic', coverage: 'Up to £100', price: PRICING.insurance.basic },
              { id: 'standard', label: 'Standard', coverage: 'Up to £500', price: PRICING.insurance.standard },
              { id: 'premium', label: 'Premium', coverage: 'Up to £1000', price: PRICING.insurance.premium }
            ].map((item) => (
              <div key={item.id} className="flex items-center">
                <input
                  type="radio"
                  id={`insurance-${item.id}`}
                  name="insurance"
                  className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-600 bg-slate-800"
                  checked={insurance === item.id}
                  onChange={() => setInsurance(item.id as 'basic' | 'standard' | 'premium')}
                />
                <Label 
                  htmlFor={`insurance-${item.id}`} 
                  className="ml-3 flex-1 cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block text-sm font-medium text-white">{item.label}</span>
                      <span className="block text-xs text-slate-400">{item.coverage}</span>
                    </div>
                    <span className="text-sm font-medium">£{item.price.toFixed(2)}</span>
                  </div>
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <div className="flex justify-between">
            <span className="text-slate-400">Base rate ({serviceType === 'sameDay' ? 'Same day' : 'Next day'}, {distance} miles)</span>
            <span className="font-medium">£{priceBreakdown.baseRate.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Insurance ({insurance})</span>
            <span className="font-medium">£{priceBreakdown.insurance.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Fuel surcharge</span>
            <span className="font-medium">£{priceBreakdown.fuelSurcharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-slate-800 font-bold text-lg">
            <span>Total</span>
            <span className="text-sky-400">£{priceBreakdown.total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-3">
        <Button 
          size="lg" 
          onClick={handleBookDelivery}
          className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-[1.02]"
        >
          Book This Delivery
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          onClick={handleGetQuote}
          className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          Get Detailed Quote
        </Button>
      </CardFooter>
    </Card>
  );
}
