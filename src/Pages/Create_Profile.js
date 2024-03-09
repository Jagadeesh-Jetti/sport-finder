import React, { useState } from 'react';

const CreateProfileForm = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [sportsInterests, setSportsInterests] = useState([]);
  const [expertiseLevels, setExpertiseLevels] = useState({});

  const handleSportInterestChange = (event) => {
    const selectedSport = event.target.value;
    if (sportsInterests.includes(selectedSport)) {
      const updatedInterests = sportsInterests.filter(
        (interest) => interest !== selectedSport
      );
      const updatedLevels = { ...expertiseLevels };
      delete updatedLevels[selectedSport];
      setSportsInterests(updatedInterests);
      setExpertiseLevels(updatedLevels);
    } else {
      setSportsInterests([...sportsInterests, selectedSport]);
      setExpertiseLevels({
        ...expertiseLevels,
        [selectedSport]: 'beginner', // Default expertise level
      });
    }
  };

  const handleExpertiseChange = (sport) => (event) => {
    setExpertiseLevels({
      ...expertiseLevels,
      [sport]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validation checks
    if (
      !fullName.trim() ||
      !age.trim() ||
      !gender.trim() ||
      !location.trim() ||
      sportsInterests.length === 0
    ) {
      alert('Please fill in all fields!');
      return;
    }
  
    // Encode profile data
    const profileData = {
      fullName,
      age,
      gender,
      location,
      sportsInterests,
      expertiseLevels,
    };
    const encodedData = encodeURIComponent(JSON.stringify(profileData));
  
    // Redirect to view profile page with encoded data
    window.location.href = `/view-profile?data=${encodedData}`;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Create Profile</h2>
      </div>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
            required
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="others"
            checked={gender === 'others'}
            onChange={(e) => setGender(e.target.value)}
          />
          Others
        </label>
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Select Sports Interests:</label>
        <select
          multiple
          value={sportsInterests}
          onChange={handleSportInterestChange}
          required
        >
          <option value="cricket">Cricket</option>
          <option value="badminton">Badminton</option>
          <option value="tennis">Tennis</option>
          <option value="swimming">Swimming</option>
          {/* Add more sports options here */}
        </select>
      </div>
      {sportsInterests.map((sport) => (
        <div key={sport}>
          <label htmlFor={sport}>
            {sport.charAt(0).toUpperCase() + sport.slice(1)} Expertise Level:
          </label>
          <select
            id={sport}
            value={expertiseLevels[sport]}
            onChange={handleExpertiseChange(sport)}
            required
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="skilled">Skilled</option>
          </select>
        </div>
      ))}
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default CreateProfileForm;
