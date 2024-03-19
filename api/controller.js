import userModel from './model.js';

export const createUser = async (req,resp) => {
    try {
        const createUser  = await userModel.create(req.body);
        resp.status(200).json(createUser)
    } catch (error) {
        next(err);
    }
}

export const getUser = async (req,resp) => {
    try {
        const getUser = await userModel.findById(req.params.id);
        resp.status(200).json(getUser)
    } catch (error) {
        next(error)
    }
}

export const getAllUser = async (req,resp) => {
    try {
        const getAllUser = await userModel.find();
        resp.status(200).json(getAllUser)
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req,resp) => {
    try {
        const deleteUser = await userModel.findByIdAndDelete(req.params.id);
        resp.status(200).json("User Successfully Deleted")
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req,resp) => {
    try {
        const updateUser = await userModel.findByIdAndUpdate(req.params.id,
            {$set: req.body},);
        resp.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
}