import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Ship, Smartphone, MessageSquare, Calendar, Truck, Warehouse, RefreshCw } from "lucide-react";
import portOperations from "@/assets/port-operations.jpg";
import soyTrucks from "@/assets/soy-trucks.jpg";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-nunito font-extrabold mb-6 text-foreground">
              Our Solutions Portfolio
            </h1>
            <p className="text-xl font-montserrat font-medium text-muted-foreground">
              Specialized software for bulk cargo operations in chemical and agricultural sectors
            </p>
          </div>
        </div>
      </section>

      {/* Port Operations Software */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <img 
                src={portOperations} 
                alt="Port operations at Porto de Rio Grande" 
                className="w-full h-80 md:h-[500px] object-cover rounded-lg shadow-lg mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-nunito font-extrabold mb-4 text-foreground">
                Port Operations Software
              </h2>
              <p className="text-lg font-montserrat font-medium text-muted-foreground">
                Comprehensive solutions for managing bulk cargo operations in ports and terminals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Commercial Tools</CardTitle>
                  <CardDescription>
                    Complete commercial management for port operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Streamline your commercial operations with integrated tools for pricing, 
                    contracts, billing, and customer relationship management tailored for bulk cargo terminals.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Ship className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>Ship Lineup Management</CardTitle>
                  <CardDescription>
                    Real-time vessel scheduling and berthing optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Optimize berth allocation and vessel turnaround times with intelligent lineup 
                    management, considering cargo types, vessel specifications, and operational constraints.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <RefreshCw className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>Operation Control</CardTitle>
                  <CardDescription>
                    Monitor and control all port operations in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track loading and unloading operations, equipment utilization, and productivity 
                    metrics with real-time dashboards and automated reporting for bulk cargo handling.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>WhatsApp Integration</CardTitle>
                  <CardDescription>
                    Instant communication and notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stay connected with automated WhatsApp notifications for critical events, 
                    operational updates, and enable seamless communication between teams and stakeholders.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-fade-in md:col-span-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>Real-Time Mobile Application</CardTitle>
                  <CardDescription>
                    Access operations anywhere, anytime
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our proprietary mobile application provides real-time access to all operational 
                    data, enabling field teams to update information, receive notifications, and make 
                    informed decisions on the go. Monitor vessel operations, cargo movements, and 
                    equipment status directly from your smartphone or tablet.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Management Software */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <img 
                src={soyTrucks} 
                alt="Trucks unloading soybeans at agricultural facility" 
                className="w-full h-80 md:h-[500px] object-cover rounded-lg shadow-lg mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-nunito font-extrabold mb-4 text-foreground">
                Product Management Software
              </h2>
              <p className="text-lg font-montserrat font-medium text-muted-foreground">
                End-to-end management for bulk chemical and agricultural products
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Warehouse className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Storage Management</CardTitle>
                  <CardDescription>
                    Complete warehouse and tank farm control
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Manage storage capacity, inventory levels, and product segregation for bulk 
                    chemicals and agricultural commodities. Track tank levels, warehouse zones, 
                    and optimize space utilization.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>Scheduling System</CardTitle>
                  <CardDescription>
                    Automated appointment and slot management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Streamline receiving and shipping schedules with automated slot allocation, 
                    preventing congestion and optimizing resource utilization for bulk cargo operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>Receiving & Shipping</CardTitle>
                  <CardDescription>
                    Track all inbound and outbound operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Manage the complete receiving and shipping process for bulk products, including 
                    weighing, sampling, quality control, and documentation for chemicals and agricultural goods.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Transfers & Cargo Movements</CardTitle>
                  <CardDescription>
                    Internal movement and repositioning control
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Control internal transfers, tank-to-tank movements, and cargo repositioning. 
                    Track every movement of bulk products within your facility with complete 
                    traceability and compliance documentation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-nunito font-extrabold mb-6 text-foreground">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl font-montserrat font-medium text-muted-foreground mb-8">
              Let's discuss how our solutions can optimize your bulk cargo operations
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#contact";
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
