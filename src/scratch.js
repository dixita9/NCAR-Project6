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