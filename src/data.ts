import { Customer } from "./Customers";


export async function fetchCustomers(): Promise<Customer[]> {
    // Example using a placeholder API (replace with your actual API)
    const response = await fetch('https://example.com/api/customers');
    const data = await response.json();
  
    
    return data.map((customer: any) => ({
      id: customer.id,
      name: customer.name,
      title: customer.title,
      address: customer.address || "", 
      photos: customer.photos || [],
    }));
  }
  