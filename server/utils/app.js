const express = require('express') // Backend App (server)
const cors = require('cors') // HTTP headers (enable requests)
const {ORIGIN} = require('../constants')
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Preference = require('../models/Preference')

// initialize app
const app = express()
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// middlewares
app.use(cors({origin: ORIGIN}))
app.use(express.json({extended: true})) // body parser
app.use(express.urlencoded({extended: false})) // url parser

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true    }));
app.use(express.static("public"));

// error handling--------------------------------------
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send()
  next()
})

//--------------------------------------------------------------------------------------------------



app.route("/preferences/:preferencePhonenumber")
  .get(function(req, res){
    const phone = req.params.preferencePhonenumber;

    // Find the Preference document with the given phone number
    Preference.findOne({ phone: phone})
      .then((preference) => {
        if (!preference) {
          // If no preference is found, create a new preference with the given phone number and null fields
          const newPreference = new Preference({
            name: null,
            phone: phone,
            tips: null
          });
          // Save the new preference to the database
          newPreference.save()
            .then((createdPreference) => {
              // Return the newly created preference as the response
              res.send(createdPreference);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send("Error creating new preference");
            });
        } else {
          // If preference is found, return it as response
          res.send(preference);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Error fetching preference");
      });
  });
//---------------------------------------------------------------------------
  app.route("/preferences/:preferencePhonenumber")
  .post(function(req, res){
    const phone = req.params.preferencePhonenumber;

    // Update the Preference document with the given phone number
    Preference.findOneAndUpdate({ phone: phone }, { name: req.body.name, tips: req.body.tips }, { new: true })
      .then((preference) => {
        // If preference is found and updated, return it as response
        res.send(preference);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Error updating preference");
      });
  });

module.exports = app
