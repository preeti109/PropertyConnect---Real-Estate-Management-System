export default function PropertyCard({ property }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        width: 280,
      }}
    >
      <h3>{property.title}</h3>

      <p>📍 {property.city}</p>

      <p>
        ₹ {property.price.toLocaleString()}
      </p>

      <p>{property.area} sq.ft</p>

      <button>View Details</button>
    </div>
  );
}
