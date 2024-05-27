import React, { useState } from "react";

interface NoteData {
  title: string;
  description: string;
  tag: string;
}

const Projects: React.FC = () => {
  const [data, setData] = useState<NoteData>({
    title: "",
    description: "",
    tag: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const createusernote = (event: React.FormEvent) => {
    event.preventDefault();

    // Mock behavior to simulate note creation
    const Json = { success: true }; // This would be replaced with actual API response

    if (Json.success) {
      alert("Success");
      setData({
        title: "",
        description: "",
        tag: "",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-1/2">
          <img
            className="object-cover w-full h-64 rounded-lg mb-6"
            src="/9988771122.png"
            alt="Article"
          />
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase">
              Product
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
            >
              AWS Estimator: Streamline Costs, Optimize Resources, Unparalleled Accuracy, Effortlessly.
            </a>
            <p className="mt-2 text-gray-600">
              Revolutionize cost estimation with our AWS Product Estimator
              Tool. Instantly calculate expenses across diverse AWS services in
              a single click. Simplify budgeting and optimize resources
              effortlessly. Say goodbye to manual calculations and hello to
              streamlined financial planning with unparalleled accuracy.
            </p>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Tarandeep Bhatia
              </a>
            </div>
            <span className="mx-1 text-xs text-gray-600">21 SEP 2015</span>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md p-8 w-full lg:w-1/2">
          <form onSubmit={createusernote} className="space-y-4">
            <div>
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                className="w-full rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-600 p-3 text-sm"
                placeholder="Title"
                type="text"
                id="title"
                name="title"
                value={data.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
                className="w-full rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-600 p-3 text-sm"
                placeholder="Description"
                rows={8}
                id="description"
                name="description"
                value={data.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <label htmlFor="tag" className="sr-only">
                Tag
              </label>
              <input
                className="w-full rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-600 p-3 text-sm"
                placeholder="Tag"
                type="text"
                id="tag"
                name="tag"
                value={data.tag}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-blue-600 hover:bg-blue-700 px-5 py-3 font-medium text-white transition duration-300"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Projects;
