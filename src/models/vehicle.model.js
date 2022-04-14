const mongoose = require("mongoose");

class VehicleTypes {
    constructor () {
    SUV = "SUV",
    HATCHBACK = "HATCHBACK",
    TWOWHEELER = "TWO_WHEELER"
    }
}

const vehicleSchema = new Schema({
  vehicle_type: {
    type: String,
    required: true,
  },
  vehicle_number: {
    type: String,
    required: true,
  },
  history: [
    {
      type: Schema.Types.ObjectId,
      ref: "Parking",
    },
  ],
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export { Vehicle };