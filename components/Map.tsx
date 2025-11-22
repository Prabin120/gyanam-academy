const Map = () => {
  // Coordinates for Gyanam Academy (approximate for Sukansuti, Assam)
  const lat = 26.5091;
  const lng = 91.3804;
  const zoom = 15;
  const width = '100%';
  const height = '400px';
  
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01}%2C${lat-0.01}%2C${lng+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lng}`;
  const attributionUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`;

  return (
    <div className="w-full">
      <iframe
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        className="border-0"
        aria-label="Gyanam Academy Location Map"
      />
      <br />
      <small className="text-xs text-muted-foreground">
        <a href={attributionUrl} target="_blank" rel="noopener noreferrer">
          View Larger Map
        </a>
      </small>
    </div>
  );
};

export default Map;
