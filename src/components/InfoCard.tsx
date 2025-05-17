
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  description: string;
  content: string;
  className?: string;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  content,
  className,
  icon
}) => {
  return (
    <Card className={cn("border-border bg-card/60 backdrop-blur-sm h-full transition-all hover:shadow-md hover:shadow-green-900/10 hover:border-green-800/50", className)}>
      <CardHeader>
        {icon && <div className="text-green-400 mb-2">{icon}</div>}
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80">{content}</p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
