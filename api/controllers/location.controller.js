import Location from '../models/location.model.js';

const locationController = {
  // GET all
  getLocation: async (req, res) => {
    try {
      const locations = await Location.find();
      res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  },

  // POST create
  createLocation: async (req, res) => {
    try {
      const newLocation = new Location(req.body);
      const saveLocation = await newLocation.save();
      res.status(201).json(saveLocation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // DELETE one by id
  deleteLocationById: async (req, res) => {
    try {
      const location = await Location.findByIdAndDelete(req.params.id);
      if (!location) {
        return res.status(404).json({ message: 'Location not found' });
      }
      res.status(200).json({ message: 'Location deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // DELETE all
  deleteAllLocations: async (req, res) => {
    try {
      await Location.deleteMany({});
      res.status(200).json({ message: "All locations deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default locationController;
