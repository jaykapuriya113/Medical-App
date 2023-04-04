const fs=require("fs");
const express=require("express");
const morgan =require("morgan"); 
const tourRoutes=require("./routes/tourRoutes");
const userRoutes=require("./routes/userRoutes");
const AppError=require("./utils/appError");
const globalErrorHandler=require("./controllers/errorController")
const app=express();
// const tourSchema=require("./models/tourSchema")

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/public`))


   app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString();
   
    next();
   })

app.use("/api/v1/tours",tourRoutes);
app.use("/api/v1/users",userRoutes);

app.all("*",(req,res,next)=>{
  next(new AppError(`can't find ${req.originalUrl} on this server`,404));

}); 

app.use(globalErrorHandler);

module.exports=app;