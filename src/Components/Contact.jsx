/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Toast from './Toast';

const Contact = () => {
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setToast({
       type: 'success', message: 'Message submitted! We’ll be in touch shortly.'
     });

    setTimeout(() => setToast(null), 4000);

    e.target.submit(); // Let Netlify handle the actual submission
  };

  
  return (
    <section id='contact' css={section}>
      <h2>Contact Us</h2>
      <p>
        Join the growing community of satisfied homeowners. Write us a message and we'll get back to you, right away!
      </p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          css={form}
          onSubmit={handleSubmit}
        >

          <input 
            type="hidden" 
            name="form-name" 
            value="contact" 
          />
          <input 
              id="name"
              name="name" 
              placeholder="Jane Doe" 
              value={formData.name}
              onChange={handleChange}
              required
          />
           <input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="example@email.com" 
              value={formData.email}
              onChange={handleChange}
              required 
          />
            <textarea 
              id='message'
              name="message"
              rows="5" 
              placeholder="Write something..."
              value={formData.message}
              onChange={handleChange}  
              required 
          />
          <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          css={button}
          type="submit"
          >
            Send 
          </motion.button>
        </form>
      </motion.div>
    
      {toast && <Toast type={toast.type} message={toast.message} />}
    
    </section>
  );
};

const section = css`
  padding: 4rem 2rem;
  text-align: center;
  justify-content: center;

  h2{
    color: #ff0000ff;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    padding: .4rem 1.2rem;
    text-align: center;
    padding: .5rem;
  }
`;

const form = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;

  input, textarea {
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #c0f0f0ff;
    border-radius: 4px;
  }
`;      

const button = css`
  padding: 0.75rem;
  font-size: 1rem;
  background: #00ffffff;
  color: #000;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #03cbdaff;
  }
`;    

export default Contact;