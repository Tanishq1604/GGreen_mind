const express = require("express");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const {User, Location, Post} = require("./db");
const port = 4040;
const paymentroute=require('./paymentroute.js')
app.use(express.json());
const session = require("express-session");
const passport = require("passport");
const Oauth2Strategy = require("passport-google-oauth2").Strategy;
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,DELETE,PUT",
    credentials: true,
  })
);





//google auth--------------------------------------------------------------------------------------------------------------------------------

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Oauth2Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["email", "profile"],
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
        }
        await user.save();
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/home",
    failureRedirect: "http://localhost:5173/login",
  })
);
app.get("/login/success", (res, req) => {
  if (res.user) {
    res.json({
      msg: "user login",
      user: req.user,
    });
  } else {
    res.json({
      msg: "user not login",
    });
  }
});
// end og google auth--------------------------------------------------------------------------------------------------------------------------------








//normal sign------------------------------------------------------------------------------------------------------------------------

app.post("/signin", check, (req, res) => {
  const user = req.body;
  User.findOne({ email: user.email }).then((data) => {
    const pass = jwt.verify(data.password, process.env.JWT_PASS);
    if (pass === user.password) {
      res.status(200).send("exist");
    } else {
      res.status(400).send("notexist");
    }
  });
});

app.post("/signup", async (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    // console.log(user);

    const data = await User.findOne({ email: user.email })
      if (!data) {
        const hashedpass = jwt.sign(user.password, process.env.JWT_PASS);
        const newUser = await User.create({
          name: user.name,
          email: user.email,
          password: hashedpass,
        });
        res.send(newUser._id);
      } else {
        res.send("alreadyexist");
      }
  
  
});
//end of sign --------------------------------------------------------------------------------------------------------------------










//middleware for checking out--------------------------------------------------------------------------------------------------------------------
function check(req, res, next) {
  const user = req.body;
  User.findOne({ email: user.email }).then((data) => {
    if (!data) {
      return res.status(400).send("Invalid Email or Password");
    } else {
      next();
    }
  });
}
//end\----------------------------------------------------------------------------------------------------------------------------------------------------










//razorpay-------------------------------------------------------------------------------------------------------------------------------------
app.use('/api',paymentroute);//see this fucntion in paymentroute.js----------------------------------------------------------------
//end\----------------------------------------------------------------------------------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});




// Handling POST request


// creating a New post
app.post('/create/post', async (req, res) => {
  const post = {
    userid: req.body.userid,
    image: req.body.image,
  };
  console.log(post);

      Post.create({
        userId: post.userid,
        Images: post.image
      });
});


// Getting Post
app.get('/post/:postId', async (req, res) => {
  const postId = req.params.postId;

  try {
      const post = await Post.findById(postId);

      if (!post) {
          return res.status(404).json({ error: 'Post not found' });
      }

      // If the post is found, send it as JSON response
      res.json(post);
  } catch (error) {
      // Handle any errors that occur during the database query
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// Getting User
app.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
      const user = await User.findById(userId);

      if (!user) {
          return res.status(404).json({ error: 'user not found' });
      }

      // If the user is found, send it as JSON response
      res.json(user);
  } catch (error) {
      // Handle any errors that occur during the database query
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/posts', async (req, res) => {
  try {
      // Retrieve all posts from the database
      const posts = await Post.find();

      // Send the posts as JSON response
      res.json(posts);
  } catch (error) {
      // Handle any errors that occur during the database query
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// get longitude and latitude
app.get('/posts/lonlat', async (req, res) => {
  
    const user = {
      long: req.body.long,
      lat: req.body.lat,
      userid: req.body.userid,
    };
    Location.create({
      userId : userid,
      longitude : long,
      latitude : lat
    });
});



// add karmapoints
async function addkarma(num, userID){
  user = User.findOne(userID);
  if(user){
    user.karmaPoints += num;
  }

}

// add karma for like

app.get('/karma/like', (req, res) => {
  addkarma(1, req.data.userid);
  
});


app.get('/karma/post', (req, res) => {
  addkarma(5, req.data.userid);
  
});