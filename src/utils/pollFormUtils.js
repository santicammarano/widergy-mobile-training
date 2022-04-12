const normalizeName = name => {
  if (!name) {
    return name;
  }

  return name.replace(/[^a-zA-Z]/g, '');
};

const normalizePhoneNumber = phoneNumber => {
  if (!phoneNumber) {
    return phoneNumber;
  }

  return phoneNumber.replace(/[^\d]/g, '');
};

export {normalizeName, normalizePhoneNumber};
