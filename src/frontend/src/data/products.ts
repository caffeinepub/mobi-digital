export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'UltraCharge Pro 65W',
    category: 'Chargers',
    description: 'GaN technology fast charger with dual USB-C ports and intelligent power distribution for laptops and phones.',
    price: '$49.99',
  },
  {
    id: 2,
    name: 'AirPods Elite',
    category: 'Earbuds',
    description: 'Premium wireless earbuds with active noise cancellation, spatial audio, and 30-hour battery life.',
    price: '$179.99',
  },
  {
    id: 3,
    name: 'PowerCore 20000',
    category: 'Power Banks',
    description: 'High-capacity portable charger with 20,000mAh battery, dual USB ports, and fast charging support.',
    price: '$59.99',
  },
  {
    id: 4,
    name: 'SmartWatch Charger',
    category: 'Smart Accessories',
    description: 'Magnetic wireless charging dock for smartwatches with adjustable viewing angle and premium aluminum build.',
    price: '$34.99',
  },
  {
    id: 5,
    name: 'USB-C Cable 2M',
    category: 'Cables',
    description: 'Braided nylon USB-C to USB-C cable supporting 100W power delivery and 10Gbps data transfer speeds.',
    price: '$19.99',
  },
  {
    id: 6,
    name: 'Universal Travel Adapter',
    category: 'Adapters',
    description: 'All-in-one travel adapter with 4 USB ports, compatible with outlets in over 150 countries worldwide.',
    price: '$39.99',
  },
  {
    id: 7,
    name: 'Wireless Charging Pad',
    category: 'Chargers',
    description: '15W Qi-certified wireless charger with LED indicator and non-slip surface for phones and earbuds.',
    price: '$29.99',
  },
  {
    id: 8,
    name: 'Studio Headphones',
    category: 'Earbuds',
    description: 'Over-ear wireless headphones with studio-quality sound, 40mm drivers, and 50-hour battery life.',
    price: '$249.99',
  },
  {
    id: 9,
    name: 'MiniPower 5000',
    category: 'Power Banks',
    description: 'Compact 5,000mAh power bank with built-in Lightning and USB-C cables for ultimate portability.',
    price: '$29.99',
  },
  {
    id: 10,
    name: 'Phone Stand Pro',
    category: 'Smart Accessories',
    description: 'Adjustable aluminum phone stand with cable management and 360-degree rotation for desk or bedside.',
    price: '$24.99',
  },
  {
    id: 11,
    name: 'Lightning Cable 3-Pack',
    category: 'Cables',
    description: 'MFi-certified Lightning cables in 1M, 2M, and 3M lengths with reinforced connectors.',
    price: '$34.99',
  },
  {
    id: 12,
    name: 'HDMI to USB-C Adapter',
    category: 'Adapters',
    description: '4K@60Hz HDMI adapter for USB-C devices with plug-and-play setup and aluminum housing.',
    price: '$24.99',
  },
  {
    id: 13,
    name: 'VIVO X300 PRO',
    category: 'Smartphones',
    description: 'Premium flagship smartphone with advanced camera system, powerful performance, and stunning display technology.',
    price: '54999',
  },
];
