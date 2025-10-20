import { Waves } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Waves className="h-6 w-6" />
            <span className="font-semibold text-lg">imblue</span>
          </div>
          
            <p className="text-primary-foreground/80 text-sm text-center">
              © {new Date().getFullYear()} imblue. All rights reserved. Tech on ports.
            </p>
          
          <div className="text-sm text-primary-foreground/80">
            Rio Grande, RS, Brazil
          </div>
        </div>
      </div>
    </footer>
  );
};
