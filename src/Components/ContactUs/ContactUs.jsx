import SendMessage from "../Button/SendMessage";

const ContactUs = () => {
  return (
    <div className="mb-10 grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-800 shadow-md">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl text-center font-bold leading-lg lg:text-5xl">
            Let's talk!
          </h2>
        </div>
        <img
          src="https://i.ibb.co/jhcpRF3/contact-Us.png"
          alt=""
          className=""
        />
      </div>
      <form noValidate="" className="space-y-6 mt-28">
        <div>
          <label htmlFor="" className="text-gray-400">
            Your Name
          </label>
          <input
            id="name"
            name="clientName"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label htmlFor="" className="text-gray-400">
            Your Email
          </label>
          <input
            id="email"
            name="clientEmail"
            type="email"
            className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label htmlFor="" className="text-gray-400">
            Your Message
          </label>
          <textarea
            name="clientMessage"
            id="message"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
          ></textarea>
        </div>
        <button type="submit" className="w-full">
          <SendMessage></SendMessage>
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
