import express from 'express';
import { createUser, deleteUser, getAllUser, getUser, updateUser } from './controller.js';


const route = express.Router();

route.post('/',createUser);
route.get('/:id',getUser);
route.get('/',getAllUser);
route.delete('/:id',deleteUser);
route.put('/:id',updateUser);


export default route;