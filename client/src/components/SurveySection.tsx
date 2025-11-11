import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cake } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";

const dessertOptions = [
  "Chocolate Cake",
  "Ice Cream Sundae",
  "Apple Pie",
  "Brownies",
  "Cookies",
  "Fruit Salad",
];

export default function SurveySection() {
  const [selectedDessert, setSelectedDessert] = useState<string | null>(null);
  const { toast } = useToast();

  const { data: voteCounts } = useQuery<{ dessert: string; count: number }[]>({
    queryKey: ["/api/dessert-votes"],
  });

  const submitVote = useMutation({
    mutationFn: async (dessertChoice: string) => {
      const res = await apiRequest("POST", "/api/dessert-vote", { dessertChoice });
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Vote submitted!",
        description: "Thanks for participating in the dessert survey.",
      });
      setSelectedDessert(null);
      queryClient.invalidateQueries({ queryKey: ["/api/dessert-votes"] });
    },
    onError: () => {
      toast({
        title: "Failed to submit vote",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleVote = () => {
    if (!selectedDessert) {
      toast({
        title: "Please select a dessert",
        variant: "destructive",
      });
      return;
    }
    submitVote.mutate(selectedDessert);
  };

  const totalVotes = voteCounts?.reduce((sum, item) => sum + item.count, 0) || 0;

  return (
    <section id="survey" className="py-12 sm:py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <Cake className="w-10 h-10 text-primary mb-4" data-testid="icon-survey-section" />
          <h2 className="text-3xl sm:text-4xl font-bold text-center" data-testid="text-section-title">
            Dessert Survey
          </h2>
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8">
            <p className="text-base sm:text-lg text-muted-foreground mb-6 text-center" data-testid="text-survey-description">
              Vote for your favorite dessert for next week:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {dessertOptions.map((dessert) => {
                const voteCount = voteCounts?.find(v => v.dessert === dessert)?.count || 0;
                const percentage = totalVotes > 0 ? Math.round((voteCount / totalVotes) * 100) : 0;
                
                return (
                  <button
                    key={dessert}
                    onClick={() => setSelectedDessert(dessert)}
                    className={`relative p-4 rounded-md border-2 transition-all text-left hover-elevate active-elevate-2 ${
                      selectedDessert === dessert
                        ? 'border-primary bg-primary/5'
                        : 'border-border'
                    }`}
                    data-testid={`option-dessert-${dessert.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    <div className="font-medium mb-1">{dessert}</div>
                    {totalVotes > 0 && (
                      <div className="text-sm text-muted-foreground">
                        {voteCount} votes ({percentage}%)
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleVote}
                disabled={submitVote.isPending}
                data-testid="button-submit-vote"
              >
                {submitVote.isPending ? "Submitting..." : "Submit Vote"}
              </Button>
            </div>

            {totalVotes > 0 && (
              <p className="text-center text-sm text-muted-foreground mt-4" data-testid="text-total-votes">
                Total votes: {totalVotes}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
