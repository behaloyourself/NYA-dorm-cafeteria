import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";

interface MenuItem {
  day: string;
  meals: string[];
}

const menuItems: MenuItem[] = [
  { day: "Monday", meals: ["Pasta", "Salad", "Fruit"] },
  { day: "Tuesday", meals: ["Tacos", "Rice", "Dessert"] },
  { day: "Wednesday", meals: ["Chicken", "Vegetables", "Fruit"] },
  { day: "Thursday", meals: ["Sandwich", "Soup", "Dessert"] },
  { day: "Friday", meals: ["Pizza", "Salad", "Fruit"] },
];

export default function WeeklyMenu() {
  return (
    <section id="menu" className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <UtensilsCrossed className="w-10 h-10 text-primary mb-4" data-testid="icon-menu-section" />
          <h2 className="text-3xl sm:text-4xl font-bold text-center" data-testid="text-section-title">
            This Week's Menu
          </h2>
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <div
                  key={item.day}
                  className={`py-4 ${index !== menuItems.length - 1 ? 'border-b border-border' : ''}`}
                  data-testid={`menu-day-${item.day.toLowerCase()}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-lg sm:text-xl font-bold min-w-[120px]" data-testid={`text-day-${item.day.toLowerCase()}`}>
                      {item.day}:
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground" data-testid={`text-meals-${item.day.toLowerCase()}`}>
                      {item.meals.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
