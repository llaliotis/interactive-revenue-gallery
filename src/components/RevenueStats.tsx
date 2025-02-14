
import { DollarSign, TrendingUp, Users, Rocket } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <div className="revenue-card">
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-gray-900/50 p-3 text-gray-400">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  </div>
);

export const RevenueStats = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <StatCard
        title="Startups"
        value="5"
        icon={<Rocket className="h-6 w-6" />}
      />
      <StatCard
        title="Total Revenue"
        value="$28,400"
        icon={<DollarSign className="h-6 w-6" />}
      />
      <StatCard
        title="Active Users"
        value="2,234"
        icon={<Users className="h-6 w-6" />}
      />
    </div>
  );
};
