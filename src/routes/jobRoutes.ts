import express from 'express';
import { postJob, getJob, getJobs, removeJob } from '../controllers/jobController';
import { isAuthenticated, isAdmin } from '../Middleware/authsMiddleware';

const router = express.Router();

router.post('/postJob', isAuthenticated, isAdmin, postJob);
router.get('/jobs/:id', getJob);
router.get('/jobs', getJobs);
router.delete('/jobs/:id',isAuthenticated, isAdmin, removeJob);

export default router;