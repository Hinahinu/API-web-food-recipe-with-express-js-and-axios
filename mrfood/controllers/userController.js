import User from '../models/userModel.js';

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: 'User Created'});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg: 'User Update'});
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg: 'User Deleted'});
    } catch (error) {
        console.log(error.message);
    }
};

export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      if (password !== user.password) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  };