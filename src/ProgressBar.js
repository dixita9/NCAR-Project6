import React from "react";
import { useLocation } from "react-router-dom";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: '80%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out'
    
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
   
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

const MyPageComponent = () => {
  const [progress, setProgress] = React.useState(0);
  const location = useLocation();

  // Function to update the progress value based on the current page
  const updateProgress = (currentPage) => {
    // Logic to determine the progress percentage based on the current page
    let progressPercentage = 0;
    if (currentPage === '') {
      progressPercentage = 0;
    } else if (currentPage === 'page1') {
      progressPercentage = 25;
    }else if (currentPage === 'page2') {
        progressPercentage = 50;
    } else if (currentPage === 'page3') {
      progressPercentage = 75;
    } else if (currentPage === 'page4') {
      progressPercentage = 100;
    } 

    setProgress(progressPercentage);
    
  };

  // Call the updateProgress function whenever the page changes
  React.useEffect(() => {
    const { pathname } = location;
    const currentPage = pathname.substring(1); // Remove the leading "/"
    updateProgress(currentPage);
  }, [location]);

  return (
    <div>
      {/* Render the progress bar component */}
      <ProgressBar bgcolor="#36545d" completed={progress} />
    </div>
  );
};

export default MyPageComponent;
