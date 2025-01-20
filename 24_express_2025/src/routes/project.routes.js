import express from 'express';

const router = express.Router();

// Routes to view projects
router.get('/:id', verifyToken,viewProject);


// Route to update a project
router.put('/:id', verifyToken,updateProject);



export default router;