const mongoose = require("mongoose");

const weatherSchema = mongoose.Schema({
      cc:{type:Number},
      desciel:{type:String}, //cielo
      dh:{type:Number},
      dirvienc: {type:String},
      dirvieng:{type:Number},
      dloc:{type:String},
      ides:{type:Number},
      idmun:{type:Number},
      lat:{type:Number}, //latitud
      lon:{type:Number}, //longitud
      ndia:{type:Number},
      nes:{type:String, required: true}, //estado
      nmun:{type:String, required: true}, //city
      prec: {type:Number},
      probprec:{type:Number}, //probabilidad de precipitacion
      raf:{type:Number},
      tmax:{type:Number, required: true}, //temperatura max
      tmin:{type:Number, required: true}, //temperatura min
      velvien: {type:Number} //velocidad viento
});

module.exports = mongoose.model("weather", weatherSchema);