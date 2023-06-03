import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black py-11 text-white">
      <div className="mx-auto flex w-full flex-col items-start justify-between gap-5 px-4 md:w-4/6 md:flex-row md:items-center md:px-0">
        <div className="space-y-8">
          <div className="flex items-center justify-start gap-4">
            <a href="#">
              <BsFacebook className="text-2xl text-blue-600" />
            </a>

            <a href="#">
              <BsTwitter className="text-2xl text-blue-400" />
            </a>

            <a href="#">
              <BsInstagram className="text-2xl text-pink-600" />
            </a>
          </div>

          <div className="space-y-4">
            <div>
              <h1 className="text-lg font-semibold">Address</h1>
              <p>228-1051, Gotenyama</p>
              <p>Musashino-shi</p>
              <p>Tokyo, Japan</p>
            </div>

            <div>
              <h1 className="text-lg font-semibold">Email</h1>
              <p>info@itamae.com</p>
            </div>

            <div>
              <h1 className="text-lg font-semibold">Phone</h1>
              <p>+8161-728-9116</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl">Our Newsletter</h1>

          <form>
            <input
              className="inline-block border border-black/0 px-3 py-1 text-black focus-visible:border focus-visible:border-yellow-500 focus-visible:outline-none"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <input
              className="inline-block border border-yellow-500 bg-yellow-500 px-5 py-1 font-semibold text-black"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
