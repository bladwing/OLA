console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

loginUser = (email, password, callback) => {
  setTimeout(()=> {
      console.log("Now we have the data of user:", email)
      callback({userEmail: email});
  }, 3000)
};

getUserVideos = (email, callback) => {
    setTimeout(()=> {
      callback(usersDB[email])
    }, 2000)
};

videoDetails = (video, callback) => {
  setTimeout(() =>{
    callback(video.title)
  }, 2000)
}

const getPassedUsersFirstVideoTitle = (user) =>
  loginUser(user, 1234, (user) => {
    console.log("user:", user);

  getUserVideos(user.userEmail,(video) => {
    console.log("videos:", video);
    
  videoDetails(video[0], (title) => {
    console.log("title", title);
      });
    });
  });
  getPassedUsersFirstVideoTitle("user1@hw.js");






console.log("Finish");






