export const validateEmail = (email: string): boolean => {
  // Check if the input is a non-empty string
  if (!email || typeof email !== 'string') {
    return false;
  }

  // A relatively standard regex for basic email validation
  // It checks for: [something] @ [something] . [something]
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailRegex.test(email);
};
