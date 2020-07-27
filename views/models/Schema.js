var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/yelp_camp',{useNewUrlParser:true,useUnifiedTopology:true});






var campgroundSchema =new mongoose.Schema({
    name : String,
    image : String,
    description : String
   
   
   });
   
   
   var Campground =mongoose.model('Campground',campgroundSchema);   //.model("model-name",schema-name)
   
   modules.exports = Campground;