const mongoose = require("mongoose");

const meetupSchema = new mongoose.Schema(
{
  eventName: {
    type: String,
    required: true,
  },

  hostedBy: {
    type: String,
    required: true,
  },
  eventType:[{
    type: String,
    enum: ["Online", "Offline"]
  }],

  coverImgUrl: {
    type: String,
    required: true,
  },

  details: {
    type: String,
    required: true,
  },

  dressCode: {
    type: String,
    required: true,
  },

  ageRestrictions: {
    type: String,
    required: true,
  },

  eventTags: [{
    type: String,
    enum: ["Marketing", "Digital"]
  }],

  // ✅ ONE field for date & time
  startDateTime: {
    type: Date,
    required: true,
  },

  endDateTime: {
    type: Date,
    required: true,
  },

  // ✅ Address grouped properly
  location: {
    plotNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    }
  },

  amount: {
    type: Number,
    required: true,
  },

  speakers: [{
    speakersImageUrl: String,
    speakersName: String,
    speakersProfession: String
  }]
},
{
  timestamps: true,
});


const Meetup = mongoose.model('Meetup',meetupSchema);
module.exports=Meetup;