import { useNavigate } from "react-router-dom";

export default function PropertyCard({ property }) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/properties/${property.id}`);
  };

  return (
    <div className="property-card">
      <img
        src={
          property.images?.[0]?.imageUrl ||
          "https://via.placeholder.com/400x250"
        }
        alt="property"
        width="250"
      />

      <h3>{property.title}</h3>
      <p>{property.city}</p>
      <p>₹ {property.price}</p>

      <button onClick={handleView}>View</button>
    </div>
  );
}
