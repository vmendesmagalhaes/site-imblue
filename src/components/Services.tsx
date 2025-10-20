import { Code2, Lightbulb, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "We create exclusive solutions for your business, tailored to meet the specific needs of port operations and maritime logistics.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    title: "Blue Economy Consultancy",
    description: "Strategic support for sustainable operations, helping your business thrive while protecting our oceans and waterways through innovative blue economy approaches.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Network,
    title: "Systems Integration",
    description: "Connect your port platforms for greater efficiency, ensuring seamless data flow between different maritime systems and operational departments.",
    color: "bg-accent/10 text-accent",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-nunito font-extrabold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg font-montserrat font-medium text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to transform your port operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border"
              >
                <CardContent className="p-8 space-y-4">
                  <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
