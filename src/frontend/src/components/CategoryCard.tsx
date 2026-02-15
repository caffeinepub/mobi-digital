import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  onNavigate: (page: 'products', category: string) => void;
}

export default function CategoryCard({ title, description, icon, onNavigate }: CategoryCardProps) {
  return (
    <Card className="group transition-all hover:shadow-lg hover:border-primary/50">
      <CardHeader>
        <div className="mb-3 text-4xl">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="ghost"
          className="group-hover:text-primary"
          onClick={() => onNavigate('products', title)}
        >
          Explore
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
