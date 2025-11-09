import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cake, ExternalLink } from "lucide-react";

export default function SurveySection() {
  const handleSurveyClick = () => {
    window.open('https://forms.gle/your-google-form-link', '_blank');
  };

  return (
    <section id="survey" className="py-12 sm:py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <Cake className="w-10 h-10 text-primary mb-4" data-testid="icon-survey-section" />
          <h2 className="text-3xl sm:text-4xl font-bold text-center" data-testid="text-section-title">
            Dessert & Feedback Survey
          </h2>
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8 text-center">
            <p className="text-base sm:text-lg text-muted-foreground mb-6" data-testid="text-survey-description">
              Click below to choose what dessert you want next week:
            </p>
            <Button
              size="lg"
              onClick={handleSurveyClick}
              className="gap-2"
              data-testid="button-take-survey"
            >
              Take the Survey
              <ExternalLink className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
