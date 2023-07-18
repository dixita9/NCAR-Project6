if (
    answer === 'yes' &&
    answer2 === 'yes' && answer3 == "yes" && answer4 == "yes"
  ) {
    const message = 'Your application is a good match for GPU enabled computing! :)'
    setResultMessage(message);
    localStorage.setItem('resultMessage', message);
    
  } else if(
    answer === 'no' &&
    answer2 === 'no' && answer3 == "no" && answer4 == "no"
  )
  {

    const message = ` Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular the following steps should be done first: 
    1. Create a Makefile 
    2. Add the ability to flexibly execute the code by other users
    3. Add your code  into revision control system like Git
    4. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`
    setResultMessage(message);
    localStorage.setItem('resultMessage', message);
    
  }
  else if(
    answer === 'yes' &&
    answer2 === 'yes' && answer3 == "yes" && answer4 == "no"
  )
  {

    const message = ` Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular the following steps should be done first: 
   
     1. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`
    setResultMessage(message);
    localStorage.setItem('resultMessage', message);
    
  }else if(
    answer === 'yes' &&
    answer2 === 'yes' && answer3 == "no" && answer4 == "yes"
  )
  {

    const message = ` Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular the following steps should be done first: 
  
    1. Add your code  into revision control system like Git`
    setResultMessage(message);
    localStorage.setItem('resultMessage', message);
    
  }else if(
    answer === 'yes' &&
    answer2 === 'yes' && answer3 == "no" && answer4 == "no"
  )
  {

    const message = ` Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular the following steps should be done first: 
    1. Add your code  into revision control system like Git
    2. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs `
    setResultMessage(message);
    localStorage.setItem('resultMessage', message);
    
  }else if(
    answer === 'yes' &&
    answer2 === 'no' && answer3 == "yes" && answer4 == "yes"
  )
  {

    const message = ` Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular the following steps should be done first: 
    1. Add the ability to flexibly execute the code by other users`
    
    localStorage.setItem('resultMessage', message);
    
  }else if(
    answer === 'yes' &&
    answer2 === 'no' && answer3 == "yes" && answer4 == "no"
  )
  {

    const message = ` Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular the following steps should be done first: 
    1. Add the ability to flexibly execute the code by other users
    2. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`
    setResultMessage(message);
    localStorage.setItem('resultMessage', message);

  }else if(
    answer === 'yes' &&
    answer2 === 'no' && answer3 == "no" && answer4 == "yes"
  )
  {

    const message = ` Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular the following steps should be done first:
    1. Add the ability to flexibly execute the code by other users
    2. Add your code  into revision control system like Git`

  
    setResultMessage(message);
    localStorage.setItem('resultMessage', message);
  }else if(
    answer === 'yes' &&
    answer2 === 'no' && answer3 == "no" && answer4 == "no"
  )
  {

    const message = ` Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular the following steps should be done first:
    1. Add the ability to flexibly execute the code by other users
    2. Add your code  into revision control system like Git
    3. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.
   `

  
    setResultMessage(message);
    localStorage.setItem('resultMessage', message);
  } else if(
    answer === 'no' &&
    answer2 === 'yes' && answer3 == "yes" && answer4 == "yes"
  )
  {

    const message = ` Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular the following steps should be done first: 
    1. Create a Makefile `
    setResultMessage(message);
    localStorage.setItem('resultMessage', message);
    
  }




  const answerMapping = {
    'yes-yes-yes-yes': 'Your application is a good match for GPU enabled computing! :)',
    'no-no-no-no': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement. 
    In particular, the following steps should be done first:
    1. Create a Makefile
    2. Add the ability to flexibly execute the code by other users
    3. Add your code into a revision control system like Git
    4. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`,
    'yes-yes-yes-no': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular, the following steps should be done first:
    1. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`,
    'yes-yes-no-yes': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular, the following steps should be done first:
    1. Add your code into a revision control system like Git.`,
    'yes-yes-no-no': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular, the following steps should be done first:
    1. Add your code into a revision control system like Git
    2. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`,
    'yes-no-yes-yes': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular, the following steps should be done first:
    1. Add the ability to flexibly execute the code by other users.`,
    'yes-no-yes-no': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular, the following steps should be done first:
    1. Add the ability to flexibly execute the code by other users
    2. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`,
    'yes-no-no-yes': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular, the following steps should be done first:
    1. Add the ability to flexibly execute the code by other users
    2. Add your code into a revision control system like Git.`,
    'yes-no-no-no': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular, the following steps should be done first:
    1. Add the ability to flexibly execute the code by other users
    2. Add your code into a revision control system like Git
    3. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`,
    'no-yes-yes-yes': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement.
    In particular, the following steps should be done first:
    1. Create a Makefile`,
    'no-yes-yes-no': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement. 
    In particular, the following steps should be done first:
    1. Create a Makefile
    2. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`,
    'no-yes-no-yes': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement. 
    In particular, the following steps should be done first:
    1. Create a Makefile
    2. Add your code into a revision control system like Git`,
    'no-yes-no-no': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement. 
    In particular, the following steps should be done first:
    1. Create a Makefile
    2. Add your code into a revision control system like Git
    3. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`,
    'no-no-yes-yes': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement. 
    In particular, the following steps should be done first:
    1. Create a Makefile
    2. Add the ability to flexibly execute the code by other users`,
    'no-no-yes-no': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement. 
    In particular, the following steps should be done first:
    1. Create a Makefile
    2. Add the ability to flexibly execute the code by other users
    3. Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs.`,
    'no-no-no-yes': `Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement. 
    In particular, the following steps should be done first:
    1. Create a Makefile
    2. Add the ability to flexibly execute the code by other users
    3. Add your code into a revision control system like Git`,

  };
    // Generate the combination string
  const combination = `${answer}-${answer2}-${answer3}-${answer4}`;

  // Get the corresponding message from the lookup table
  const message = answerMapping[combination] || '';


  





  let result = ""

        const start1 = `Based on your input, it appears that your science objective is amenable to GPU-based computing.  This assessment is based on several of your answers:`
        const True1 = `The number of grid points of ${divisionResult} per GPU or node is sufficient.  Typically, a GPU based computing solution requires in excessive of ${threshold} grid points per GPU`

        const True2 = `GPU’s are designed for computationally heavy problems.  You indicated that you perform approximately ${volume} Mbytes of disk I/O every ${frequency} seconds.It sounds like a significant percentage of time for your application is spent performing computations. This is necessary but not sufficient condition for the efficient use of GPU-based computing.`
        const start2 = `Based on your input, it does not appear that your science objective is amenable to GPU-based computing.  This assessment is based on several of your answers`
        const False1 = `The number of grid points per GPU or node is rather low ${divisionResult}.Typically, a GPU based computing solution requires in excess of ${threshold} grid points per GPU.
        i. What can I do about this?  
          1. Is the size of your problem sufficient to address your science objective or is it a limitation of your existing compute solution. If it is sufficient to address your science objective, then there does not appear to be an advantage of GPU-based solution versus a CPU-based solution.  If it is not sufficient, then a GPU-based solution may enable improvement of the fidelity of your simulations.`
        
        const False2 = `GPU’s are designed for computationally heavy problems.  You indicated that you perform approximately ${volume} Mbytes of disk I/O every ${frequency} seconds. A significant percentage of time for your application will likely be spent moving data from the GPU memory to the disk subsystem.
        What can I do about this?
        Can you reduce the amount of I/O that your application performs`
        const False3 = `You indicated that your problem has a [[strong, moderate, weak} ${answer2} limitation. While GPU-based computing can successfully be used for both rate and throughput computing tasks, it frequently does better for throughput based computing.`

      
        if ( divisionResult > threshold){
          result = start1 + " " 
        }
        else{
          result += start2 + " "
        }

        {/*
        if(answer == "no"){
          num += 1
          result += "\n"+ num + ". " + string1
        }
  
        if(answer2 == "no"){
          num += 1
          result += "\n"+ num + ". " + string2
        }
        if(answer3 == "no"){
          num += 1
          result += "\n"+ num + ". " + string3
        }
        if(answer4 == "no"){
          num += 1
          result += "\n"+ num + ". " + string4
        } */}

        if (product <= 500) {
          setResult(
            <p>
              The ROI is 3x. <br /><br />
              Would a 3x ROI have a meaningful impact on your science?
            </p>
          );
          localStorage.setItem('result', '3x');
        } else {
          setResult(
            <p>
              The ROI is 5x. <br /><br />
              Would a 5x ROI have a meaningful impact on your science?
            </p>
          );
          localStorage.setItem('result', '5x');
          
        }


        if (0 < newTotalPoints && newTotalPoints <= 10) {
          setResult("Easy Peezy! It is going to be very easy to make your application GPU enabled.");
        } else if (10 < newTotalPoints && newTotalPoints <= 15) {
          setResult("Not too hard! It is going to take some work to make your application GPU enabled.");
        } else if (15 < newTotalPoints && newTotalPoints <= 25) {
          setResult("Difficult! It is going to be very hard to make your application GPU enabled.");
        } else {
          setResult("");
        }

        {/*{divisionResult && <p>Division Result: {divisionResult}</p>}
      {IOfrequency && <p> IOfrequency: {IOfrequency}</p>}
      {IOVolume && <p> IOVolume: {IOVolume}</p>}
      {RateThroughput && <p> Rate/Throughput: {RateThroughput}</p>}
      {TotalPoints && <p> Total Points: {TotalPoints}</p>} 
      {Product && <p> Product: {Product}</p>} 
      {Result && <p> ROI: {Result}</p>} 
      {iofreq && <p>iofreq: {iofreq}</p>}*/}

  const divisionResult = localStorage.getItem('divisionResult');
  const IOfrequency = localStorage.getItem('IOFrequency');
  const IOVolume = localStorage.getItem('IOVolume');
  const RateThroughput = localStorage.getItem('RateThroughput');
  const TotalPoints = localStorage.getItem('TotalPoints');
  const Product = localStorage.getItem('product');
  const Result = localStorage.getItem('result');
  const iofreq = localStorage.getItem("iofreq")