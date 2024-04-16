import React, { useState, useEffect } from 'react';
import {Customer} from './Customers'; 

interface CustomerListProps {
  customers: Customer[];
  onCustomerSelect: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  onCustomerSelect,
}) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const handleClick = (customer: Customer) => {
    setSelectedCustomerId(customer.id);
    onCustomerSelect(customer);
  };

  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <button
          key={customer.id}
          className={`customer-card ${
            selectedCustomerId === customer.id ? 'selected' : ''
          }`}
          onClick={() => handleClick(customer)}
        >
          <p>{customer.name}</p>
          <p>{customer.title}</p>
        </button>
      ))}
    </div>
  );
};

export default CustomerList;
