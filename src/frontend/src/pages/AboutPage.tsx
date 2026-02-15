import { Target, Award, Users, Lightbulb } from 'lucide-react';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation First',
      description:
        'We constantly push boundaries to bring you the latest technology in electric accessories.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Promise',
      description:
        'Every product undergoes rigorous testing to ensure it meets our high standards of excellence.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Customer Focus',
      description:
        'Your satisfaction drives everything we do, from design to after-sales support.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Sustainable Design',
      description:
        'We prioritize eco-friendly materials and processes to minimize our environmental impact.',
    },
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">About mobi digital</h1>
          <p className="text-xl text-muted-foreground">
            Empowering your digital lifestyle with premium electric accessories
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              At mobi digital, we believe that the right accessories can transform your relationship
              with technology. Founded with a passion for innovation and quality, we've made it our
              mission to deliver electric accessories that don't just work—they excel.
            </p>
            <p>
              Every product in our catalog is carefully selected and tested to ensure it meets the
              demanding needs of modern digital life. From fast chargers that power your day to
              premium earbuds that deliver studio-quality sound, we're committed to enhancing every
              aspect of your connected experience.
            </p>
          </CardContent>
        </Card>

        <Separator className="my-12" />

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex rounded-md bg-primary/10 p-3 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Product Focus */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">What We Offer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Our product range spans the essential categories of modern electric accessories:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Charging Solutions:</strong> Fast chargers, wireless charging pads, and
                multi-port adapters with intelligent power delivery
              </li>
              <li>
                <strong>Audio Devices:</strong> Premium earbuds and headphones with active noise
                cancellation and superior sound quality
              </li>
              <li>
                <strong>Power Banks:</strong> High-capacity portable batteries to keep you connected
                wherever you go
              </li>
              <li>
                <strong>Cables & Adapters:</strong> Durable, high-speed connectivity solutions built
                to last
              </li>
              <li>
                <strong>Smart Accessories:</strong> Innovative gadgets that enhance productivity and
                convenience
              </li>
            </ul>
            <p>
              Each product is chosen for its exceptional build quality, innovative features, and
              ability to seamlessly integrate into your digital ecosystem.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
