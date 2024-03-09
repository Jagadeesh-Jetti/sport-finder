// ViewProfilePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewProfilePage = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Extract profile data from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');
    if (dataParam) {
      // Decode and parse profile data
      const decodedData = decodeURIComponent(dataParam);
      const parsedData = JSON.parse(decodedData);
      setProfileData(parsedData);
    }
  }, []);

  const handleSearchNearby = () => {
    // Implement functionality to search nearby sports arena
    console.log('Searching nearby sports arena...');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>View Profile</h2>
        {profileData && (
          <div>
            <p><strong>Full Name:</strong> {profileData.fullName}</p>
            <p><strong>Age:</strong> {profileData.age}</p>
            <p><strong>Gender:</strong> {profileData.gender}</p>
            <p><strong>Location:</strong> {profileData.location}</p>
            <p><strong>Sports Interests:</strong> {profileData.sportsInterests.join(', ')}</p>
            <p><strong>Expertise Levels:</strong></p>
            <ul>
              {Object.entries(profileData.expertiseLevels).map(([sport, expertise]) => (
                <li key={sport}><strong>{sport}:</strong> {expertise}</li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={handleSearchNearby}>Search Nearby Sports Arena</button>
      </div>
    </div>
  );
};

export default ViewProfilePage;
