import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_joahprb',      
      'template_zntgoe5',     
      form.current,
      'KdZuuDnwU9-cx81QS'       
    )
    .then(() => {

      toast.success('Message Sent Successfully')

      // Clear form
      form.current.reset()

    })
    .catch((error) => {

      console.log(error)

      toast.error('Failed to Send Message')
    })
  }

  return (
    <section id="contact" className="py-28 px-6">

      <Toaster position="top-right" />

      <div className="max-w-4xl mx-auto glass p-10 rounded-3xl">

        <h2 className="text-5xl font-bold gradient-text mb-10 text-center">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-white/10 outline-none text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-white/10 outline-none text-white"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-white/10 outline-none text-white"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 py-4 rounded-xl text-lg font-bold hover:scale-105 transition duration-300"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact