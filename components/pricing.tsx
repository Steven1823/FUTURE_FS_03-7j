import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Listen to music with ads",
    features: ["Shuffle play", "Basic audio quality", "With ads", "Mobile listening"],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Individual",
    price: "$9.99",
    period: "month",
    description: "1 Premium account",
    features: ["Ad-free music listening", "Download to listen offline", "On-demand playback", "High quality audio"],
    popular: true,
    buttonText: "Try Free for 1 Month",
  },
  {
    name: "Duo",
    price: "$12.99",
    period: "month",
    description: "2 Premium accounts",
    features: ["2 Premium accounts", "Ad-free music listening", "Download to listen offline", "On-demand playback"],
    popular: false,
    buttonText: "Try Free for 1 Month",
  },
  {
    name: "Family",
    price: "$15.99",
    period: "month",
    description: "Up to 6 Premium accounts",
    features: ["6 Premium accounts", "Block explicit music", "Ad-free music listening", "Spotify Kids access"],
    popular: false,
    buttonText: "Try Free for 1 Month",
  },
]

export default function Pricing() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pick your Premium</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Listen without limits on your phone, speaker, and other devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.popular ? "default" : "outline"} className="w-full">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Terms and conditions apply. 1 month free not available for users who have already tried Premium.</p>
        </div>
      </div>
    </section>
  )
}
