import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const clients = [
  { name: 'Rio Grande/RS', coordinates: [-32.0350, -52.0986] },
  { name: 'Porto Alegre/RS', coordinates: [-30.0346, -51.2177] },
  { name: 'Imbituba/SC', coordinates: [-28.2400, -48.6706] },
  { name: 'São Francisco do Sul/SC', coordinates: [-26.2430, -48.6386] },
  { name: 'Itajaí/SC', coordinates: [-26.9078, -48.6614] },
  { name: 'Suape/PE', coordinates: [-8.3897, -35.0932] },
];

export const BrazilMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([-15.0, -48.0], 4);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create custom icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 30px;
          height: 30px;
          background-color: hsl(var(--primary));
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "></div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    // Add markers
    const bounds: [number, number][] = [];
    clients.forEach((client) => {
      const marker = L.marker(client.coordinates as [number, number], { icon: customIcon })
        .addTo(map)
        .bindPopup(`<div style="font-weight: 600; color: hsl(var(--foreground));">${client.name}</div>`);
      
      bounds.push(client.coordinates as [number, number]);
    });

    // Fit map to markers
    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }

    mapInstanceRef.current = map;

    // Cleanup
    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full rounded-xl" style={{ minHeight: '400px' }} />;
};
