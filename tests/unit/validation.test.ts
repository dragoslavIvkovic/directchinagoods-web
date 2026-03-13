import { validateEmail } from '../../src/utils/validation';

describe('validateEmail utility function', () => {
  // Grouping positive test cases (valid emails)
  it('should return true for valid email addresses', () => {
    // Standard valid email
    expect(validateEmail('test@example.com')).toBe(true);
    
    // Email with sub-domain
    expect(validateEmail('user.name@sub.example.com')).toBe(true);
    
    // Email with + sign (common in Gmail)
    expect(validateEmail('user+tag@example.com')).toBe(true);
  });

  // Grouping negative test cases (invalid emails)
  it('should return false for missing "@" symbol', () => {
    expect(validateEmail('testexample.com')).toBe(false);
  });

  it('should return false for missing domain', () => {
    expect(validateEmail('test@')).toBe(false);
  });

  it('should return false for emails with spaces', () => {
    expect(validateEmail('test user@example.com')).toBe(false);
  });

  it('should return false for empty strings or invalid types', () => {
    expect(validateEmail('')).toBe(false);
    expect(validateEmail('   ')).toBe(false);
    
    // Testing invalid types (cast to any for ts-ignore essentially)
    expect(validateEmail(null as any)).toBe(false);
    expect(validateEmail(undefined as any)).toBe(false);
  });
});
