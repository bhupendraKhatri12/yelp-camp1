const express = require('express');
const app = express();
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine" , "ejs");
mongoose.connect('mongodb://localhost/yelp_camp',{useNewUrlParser:true,useUnifiedTopology:true});
//data base schema 
var campgroundSchema =new mongoose.Schema({
    name : String,
    image : String,
    description : String
   
   
   });
   
   
   var Campground =mongoose.model('Campground',campgroundSchema);   //.model("model-name",schema-name)
   
// var campgroundSchema =new mongoose.Schema({
//  name : String,
//  image : String,
//  description : String


// });


// var Campground =mongoose.model('Campground',campgroundSchema);   //.model("model-name",schema-name)


// Campground.create({
//     name  : "Salmaon Creeek",
//     image :"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.facebook.com" 
// },function(err,campground){
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("NEWLY CREATED CAMPGROUND");
//         console.log(campground);
//     }
// });




    // var campground=[{Name  : "Salmaon Creeek",image :"https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    //             {Name  : "Salmaon Creeek",image :"https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    //             {Name  : "Salmaon Creeek",image :"https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.facebook.com" },
    //             {Name  : "Salmaon Creeek",image :"https://images.pexels.com/photos/2898221/pexels-photo-2898221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.com" },
    //             {Name  : "Salmaon Creeek",image :"https://images.pexels.com/photos/712067/pexels-photo-712067.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.com" },
    //             {Name  : "Salmaon Creeek",image :"https://images.pexels.com/photos/712067/pexels-photo-712067.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.com" },
    //             {Name  : "Salmaon Creeek",image :"https://images.pexels.com/photos/712067/pexels-photo-712067.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.com" }

    //         ];



app.get('/',function(req,res){

    res.render("landing.ejs");
    });


app.get("/campground",function(req,res){


Campground.find({},function(err,allcampground)  //all campgrouud is a list of data stored in db scehme  is name and img
{
    if(err)
    {
        console.log(err);
    }

else {
res.render("campgrounds",{campgrounds:allcampground});


}


});

});


app.get("/campground/new",function(req,res)
{

    res.render('new1.ejs');

});

app.post('/campground',function(req,res){

var name = req.body.name;
var image = req.body.image;
var description =req.body.Description;
 var newCampground = {name :name,image:image,description:description};
// campground.push(newCampground);

Campground.create(newCampground,function(err,newCampgrounddb){

if(err)
{
    console.log(err);
}
else
{

    res.redirect('/campground');

}

});



});






app.listen("3000", function(){

    console.log("Server staertedf");

});



