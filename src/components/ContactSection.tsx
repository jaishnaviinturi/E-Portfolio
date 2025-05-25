import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
      
      setFormData(initialFormState);
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-16">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            {submitStatus && (
              <div className={`p-4 mb-6 rounded-lg ${
                submitStatus.success 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                  : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Email
                  </h4>
                  <a href="mailto:jaishnaviinturi@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    jaishnaviinturi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Phone
                  </h4>
                  <a href="tel:+918019679131" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +91 8019679131
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    APHB Colony, Hyderabad, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/20">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Current Status
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                BTech student at B V Raju Institute of Technology, graduating in 2026.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-medium">CGPA:</span> 9.31/10
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;