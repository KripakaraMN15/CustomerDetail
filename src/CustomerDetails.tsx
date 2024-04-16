import React, { useEffect, useState } from 'react';
import {Customer} from './Customers'; 
import { fetchPhotos } from './Photos'; 

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchNewPhotos = async () => {
      const newPhotos = await fetchPhotos(); 
      setPhotos(newPhotos);
    };

    const interval = setInterval(fetchNewPhotos, 10000); 

    return () => clearInterval(interval); 
  }, []);

  if (!customer) return null;

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="Customer Photo" />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
