import { openContractCall } from '@stacks/connect';
import { StacksMainnet } from '@stacks/network';
import { CONTRACT_ADDRESS, CONTRACT_NAME } from '../constants/contractConfig';

export const verifyProduct = async (serialNumber) => {
  const options = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: 'verify-product',
    functionArgs: [serialNumber],
    network: new StacksMainnet(),
    onFinish: (data) => {
      return data.result;
    }
  };

  return await openContractCall(options);
};

export const registerProduct = async (manufacturerAddress, serialNumber, brand, model) => {
  const options = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: 'register-product',
    functionArgs: [serialNumber, brand, model],
    network: new StacksMainnet(),
    onFinish: (data) => {
      return data.result;
    }
  };

  return await openContractCall(options);
};

export const transferOwnership = async (serialNumber, newOwner) => {
  const options = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: 'transfer-ownership',
    functionArgs: [serialNumber, newOwner],
    network: new StacksMainnet(),
    onFinish: (data) => {
      return data.result;
    }
  };

  return await openContractCall(options);
};

export const updateProductStatus = async (serialNumber, newStatus) => {
  const options = {
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: 'update-product-status',
    functionArgs: [serialNumber, newStatus],
    network: new StacksMainnet(),
    onFinish: (data) => {
      return data.result;
    }
  };

  return await openContractCall(options);
};
