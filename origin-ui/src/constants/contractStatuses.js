export const PRODUCT_STATUSES = {
    ACTIVE: 'active',
    SUSPENDED: 'suspended',
    RETIRED: 'retired'
  };
  
  export const isValidStatus = (status) => {
    return Object.values(PRODUCT_STATUSES).includes(status);
  };
  