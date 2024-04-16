import React, { useState, useEffect } from 'react';
import CustomerList from './CustomerList';
import CustomerDetails from './CustomerDetails';
import { fetchCustomers } from './data'; 
import { Customer } from './Customers';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCustomers = await fetchCustomers(); 
      setCustomers(fetchedCustomers);
    
    
    return (
      <div className="customer-portal">
        <CustomerList customers={customers} onCustomerSelect={setSelectedCustomer} />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    );
    };