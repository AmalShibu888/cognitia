const express = require('express');
// const serverless = require('serverless-http');
const mongoose = require('mongoose')
const Bug = require('./models/BugModel')
const {google} = require('googleapis')
const Event = require('./models/EventModel.js')
const app = express();
mongoose.connect('mongodb+srv://codingclub:1234@cluster0.1aknvis.mongodb.net/?retryWrites=true&w=majority')
.then((data) =>{
    app.listen(3000 , ()=>{
        console.log('listening...')
    })
})

app.use(express.json());
// app.use(express.urlencoded());
app.use(express.static('public'));
app.get('/' , (req,res)=>{
    res.json({msg : "hello"})
})
app.post('/api/addData' , async (req,res) =>{
    // console.log(req.body);
    try{
        const eventObj = await Event.create(req.body);
        res.status(200).json(eventObj);
    }catch (error){
        res.status(400).json({error : error.message})
    }
    
})

app.get('/api/getEvents' , async(req, res)=>{
    try{
        const eventObj = await Event.find();
        res.status(200).json(eventObj);
    }catch(error){
        res.status(400).json({error : error.message})
    }
})


// app.get('/api/getBug' , (req , res)=>{

// })

app.get('/api/getCount' , async (req, res)=>{
    // console.log("y");
    const auth = new google.auth.GoogleAuth({
        keyFile : "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })
    const client = await auth.getClient();
    // res.json("Hello world");
    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetIds = [{id :"1q4cOjLtZytbYm3krwM-5ZfpzdSvYUWR0Iy6ayuOxC6g" , eventId : "33"},
    {id : "10llyCQ588M6YjzPY_-aFqzb760yaHrJ8jijqp1DDkTM" , eventId : "35"}, 
    {id : "1m50JTGno-dZj9Bt6zqU0BeQZPajvj9AV1laJVEc_MN8" , eventId : "36"},
    {id : "1h0wgRKpK7mOufMptCEdq9TkM3bDZi1e35J_wpuWsHPo" , eventId : "34"},
    {id : "1182ANf5rZo6c31k5knfLA2hJMXKPKlXFMYL9ubVKgfY" , eventId : "39"},
    {id : "1RWWTyCHteu4YIlBBUXf9gqV-y4Hd4Rgla6RTkObrNLc" , eventId : "11"},
    {id : "1A0iu-nN13iwmJN2feWIrNdZ2sme7k1pUu9WsV7tCSlg" , eventId : "12"},
    {id : "1JqpOt_S1GinjtQuWlDC_X7j5P2vOZBsfgN63el134yM" , eventId : "14"},
    {id : "1tkzwZhb_ZUSV64g2769FYnh0dystPSe5mevSwp8syus" , eventId : "15"},
    {id : "18Gr_a8Wz6fY13T6Q1jeNRf71Y5YZntWqrqxvX1dBBms" , eventId : "16"},
    {id : "1VtaAXlhRktHxLQJr1y8Lg0c0MYku_8O3LcQNDFjfgJs" , eventId : "13"},
    {id : "1kMOd-frBSzeF-3m43vyBRdpnGnfHJ5OF__XywlMB9Fw" , eventId : "17"},
    {id : "1wJuPLpuW91fgyFJBYfJJIrsyxpGjr-UqM9-mBnJwpbg" , eventId : "18"},
    {id : "1xu4JfFvjBvuv32nhrFLaXCDbABn4qUHA-d0Of-JdeBQ" , eventId : "19"},
    {id : "15CZqbQNWppUFd2uVFpRYIM7csI977sLOEChiydR5MjE" , eventId : "20"},
    {id : "1X4JGIrUtSmK6CFZP9QzQNEvZTHKKl5jthMacwxMa5X8" , eventId : "40"},
    {id : "11jk-xVN8X8Sj04m2WDCBoql0CqkZXBf7cdHrDVq4blg" , eventId : "38"},
    {id : "1zSNNsS6LArG9C9AYQ3kiWmtR4DDQhf2kazMJpoqU_Io" , eventId : "37"},
    {id : "11hvLCKzIUi-TdNlnKSMoMuGK8yOLogW7xTdtl2zNNvE" , eventId : "22"},
    {id : "1LHofYLvNxplYkj2rU7if-Qs1UXhcbYqTKNjjwVBDbW4" , eventId : "21"},
    {id : "16P6IPJ1ewwI0mdVBUIFTYFcnT8f9JOJP9lwvhUWmFeE" , eventId : "27"},
    {id : "1KuVsm4frnsEuCe5aqsBYqL8ROf7kZNkUzetbF_iOzcA" , eventId : "26"},
    {id : "1RNcZ-uL-JacUzeIN8BpegOtwqWgWl_zsFX4FrBeG4E0" , eventId : "23"},
    {id : "1TzO37L9eQ1dq56Wc9jYKzUldQvH_t82RMumPDZ2oVoA" , eventId : "24"},
    {id : "1fdD7k1zuPpN_4ufY6koqHm3bi0zfj8xdGOrGvbaZWbo" , eventId : "30"},
    {id : "1cxpj2Eh4qWr3gzOT6JTg4MfZgluTjZVMSGy8SucBZ1o" , eventId : "31"},
    {id : "1lmm7sD5ftKDfbHVVYQX54RN7UsP9h5HSqO7nFzVZg_k" , eventId : "29"},
    {id : "1IXXzUS0rGRZQhFgWR0EBeo0OBIoAK_l_paIvzBoYRiI" , eventId : "28"},
    {id : "1gFhl5daJifAqZU0Rwsw8TPG28LoVUOI7d1EX968iAu4" , eventId : "25"},
    {id : "1SmM4tp1aY2iGyXAdbaXb_cCzG9AikQEyb90gMNeXqHM" , eventId : "32"}];
    
    const rob_sheet = '1PHS0nQC4rwYY9fjlDhD54BNpc0wAOSEJ3GHOj80V-C8';
    const dict = {
        'Race Against Time' : "3",
        'Goal Against Time' : "4", 
        'Maze Runner' : "5",
        'Robo Rumble' : "1",
        'Robodiction' : "2",
        'Tiny Titans' : "6", 
        'Techstorm' : "7",
        'Robotech Innovation' : "8"
    }
    const intervald = setInterval( async()=>{

        for(const spreadsheetId of spreadsheetIds){
            // const metaData = await googleSheets.spreadsheets.get({
            //     auth,
            //     spreadsheetId,
            //   });
            //   console.log(metaData);
        
            const getRows = await googleSheets.spreadsheets.values.get({
                auth,
                spreadsheetId : spreadsheetId.id,
                range: "Form Responses 1",
              });
              let c = getRows.data.values.length  -1;
            // if(c == 1)
            //     console.log(spreadsheetId.eventId)
            
            const x = await Event.updateOne({eventId : spreadsheetId.eventId} , {registrationsCount : c} )
            //   console.log('y' , spreadsheetId.eventId   , " ", c);
        }
        const robRows = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId : rob_sheet,
            range: "Form Responses 1",
          });
        //   let c = getRows.data.values.length  -1;
        // if(c == 1)
        //     console.log(spreadsheetId.eventId)
        // console.log(robRows.data.values)
            var robEventsCount = new Array(9).fill(0);
            for(var i = 1 ;i<robRows.data.values.length ;i++){
                const strArr = robRows.data.values[i][15].split(", ")
                for(var j = 0 ;j<strArr.length ;j++){
                    // console.log(strArr[j]);
                    robEventsCount[dict[strArr[j]] - '0']++;
                }
            }
          console.log(robEventsCount);
          const tinytitans3rd = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId : '1MHAdYn1Qgp-QguWetpjmAuPGIDMLtHY6toDxZwT8l7M',
            range: "Form Responses 1",
          });
          robEventsCount[6] += tinytitans3rd.data.values.length - 1;
          console.log(robEventsCount)
          let k = '0';
          for(const count of robEventsCount){
            if(k == '0'){
                k++;
                continue;
            }
                
            const x = await Event.updateOne({eventId : k }, {registrationsCount : count})
            console.log(x , count);
            k++;
            
          }
    } , 15000) 

})

app.get('/countto0', async (req, res) => {
    try {
      const result = await Event.updateMany({}, { $set: { registrationsCount:0 } });
      console.log(result);
      res.send('Update successful');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error occurred during update');
    }
  });
  
  
// app.use(`/.netlify/functions/api`, router);
// module.exports = app;
// module.exports.handler = serverless(app);





