import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Hospital Dashboard</h1>
        <button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <Link to="/patient-register" className="block px-2 py-2">Add Patient</Link>
        </button>
      </header>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-sm font-semibold text-gray-600">Total Patients</h2>
          <p className="text-3xl font-bold text-gray-800 mt-2">2,480</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-sm font-semibold text-gray-600">Appointments Today</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">156</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-sm font-semibold text-gray-600">Doctors Available</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">38</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-sm font-semibold text-gray-600">Pending Reports</h2>
          <p className="text-3xl font-bold text-red-600 mt-2">19</p>
        </div>
      </section>

      {/* Recent Appointments and Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Appointments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <div>
                <p className="font-medium text-gray-700">John Doe</p>
                <p className="text-sm text-gray-500">Dr. Smith | Cardiology</p>
              </div>
              <span className="text-sm text-blue-500">10:00 AM</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <div>
                <p className="font-medium text-gray-700">Mary Johnson</p>
                <p className="text-sm text-gray-500">Dr. Allen | Pediatrics</p>
              </div>
              <span className="text-sm text-blue-500">11:30 AM</span>
            </li>
            <li className="flex justify-between">
              <div>
                <p className="font-medium text-gray-700">Akash Gupta</p>
                <p className="text-sm text-gray-500">Dr. Taylor | Orthopedics</p>
              </div>
              <span className="text-sm text-blue-500">02:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Patient Statistics</h2>
          <img
    src="https://img.freepik.com/free-vector/infographic-element-collection_23-2148152334.jpg?semt=ais_hybrid"
alt="Chart Placeholder"
            className="w-full"
          />
        </div>
      </section>

      {/* Actions Section */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Schedule Appointment
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
            View Reports
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Add Doctor
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
