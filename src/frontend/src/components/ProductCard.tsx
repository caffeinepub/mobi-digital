import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  price: string;
}

export default function ProductCard({ name, category, description, price }: ProductCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md hover:border-primary/30">
      <CardHeader>
        <div className="mb-3 flex h-32 items-center justify-center rounded-md bg-muted">
          <div className="text-6xl opacity-30">📱</div>
        </div>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge variant="secondary" className="shrink-0 text-xs">
            {category}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold text-primary">{price}</p>
      </CardContent>
    </Card>
  );
}
