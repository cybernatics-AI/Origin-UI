import { useState } from 'react';
import { verifyProduct } from '../utils/blockchainInteractions';

export const useProductAuthentication = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authenticate = async (serialNumber) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await verifyProduct(serialNumber);
      setProductDetails(result);
      return result;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { productDetails, loading, error, authenticate };
};
