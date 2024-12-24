const User = require('../models/user');
const Score = require('../models/scoreCard');


const saveUser = async (req, res) => {
    try {
      const {email, password} = req.body;
      const userRecord = await User.findOneAndUpdate(
        { email: email }, // Query criteria
        { $set: req.body }, // Fields to update
        { upsert: true, new: true } 
    );
      return res.status(200).json({ userRecord });
    } catch (error) {
      console.error('Error fetching image:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const saveScore = async (req, res) => {
    try {
      const {email, module, score, percentage } = req.body;
      const scoreRecord = await Score.findOneAndUpdate(
        { email: email, module: module }, 
        { $set: req.body }, 
        { upsert: true, new: true } 
    );
      return res.status(200).json({ scoreRecord });
    } catch (error) {
      console.error('Error fetching image:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const getUserScore = async (req, res) => {
    try {
      const query = {};
      if(req.body.email){
        query.email = req.body.email;
      }
      if(req.body.module){
        query.module = req.body.module;
      }
      const user = await Score.find(query);
      return res.status(200).json({ user });
    } catch (error) {
      console.error('Error fetching image:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
};
  

  const getUserData = async (req, res) => {
    try {
      const user = await User.findOne({ id: req?.params?.id });
      return res.status(200).json({ user });
    } catch (error) {
      console.error('Error fetching image:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = { saveUser, getUserData, saveScore, getUserScore };