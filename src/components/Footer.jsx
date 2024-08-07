import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          setStateMessage('Something went wrong, please try again later.');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    // Clear the form after sending the email
    e.target.reset();
  };

  return (
    <div className="w-full">
      <div className="px-8 rounded-t-xl bg-gradient-to-br from-blue-200 to-fuchsia-300">
        <div className="flex flex-col lg:flex-row text-cyan-700 max-w-7xl mx-auto">
          <form onSubmit={sendEmail} className='lg:p-10 lg:w-1/2 flex flex-col lg:mr-4'>
            <h2 className='w-full text-6xl text-center font-bold py-8'>let's chat!</h2>
            <label className=' pb-2 text-2xl'>name</label>
            <input type="text" name="user_name" className='border-cyan-700 border-2 bg-white rounded-xl shadow-lg' required />
            <label className=' py-2 text-2xl'>email</label>
            <input type="email" name="user_email" className='border-cyan-700 border-2 bg-white rounded-xl shadow-lg' required />
            <label className=' py-2 text-2xl'>message</label>
            <textarea name="message" className='border-cyan-700 border-2 bg-white rounded-xl shadow-lg' required />
            <input type="submit" value="Send" className='bg-white shadow-lg border-cyan-700 border-2 cursor-pointer lowercase text-2xl py-2 my-8 lg:w-1/4 rounded-xl' disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
          </form>
          <div className="lg:w-1 w-full rounded lg:my-20 bg-white bg-opacity-[.5]"></div>
          <div className="flex lg:w-1/2 m-auto text-white">
            <div className="flex flex-col p-8 items-baseline text-cyan-700">
              <div className="mx-auto cursor-pointer">
              <a href="https://www.linkedin.com/in/jfxmedia" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="hover:scale-110 p-4 w-14 h-auto mx-auto text-cyan-700 align-bottom" icon={faLinkedin} /> 
                </a>
                <a href="https://www.github.com/jfxmedia" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="hover:scale-110 p-4 w-14 h-auto mx-auto text-cyan-700" icon={faGithub} />
                </a>
              </div>
              <div className="text-3xl p-2 text-center">Jesse <span className='font-bold'>Foster &copy; 2024</span>
                <div className="text-xl mx-auto"></div>
                <div className="text-xl p-2 mx-auto">This website was created using Vite + ReactJS, and decorated with TailwindCSS.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
