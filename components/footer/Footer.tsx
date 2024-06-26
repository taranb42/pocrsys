import { Button, TextField } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
            <div className="mt-8 space-y-4 lg:mt-0">
              <div>
                <h2 className="text-2xl font-medium text-blue-500">
                  <u>Request a Call</u>
                </h2>

                <p className="mt-4 max-w-lg text-gray-500">
                  R Systems is a leading digital product engineering company
                  that designs and builds next-gen products, platforms, and
                  digital experiences empowering clients across various
                  industries to overcome digital barriers, put their customers
                  first, and achieve higher revenues as well as operational
                  efficiency. We constantly innovate and bring fresh
                  perspectives to harness the power of the latest technologies
                  like cloud, automation, AI, ML, analytics, Mixed Reality etc.
                </p>
              </div>

              <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="rounded-md sm:flex sm:items-center sm:gap-4">
                  <TextField
                    required
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />
                  <Button variant="contained" className=" h-12 w-28 sm:mt-0 sm:ml-2">
                    Contact
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="hidden text-teal-600 lg:block"></div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Cookies
                  </a>
                </li>
              </ul>

              <p className="mt-8 text-xs text-gray-500">
                &copy; {new Date().getFullYear()}. R systems. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
