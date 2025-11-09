import Header from "@/components/Header";
import WeeklyMenu from "@/components/WeeklyMenu";
import SurveySection from "@/components/SurveySection";
import FeedbackForm from "@/components/FeedbackForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <WeeklyMenu />
        <SurveySection />
        <FeedbackForm />
      </main>
      <footer className="bg-muted/30 border-t border-border py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer">
            © 2024 Boarding Cafeteria. Questions or concerns? Submit feedback above.
          </p>
        </div>
      </footer>
    </div>
  );
}
