import React from 'react'

const ContactForm = () => {
  return (
    // main container
    <div>
     {/* part1 */}
     <div>
  <p className="font-semibold text-3xl text-[#BA68C8] mb-3">Get in touch</p>
  <p className="font-normal text-lg text-black">
    We are here for you! How can we help?
  </p>

  <form action="" className="mt-7 flex flex-col gap-3">
    <label className="text-base" htmlFor="name">Name</label>
    <input
      className="border border-[#DCB3E3] rounded-lg p-2 focus:outline-none focus:border-[#BA68C8] transition"
      id="name"
      type="text"
    />

    <label className="text-base" htmlFor="email">Email</label>
    <input
      className="border border-[#DCB3E3] rounded-lg p-2 focus:outline-none focus:border-[#BA68C8] transition"
      id="email"
      type="text"
    />

    <label className="text-base" htmlFor="message">Message</label>
    <textarea
      className="border border-[#DCB3E3] rounded-lg p-2 h-24 focus:outline-none focus:border-[#BA68C8] transition"
      id="message"
      placeholder="Write something..."
    ></textarea>
  </form>
</div>

     {/* part2 */}
    <div></div>
    </div>
  )
}

export default ContactForm
