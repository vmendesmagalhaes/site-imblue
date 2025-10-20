import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Ship, Warehouse, Truck } from "lucide-react";
import portOperations from "@/assets/port-operations.jpg";
import soyTrucks from "@/assets/soy-trucks.jpg";

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-nunito font-extrabold mb-4 text-foreground">
              Our solutions portfolio
            </h2>
            <p className="text-xl font-montserrat font-medium text-muted-foreground">
              Specialized software for bulk cargo operations in chemical and agricultural sectors
            </p>
          </div>

          {/* Port Operations Software */}
          <div className="mb-16">
            <div className="mb-8">
              <div className="relative w-full h-64 md:h-96 rounded-lg shadow-lg mb-6 overflow-hidden">
                <img 
                  src={portOperations} 
                  alt="Port operations at Porto de Rio Grande" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
              </div>
              <h3 className="text-2xl md:text-3xl font-nunito font-extrabold mb-3 text-foreground">
                Port operations software
              </h3>
              <p className="text-lg font-montserrat font-medium text-muted-foreground">
                Comprehensive solutions for managing bulk cargo operations in ports and terminals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Commercial tools</CardTitle>
                  <CardDescription>
                    Complete commercial management for port operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Streamline your commercial operations with integrated tools for pricing, 
                    contracts, billing, and customer relationship management.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Ship className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>Ship lineup management</CardTitle>
                  <CardDescription>
                    Real-time vessel scheduling and berthing optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Optimize berth allocation and vessel turnaround times with intelligent lineup 
                    management and operational constraints.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Management Software */}
          <div className="mb-12">
            <div className="mb-8">
              <div className="relative w-full h-64 md:h-96 rounded-lg shadow-lg mb-6 overflow-hidden">
                <img 
                  src={soyTrucks} 
                  alt="Trucks unloading soybeans at agricultural facility" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
              </div>
              <h3 className="text-2xl md:text-3xl font-nunito font-extrabold mb-3 text-foreground">
                Product management software
              </h3>
              <p className="text-lg font-montserrat font-medium text-muted-foreground">
                End-to-end management for bulk chemical and agricultural products
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Warehouse className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Storage management</CardTitle>
                  <CardDescription>
                    Complete warehouse and tank farm control
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Manage storage capacity, inventory levels, and product segregation for bulk 
                    chemicals and agricultural commodities.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>Receiving & shipping</CardTitle>
                  <CardDescription>
                    Track all inbound and outbound operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Manage the complete receiving and shipping process for bulk products, including 
                    weighing, sampling, and quality control.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <Button 
              size="lg"
              onClick={() => {
                window.location.href = "/portfolio";
              }}
            >
              View full portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
