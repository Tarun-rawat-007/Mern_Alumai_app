import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchFilter = () => {
  const [search, setSearch] = useState('');
  const [degree, setDegree] = useState('');
  const [course, setCourse] = useState('');
  const [field, setField] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [results, setResults] = useState([]);

  // 🔽 Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  useEffect(() => {
    axios.get('http://localhost:3000/api/contact')
      .then(response => {
        setAllUsers(response.data);
        setResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = () => {
    const filtered = allUsers.filter((user) => {
      const name = user.name || '';
      const email = user.email || '';
      const degreeText = user.degree || '';
      const courseText = user.course || '';
      const collegeText = user.college || '';

      const searchLower = search.trim().toLowerCase();

      return (
        (!search ||
          name.toLowerCase().includes(searchLower) ||
          email.toLowerCase().includes(searchLower) ||
          degreeText.toLowerCase().includes(searchLower) ||
          courseText.toLowerCase().includes(searchLower) ||
          collegeText.toLowerCase().includes(searchLower)
        ) &&
        (!degree || user.degree === degree) &&
        (!course || user.course === course) &&
        (!field || user.field === field)
      );
    });

    setResults(filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  const clearFilters = () => {
    setSearch('');
    setDegree('');
    setCourse('');
    setField('');
    setResults(allUsers);
    setCurrentPage(1); // Reset page
  };

  // 🔽 Pagination Logic
  const totalPages = Math.ceil(results.length / resultsPerPage);
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 px-4" id='search' data-aos="fade-up-right">
      <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-lg border border-gray-300 mb-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Search Alumni or Students</h2>

        <input
          type="text"
          placeholder="Search by name,course,degree, field, etc..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 px-4 py-3 border-2 border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <select value={degree} onChange={(e) => setDegree(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black">
          <option value="">Select Degree</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="B.Com">B.Com</option>
            <option value="BA">BA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="B.Ed">B.Ed</option>
            <option value="LLB">LLB</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
            <option value="M.Com">M.Com</option>
            <option value="MA">MA</option>
            <option value="M.Sc">M.Sc</option>
            <option value="PhD">PhD</option>
            <option value="Diploma">Diploma</option>
            <option value="Others">Others</option>


          </select>

          {/* Course Filter */}
          <select value={course} onChange={(e) => setCourse(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black">
            <option value="">Select Course</option>
              <option value="Web Development">Web Development</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Data Science">Data Science</option>
              <option value="AI/ML">AI / ML</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="DevOps">DevOps</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Game Development">Game Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="AR/VR">Augmented / Virtual Reality (AR/VR)</option>
              <option value="IOT">Internet of Things (IoT)</option>
              <option value="Big Data">Big Data</option>
              <option value="Software Testing">Software Testing</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="Networking">Networking</option>
              <option value="Database Management">Database Management</option>
              <option value="Others">Others</option>

            {/* ... More options */}
          </select>

          <select value={field} onChange={(e) => setField(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black">
          <option value="">Select Field</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="Cloud Architect">Cloud Architect</option>
                    <option value="Cyber Security Expert">Cyber Security Expert</option>
                    <option value="Game Developer">Game Developer</option>
                    <option value="Mobile App Developer">Mobile App Developer</option>
                    <option value="AI/ML Engineer">AI / ML Engineer</option>
                    <option value="Blockchain Developer">Blockchain Developer</option>
                    <option value="Digital Marketer">Digital Marketer</option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Network Engineer">Network Engineer</option>
                    <option value="Academic/Researcher">Academic / Researcher</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Other">Other</option>

          </select>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={handleSearch} className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">Search</button>
          <button onClick={clearFilters} className="text-black border border-black px-6 py-3 rounded-xl hover:bg-gray-200 transition">Clear Filters</button>
        </div>
      </div>

      <div className="w-full max-w-7xl">
        {results.length === 0 ? (
          <p className="text-center text-gray-500">No matching results. Please try a different filter or keyword.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
              {currentResults.map((user) => (
                <div key={user._id} className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 flex flex-col items-center text-center">
                  <img
                    src="https://images.unsplash.com/photo-1701500096456-28186c4a306d?w=500&auto=format&fit=crop&q=60"
                    alt={user.name}
                    className="w-20 h-20 rounded-full object-cover border border-gray-300 mb-3"
                  />
                  <h3 className="text-lg font-semibold mb-1">{user.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">📧 <span className="ml-1">{user.email}</span></p>
                  <p className="text-gray-600 text-sm mb-3">📱 <span className="ml-1">{user.phone}</span></p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p><strong>Degree:</strong> {user.degree} ({user.batch})</p>
                    <p><strong>Course:</strong> {user.course}</p>
                    <p><strong>Field:</strong> {user.field}</p>
                    <p><strong>LinkedIn:</strong> {user.liurl}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔽 Pagination Controls */}
            <div className="flex justify-center gap-2 mb-10">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200 text-black'
                  } hover:bg-gray-300 transition`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
