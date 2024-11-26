import { useState } from 'react';
import { Loader2 } from "lucide-react";

const Contact = () => {
  // const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/sendEmail.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      setStatus({
        type: result.status,
        message: result.message
      });

      if (result.status === 'success') {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred while sending. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacts" className="py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          
          {status.message && (
            <div className={`mb-4 p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {status.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-600">Full Name</label>
                <input
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-gray-600">Subject</label>
              <input
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg min-h-[150px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-end">
              <button 
                type="submit" 
                className="w-50 px-6 py-2 bg-black  text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                <>
                  <Loader2 className="inline mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
                ) : (
                'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;