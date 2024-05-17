const Hero = () => {
    return (
      <div className="bg-white">
        <section>
          <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
                  <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                      R Systems mission is to enable digital innovation for
                      enterprises in the Banking, Finance & Insurance industry.
                    </h2>
  
                    <p className="hidden text-white/90 sm:mt-4 sm:block">
                      Digital disruption is affecting the Banking, Finance and
                      Insurance industries at every level. The rise of mobile
                      convenience and online banking has put these organizations
                      under heavy pressure to become more customer-centric, or
                      risk becoming obsolete. As consumer expectations continue to
                      increase around user simplicity, the future of Banking,
                      Finance and Insurance providers depends on their ability to
                      navigate the process of digital transformation.
                    </p>
  
                    <div className="mt-4 md:mt-8">
                      <a
                        href="https://www.rsystems.com/digital-platforms-and-solutions/"
                        target="blank"
                        className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition white:bg-indigo-700 focus:outline-white focus:ring focus:ring-yellow-400"
                      >
                        Get Connected Today
                      </a>
                    </div>
                  </div>
                </div>
  
                <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                  <img
                    alt="RSYSTEMS"
                    src="/logo11.png"
                    className="h-40 w-full object-cover sm:h-56 md:h-full"
                  />
  
                  <img
                    alt="RSYSTEMS"
                    src="/logo10.png"
                    className="h-40 w-full object-cover sm:h-56 md:h-full"
                  />
                </div> 
              </div>
            </div>
          </section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-8 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="meeting"
                  src="/1200pxTCSSIPCOTBuilding.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
  
              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">Grow your Business</h2>  
  
                <p className="mt-4 text-gray-600">
                  Our full-lifecycle Digital Product Engineering services employ
                  the highest standards of architectural design, development, and
                  customization. Well-versed in the realm of UX design, Agile
                  development, and DevOps, EVERY digital product we produce is
                  guided by principles of scalable performance and long term
                  usability.
                </p>
  
                <a
                  href="/Register"
                  className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition blue:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Register With Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Hero;
  