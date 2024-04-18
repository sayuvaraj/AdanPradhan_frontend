import React, { useEffect, useState } from 'react';
import ClgHeader from './component/ClgHeader';
import 'animate.css'; 
import Footer from './Footer';
import './RunningCollegeStyle.css'; // Import CSS file
import LoadingAnimation from './LoadingAnimation'; // Import LoadingAnimation component

const RunningColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch('http://localhost:3003/api/clg/getYourworkshops', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'clg_token': `${localStorage.getItem('clg_token')}`
          }
        });
        const data = await response.json();
        setColleges(data.formattedcolleges); // Set formatted colleges in state
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching colleges:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchColleges();
  }, []);

  const handleStart = async (collegeId, collegeName, courseOffered) => {
    try {
      console.log(collegeId);
      const response = await fetch(`http://localhost:3003/api/clg/updateStatus/${collegeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'running' })
      });
      if (response.ok) {
        const updatedColleges = colleges.map(college => {
          if (college.college_id === collegeId) {
            return { ...college, status: 'running' };
          }
          return college;
        });
        setColleges(updatedColleges);
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleStop = async (collegeId, collegeName, courseOffered) => {
    try {
      console.log(collegeId);
      const response = await fetch(`http://localhost:3003/api/clg/updateStatus/${collegeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'stopped' })
      });
      if (response.ok) {
        const updatedColleges = colleges.map(college => {
          if (college.college_id === collegeId) {
            return { ...college, status: 'stopped' };
          }
          return college;
        });
        setColleges(updatedColleges);
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (collegeId, collegeName, courseOffered) => {
    try {
      const response = await fetch(`http://localhost:3003/api/clg/deleteWorkshop/${collegeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        // Remove the deleted workshop from the colleges state
        const updatedColleges = colleges.filter(college => college.college_id !== collegeId);
        setColleges(updatedColleges);
      } else {
        console.error('Failed to delete workshop');
      }
    } catch (error) {
      console.error('Error deleting workshop:', error);
    }
  };

  return (
    <>
      <ClgHeader/>
      <section>
        <center><h1 className=' animate__animated animate__rollIn'>Your workshops....</h1></center>
        {loading ? (
          <LoadingAnimation /> // Render loading animation while loading is true
        ) : (
          <div className=" animate__animated  animate__rollIn workshop-table-container">
            <table className="workshop-table">
              <thead>
                <tr>
                  <th>College</th>
                  <th>Course Offered</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((college, index) => (
                  <tr key={index}>
                    <td>{college.collegeName}</td>
                    <td>{college.courseOffered}</td>
                    <td>
                      <button
                        id="start-btn" 
                        onClick={() => handleStart(college.college_id, college.collegeName, college.courseOffered)}
                        disabled={college.status === 'running'}
                      >
                        Start
                      </button>
                      <button
                        id="stop-btn"
                        onClick={() => handleStop(college.college_id, college.collegeName, college.courseOffered)}
                        disabled={college.status !== 'running'}
                      >
                        Stop
                      </button>
                      <button
                        id="delete-btn"
                        onClick={() => handleDelete(college.college_id, college.collegeName, college.courseOffered)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <Footer/>
    </>
  );
};

export default RunningColleges;
