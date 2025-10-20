import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const clients = [
  { name: 'Rio Grande/RS', coordinates: [-32.0350, -52.0986] as [number, number] },
  { name: 'Porto Alegre/RS', coordinates: [-30.0346, -51.2177] as [number, number] },
  { name: 'Imbituba/SC', coordinates: [-28.2400, -48.6706] as [number, number] },
  { name: 'São Francisco do Sul/SC', coordinates: [-26.2430, -48.6386] as [number, number] },
  { name: 'Itajaí/SC', coordinates: [-26.9078, -48.6614] as [number, number] },
  { name: 'Suape/PE', coordinates: [-8.3897, -35.0932] as [number, number] },
];

// Custom marker icon with primary color
const createCustomIcon = () => {
  return L.divIcon({
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
};

function MapBounds() {
  const map = useMap();
  
  useEffect(() => {
    const bounds = L.latLngBounds(clients.map(c => c.coordinates));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map]);
  
  return null;
}

export const BrazilMap = () => {
  return (
    <MapContainer
      center={[-15.0, -48.0]}
      zoom={4}
      className="w-full h-full rounded-xl"
      style={{ minHeight: '400px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapBounds />
      {clients.map((client, index) => (
        <Marker 
          key={index} 
          position={client.coordinates}
          icon={createCustomIcon()}
        >
          <Popup>
            <div className="font-semibold text-foreground">{client.name}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
