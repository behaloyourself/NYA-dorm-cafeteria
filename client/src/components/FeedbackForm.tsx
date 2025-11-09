import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.trim()) {
      toast({
        title: "Please enter your feedback",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thanks for your feedback!",
      description: "We appreciate your input and will review it soon.",
    });
    
    setFeedback("");
  };

  return (
    <section id="feedback" className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <MessageSquare className="w-10 h-10 text-primary mb-4" data-testid="icon-feedback-section" />
          <h2 className="text-3xl sm:text-4xl font-bold text-center" data-testid="text-section-title">
            Complaints & Suggestions
          </h2>
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Textarea
                  placeholder="Type your feedback here..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[120px] resize-none"
                  data-testid="input-feedback"
                />
                <p className="text-sm text-muted-foreground mt-2" data-testid="text-character-count">
                  {feedback.length}/500 characters
                </p>
              </div>
              <Button
                type="submit"
                size="lg"
                data-testid="button-submit-feedback"
              >
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
