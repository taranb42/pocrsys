
const AboutUs = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            About Our Company
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Since our establishment in 1995, we have been at the forefront of
            innovation in the software development industry. With over two
            decades of experience, we have grown into a globally recognized
            leader in providing cutting-edge technology solutions.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              Over the years, we have continually adapted to the evolving
              landscape of technology, leveraging our expertise to address the
              diverse needs of our clients. From pioneering software solutions
              to implementing groundbreaking technologies, we have remained
              committed to driving digital transformation and delivering
              exceptional value to our clients.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              With a focus on innovation, quality, and customer satisfaction, we
              have achieved significant milestones throughout our journey. In
              2024, our company's estimated worth exceeds one billion dollars, a
              testament to our sustained growth and success in the industry.
              This milestone reflects our dedication to excellence and our
              unwavering commitment to delivering unparalleled software
              development services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              Our mission is to empower businesses with innovative software
              solutions that drive growth, efficiency, and competitive
              advantage. We are dedicated to delivering exceptional value to our
              clients through collaboration, integrity, and a relentless pursuit
              of excellence.
            </p>
          </section>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500 ">clients</span> say
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700" style={{ backgroundColor: 'lightblue' }}>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Impressive turnaround! The team at [Software Development
                Company] delivered top-notch results well ahead of schedule,
                exceeding expectations.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Robert
                  </h1>
                  <span className="text-sm text-gray-500">
                    CTO, Robert Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700" style={{ backgroundColor: 'lightblue' }}>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Exceptional efficiency! [Software Development Company]
                surpassed deadlines with precision, ensuring a seamless project
                completion”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Jeny Doe
                  </h1>
                  <span className="text-sm text-gray-500">
                    CEO, Jeny Consultency
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700" style={{ backgroundColor: 'lightblue' }}>
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Outstanding performance! [Software Development Company]
                consistently met tight deadlines, demonstrating remarkable
                proficiency and dedication.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Ema Watson{" "}
                  </h1>
                  <span className="text-sm text-gray-500">
                    Marketing Manager at Stech
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
