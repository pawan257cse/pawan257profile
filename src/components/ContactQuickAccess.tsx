import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Linkedin, Github, Instagram, X } from 'lucide-react';
import { useTheme } from '../App';

const ContactQuickAccess: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const panelRef = useRef<HTMLDivElement>(null);

  const contactInfo = [
    {
      type: 'phone',
      label: 'Call Now',
      value: '+91 8227031017',
      icon: <Phone size={20} />,
      action: () => window.open('tel:+918227031017', '_self')
    },
    {
      type: 'email',
      label: 'Send Email',
      value: 'pawan841509@gmail.com',
      icon: <Mail size={20} />,
      action: () => window.open('mailto:pawan841509@gmail.com', '_self')
    },
    {
      type: 'location',
      label: 'Location',
      value: 'Jaipur, India',
      icon: <MapPin size={20} />,
      action: () => window.open('https://maps.google.com/?q=jaipur,India', '_blank')
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/pawan-kumar-60a409251',
      icon: <Linkedin size={20} />,
      action: () => window.open('https://www.linkedin.com/in/pawan-kumar-60a409251', '_blank')
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'github.com/pawan257cse',
      icon: <Github size={20} />,
      action: () => window.open('https://github.com/pawan257cse', '_blank')
    },
    {
      type: 'instagram',
      label: 'Instagram',
      value: '@pawan_m._',
      icon: <Instagram size={20} />,
      action: () => window.open('https://www.instagram.com/pawan_m._/', '_blank')
    }
  ];

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Full Screen Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Contact Button */}
      <div style={{ position: 'fixed', bottom: '120px', right: '24px', zIndex: 9999 }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: isOpen ? '#10b981' : '#059669',
            color: 'white',
            border: 'none',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <MessageCircle size={28} />
        </button>

        {/* Contact Info Panel */}
        {isOpen && (
          <div 
            ref={panelRef}
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '0',
              width: '320px',
              backgroundColor: isDarkMode ? '#1f2937' : 'white',
              borderRadius: '16px',
              boxShadow: '0 20px 25px rgba(0,0,0,0.2)',
              border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
              overflow: 'hidden',
              animation: 'slideIn 0.3s ease',
              zIndex: 10000
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              padding: '16px',
              color: 'white'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Quick Contact</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '50%',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <X size={18} />
                </button>
              </div>
              <p style={{ margin: '4px 0 0 0', fontSize: '14px', opacity: 0.9 }}>Get in touch instantly!</p>
            </div>

            {/* Contact List */}
            <div style={{ padding: '16px', maxHeight: '384px', overflowY: 'auto' }}>
              {contactInfo.map((contact) => (
                <button
                  key={contact.type}
                  onClick={contact.action}
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '12px',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: isDarkMode ? '#374151' : '#f9fafb',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#4b5563' : '#f3f4f6';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#374151' : '#f9fafb';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: contact.type === 'phone' ? '#dcfce7' : 
                                    contact.type === 'email' ? '#dbeafe' :
                                    contact.type === 'location' ? '#fee2e2' :
                                    contact.type === 'linkedin' ? '#dbeafe' :
                                    contact.type === 'github' ? '#f3f4f6' : '#fce7f3',
                    color: contact.type === 'phone' ? '#16a34a' :
                           contact.type === 'email' ? '#2563eb' :
                           contact.type === 'location' ? '#dc2626' :
                           contact.type === 'linkedin' ? '#2563eb' :
                           contact.type === 'github' ? '#374151' : '#ec4899'
                  }}>
                    {contact.icon}
                  </div>
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: isDarkMode ? 'white' : '#111827',
                      marginBottom: '2px'
                    }}>
                      {contact.label}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: isDarkMode ? '#9ca3af' : '#6b7280'
                    }}>
                      {contact.value}
                    </div>
                  </div>
                  <div style={{ color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div style={{
              padding: '16px',
              backgroundColor: isDarkMode ? '#374151' : '#f9fafb',
              borderTop: `1px solid ${isDarkMode ? '#4b5563' : '#e5e7eb'}`,
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '12px',
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                margin: '0 0 8px 0'
              }}>
                Available for opportunities
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }}></div>
                <span style={{
                  fontSize: '12px',
                  color: '#10b981',
                  fontWeight: '500'
                }}>
                  Online Now
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </>
  );
};

export default ContactQuickAccess; 
