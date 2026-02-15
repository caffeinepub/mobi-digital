import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type Page = 'home' | 'products' | 'about' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page, category?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const categories = [
    {
      title: 'Chargers',
      description: 'Fast-charging solutions for all your devices with intelligent power delivery.',
      icon: '⚡',
    },
    {
      title: 'Earbuds',
      description: 'Premium wireless audio with active noise cancellation and crystal-clear sound.',
      icon: '🎧',
    },
    {
      title: 'Power Banks',
      description: 'High-capacity portable power to keep you connected on the go.',
      icon: '🔋',
    },
    {
      title: 'Smart Accessories',
      description: 'Innovative gadgets that enhance your digital lifestyle.',
      icon: '📱',
    },
    {
      title: 'Cables',
      description: 'Durable, high-speed cables built to last with premium materials.',
      icon: '🔌',
    },
    {
      title: 'Adapters',
      description: 'Universal connectivity solutions for seamless device integration.',
      icon: '🔄',
    },
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Fast & Efficient',
      description: 'Cutting-edge technology for optimal performance',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Quality Assured',
      description: 'Rigorous testing and premium materials',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Modern Design',
      description: 'Sleek aesthetics that complement your lifestyle',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Power Your Digital Life with{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  mobi digital
                </span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Premium electric accessories designed for the modern world. Experience innovation,
                quality, and style in every product.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => onNavigate('products')} className="group">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate('about')}>
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/mobi-digital-hero.dim_1600x700.png"
                alt="mobi digital products"
                className="w-full rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border/40 bg-muted/20">
        <Layout>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-none bg-background/50">
                <CardContent className="pt-6">
                  <div className="mb-3 inline-flex rounded-md bg-primary/10 p-3 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Layout>
      </section>

      {/* Categories Section */}
      <section>
        <Layout>
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              Explore Our Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the perfect accessories for your devices
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </Layout>
      </section>
    </>
  );
}
