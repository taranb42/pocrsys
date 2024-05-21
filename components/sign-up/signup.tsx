import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';


const fetchData = async (url: string, options: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

const CreateAccount = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  console.log(`Creating account for ${firstname} ${lastname} with email ${email}`);
  

  const url = 'http://localhost:3002/api/auth/createuser';
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstname, lastname, email, password }),
  };

  return fetchData(url, options);
};

const Signup: React.FC = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const router = useRouter(); 

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const createuseraccount = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await CreateAccount(data.firstname, data.lastname, data.email, data.password);
      console.log(response);
      router.push('/login');
    } catch (error) {
      alert('Failed to create account. Please try again.');
    }
  };

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src="/1200pxTCSSIPCOTBuilding.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block blue-teal-600" href="/">
                <span className="sr-only">Home</span>
            <img

              src="/logo1.png"

            />
              </a>

              <h1 className="mt-6 text-2xl font-bold text-blue-900 sm:text-3xl md:text-4xl">
                Welcome to R systems
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                R Systems is a leading digital product engineering company that
                designs and builds next-gen products, platforms, and digital
                experiences empowering clients across various industries to
                overcome digital barriers
              </p>

              <form onSubmit={createuseraccount} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700"                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="Name"
                    name="firstname"
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                  Last Name
                  </label>

                  <input
                    type="text"
                    id="Name"
                    name="lastname"
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>



                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our 
                    <a href="#" className="text-gray-700 underline">
                      terms and conditions
                    </a>
                    and 
                    <a href="#" className="text-gray-700 underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="/Login" className="text-gray-700 underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Signup;
