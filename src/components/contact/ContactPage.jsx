import React, { useState } from 'react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xbjvgkrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _to: 'emrygorder@proton.me'
        })
      });
      
      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    fontFamily: 'Consolas, monospace'
  };

  return (
    <div className="contact-page" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div className="contact-content" style={{
        width: '100%',
        maxWidth: '357px',
        marginTop: '-100px',
        marginLeft: '50px'
      }}>
        <form onSubmit={handleSubmit} className="contact-form" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '15px',
          width: '100%'
        }}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="subject"
            value={formData.subject}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <textarea
            name="message"
            placeholder="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: '140px'
            }}
            required
          />
          <button 
            type="submit"
            style={{
              padding: '12px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: '20px'
            }}
          >
            ⊂(´･◡･⊂) ∘˚˳°☘️
          </button>
        </form>
      </div>
    </div>
  );
};
