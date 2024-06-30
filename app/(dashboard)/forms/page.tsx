import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms | Predator",
};

const DataTablesPage = () => {
  return (
    <div>
      <div className="bg-gray-100 p-4 md:p-8">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-lg md:text-xl font-bold mb-4">
            PT Torabika Eka Semesta - Divisi Instant Creamer
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Plant:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                placeholder="Enter plant number"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                No. SPK:
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter SPK number"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Date:
              </label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Department:
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter department"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Shift:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                placeholder="Enter shift number"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Line:
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                placeholder="Enter line number"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Area:
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter area"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Machine:
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter machine number"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Time:
              </label>
              <input type="time" className="w-full p-2 border rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                System Condition:
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="stop_production"
                  name="system_condition"
                  className="mr-2"
                />
                <label htmlFor="stop_production" className="text-gray-700">
                  Stop Production
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="continue_production"
                  name="system_condition"
                  className="mr-2"
                />
                <label htmlFor="continue_production" className="text-gray-700">
                  Continue Production
                </label>
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Priority:
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="very_high"
                  name="priority"
                  className="mr-2"
                />
                <label htmlFor="very_high" className="text-gray-700">
                  Very High (1 Day)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="high"
                  name="priority"
                  className="mr-2"
                />
                <label htmlFor="high" className="text-gray-700">
                  High (2 Days)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="medium"
                  name="priority"
                  className="mr-2"
                />
                <label htmlFor="medium" className="text-gray-700">
                  Medium (5 Days)
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="low" name="priority" className="mr-2" />
                <label htmlFor="low" className="text-gray-700">
                  Low (7 Days)
                </label>
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Jenis Pekerjaan:
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="preventive"
                  name="jenis_pekerjaan"
                  className="mr-2"
                />
                <label htmlFor="preventive" className="text-gray-700">
                  Preventive
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="corrective"
                  name="jenis_pekerjaan"
                  className="mr-2"
                />
                <label htmlFor="corrective" className="text-gray-700">
                  Corrective
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="project"
                  name="jenis_pekerjaan"
                  className="mr-2"
                />
                <label htmlFor="project" className="text-gray-700">
                  Project
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Problem:
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Describe the problem"
              ></textarea>
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Repair Suggestion:
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Provide repair suggestion"
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Cause Analysis:
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Analyze the cause"
              ></textarea>
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Repair Actions:
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Describe repair actions"
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
            <div className="col-span-7">
              <label className="block text-gray-700 font-bold mb-2">
              Spareparts Usage
              </label>
              <textarea
                className="w-full p-2 border rounded"
                placeholder="Analyze the cause"
              ></textarea>
            </div>
            <div className="col-span-5">
              <label className="block text-gray-700 font-bold mb-2">
                Executor
              </label>
              <div className="executor">
                <label className="radio mr-1">
                  <input
                    type="radio"
                    name="executor"
                    className="m-1"
                  />
                  Internal
                </label>
                <label className="radio mr-1">
                  <input
                    type="radio"
                    name="executor"
                    className="m-1"
                  />
                  Eksternal
                </label>
              </div>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Input Executor"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Start Time:
              </label>
              <input
                type="datetime-local"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                End Time:
              </label>
              <input
                type="datetime-local"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              Result:
            </label>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Describe the result"
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Performed by:
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter name"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Verified by:
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter name"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">
                Accepted by:
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTablesPage;
