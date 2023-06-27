import React from 'react';
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import Header3 from './Header3';
import StudentExercise3 from './StudentExercises3';

const Page3 = () => {
  const completed = 33.33; // Set the initial completed value here

  return (
    <div className="container">
      <div className="background-image">
        <Hiking />
      </div>
      <div className="content">
        <Header3 />
        <ProgressBar bgcolor="#36545d" completed={completed} />
        <StudentExercise3 />
      </div>
    </div>
  );
};

export default Page3;
