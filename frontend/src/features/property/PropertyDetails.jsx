import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPropertyById, getPropertyImages } from "../../api/propertyApi";
import { sendEnquiry } from "../../api/enquiryApi";

export default function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [images, setImages] = useState([]);

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const [propRes, imgRes] = await Promise.all([
        getPropertyById(id),
        getPropertyImages(id),
      ]);

      setProperty(propRes.data);
      setImages(imgRes.data);
    } catch (err) {
      console.error(err);
      setStatus("Failed to load property");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (!property) return <h2>{status}</h2>;

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      {/* IMAGE GALLERY */}
      <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        {images.length > 0 ? (
          images.map((img) => (
            <img
              key={img.id}
              src={img.imageUrl}
              alt="property"
              width={260}
              height={180}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* PROPERTY INFO */}
      <h2>{property.title}</h2>
      <p>
        <b>City:</b> {property.city}
      </p>
      <p>
        <b>State:</b> {property.state}
      </p>
      <p>
        <b>Price:</b> ₹ {property.price}
      </p>
      <p>{property.description}</p>

      <p>
        {property.addressLine}, {property.state} - {property.pincode}
      </p>

      <hr />

      {/* ENQUIRY FORM */}
      <h3>Send Enquiry</h3>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!message.trim()) {
            setStatus("Message cannot be empty");
            return;
          }

          try {
            await sendEnquiry({
              propertyId: property.id,
              message,
            });

            setStatus("✅ Enquiry sent successfully!");
            setMessage("");
          } catch (err) {
            console.error(err);
            setStatus("❌ Failed to send enquiry");
          }
        }}
      >
        <textarea
          rows={4}
          style={{ width: "100%", marginBottom: 10 }}
          placeholder="Write your enquiry here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Send</button>

        {status && <p>{status}</p>}
      </form>
    </div>
  );
}
