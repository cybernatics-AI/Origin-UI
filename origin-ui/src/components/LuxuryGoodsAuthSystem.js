import React, { useState } from 'react';
import { verifyProduct, registerProduct, transferOwnership, updateProductStatus } from '../utils/blockchainInteractions';

const LuxuryGoodsAuthSystem = () => {
  const [activeTab, setActiveTab] = useState('verify');
  const [serialNumber, setSerialNumber] = useState('');
  const [productDetails, setProductDetails] = useState(null);
  const [manufacturerAddress, setManufacturerAddress] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productModel, setProductModel] = useState('');
  const [transferOwnerAddress, setTransferOwnerAddress] = useState('');
  const [productStatus, setProductStatus] = useState('');

  const handleVerifyProduct = async () => {
    try {
      const result = await verifyProduct(serialNumber);
      setProductDetails(result);
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };

  const handleRegisterProduct = async () => {
    try {
      await registerProduct(manufacturerAddress, serialNumber, productBrand, productModel);
      alert('Product registered successfully');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleTransferOwnership = async () => {
    try {
      await transferOwnership(serialNumber, transferOwnerAddress);
      alert('Ownership transferred successfully');
    } catch (error) {
      console.error('Transfer failed:', error);
    }
  };

  const handleUpdateStatus = async () => {
    try {
      await updateProductStatus(serialNumber, productStatus);
      alert('Product status updated successfully');
    } catch (error) {
      console.error('Status update failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      {/* Render the UI with the previous implementation, 
          but replace button click handlers with these new methods */}
    </div>
  );
};

export default LuxuryGoodsAuthSystem;