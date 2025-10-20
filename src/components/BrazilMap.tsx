import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaW1ibHVlIiwiYSI6ImNtNXgxOTR6aTBicWsycXMzcXFjYjg5NWUifQ.placeholder';

const clients = [
  { name: 'Rio Grande/RS', coordinates: [-52.0986, -32.0350] },
  { name: 'Porto Alegre/RS', coordinates: [-51.2177, -30.0346] },
  { name: 'Imbituba/SC', coordinates: [-48.6706, -28.2400] },
  { name: 'São Francisco do Sul/SC', coordinates: [-48.6386, -26.2430] },
  { name: 'Itajaí/SC', coordinates: [-48.6614, -26.9078] },
  { name: 'Suape/PE', coordinates: [-35.0932, -8.3897] },
];

export const BrazilMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-48.0, -15.0],
      zoom: 4,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add markers for each client location
      clients.forEach((client) => {
        // Create custom marker element
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.style.cssText = `
          width: 30px;
          height: 30px;
          background-color: hsl(var(--primary));
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        `;

        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div style="padding: 8px; font-weight: 600; color: hsl(var(--foreground));">${client.name}</div>`
        );

        // Add marker to map
        new mapboxgl.Marker(el)
          .setLngLat(client.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return <div ref={mapContainer} className="w-full h-full rounded-xl" />;
};
