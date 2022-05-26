console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

loginUser = (email, password, success, failure) => {
  if (Object.keys(usersDB).includes(email)) {
  setTimeout(()=> {
      console.log("Now we have the data of user:", email)
      success({userEmail: email});
  }, 3000);
  } else {
  setTimeout(() => {
      failure = displayError("User not found!")
  }, 3000);

    }
  }

getUserVideos = (email, success, failure) => {
  if (usersDB[email].length) {
    setTimeout(() => {
      success(usersDB[email])
    }, 2000);
  } else {
    setTimeout(() => {
      failure = displayError("Videos not found!")
    },2000); 
  }
}
videoDetails = (video, success, failure) => {

  if (video?.title) {
  setTimeout(() =>{
    success(video[0])
  }, 2000)
    } else {
      setTimeout(()=> {
        failure = displayError("Video Title not found!")
      }, 2000)
      
    }
}

displayError = (errorMessage) => {
  console.error(new Error(errorMessage));
}

getPassedUsersFirstVideoTitle = (user) =>
  loginUser(user, 1234, (user) => {
    console.log("user:", user);

  getUserVideos(user.userEmail,(video) => {
    console.log("videos:", video);
    
  videoDetails(video, (title) => {
    console.log("title", title);
      });
    });
  });

  getPassedUsersFirstVideoTitle("user4@hw.js");
  getPassedUsersFirstVideoTitle("user3@hw.js");
  getPassedUsersFirstVideoTitle("user2@hw.js");
  getPassedUsersFirstVideoTitle("user1@hw.js");


console.log("Finish");







