import { Waves, Target, Users } from "lucide-react";
import portTechImage from "@/assets/port-tech.jpg";
import { BrazilMap } from "./BrazilMap";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-nunito font-extrabold text-foreground mb-4">
            Blue softwares
          </h2>
          <p className="text-xl font-montserrat font-medium text-primary">Tech on port operations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-ocean rounded-2xl blur-3xl opacity-20" />
            <img
              src={portTechImage}
              alt="Port Technology"
              className="relative rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At <span className="font-semibold text-primary">imblue</span>, we develop innovative solutions that transform port 
                operations, promoting a bluer and more sustainable world through blue economy principles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experts combines deep industry knowledge with cutting-edge technology to create 
                software that optimizes port processes, reduces environmental impact, and increases operational 
                efficiency in maritime logistics.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Waves className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Sustainable solutions</h3>
                  <p className="text-muted-foreground">
                    Committed to the blue economy and environmental preservation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Precision technology</h3>
                  <p className="text-muted-foreground">
                    Cutting-edge software tailored for port operations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert team</h3>
                  <p className="text-muted-foreground">
                    Deep maritime industry knowledge meets innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brazil Map Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-nunito font-extrabold text-foreground mb-4">
              Our presence across Brazil
            </h3>
            <p className="text-lg font-montserrat font-medium text-muted-foreground">
              Serving major ports throughout the Brazilian coast
            </p>
          </div>
          <div className="bg-card rounded-2xl shadow-elegant p-8">
            <div className="w-full h-[600px] rounded-xl overflow-hidden">
              <BrazilMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
