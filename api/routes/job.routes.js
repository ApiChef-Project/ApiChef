import { Router } from "express";
import Job from "../models/job.model.js";
import Company from "../models/company.model.js";
import {
  createJob,
  deleteJob,
  fetchJob,
  fetchJobs,
  updateJob,
} from "../controllers/job.controller.js";

const jobRoutes = Router();
// Get all jobs
jobRoutes.get("/", fetchJobs);

// Get job by ID
jobRoutes.get("/:id", fetchJob);

// Create a new job
jobRoutes.post("/", createJob);

// Delete a job
jobRoutes.delete("/:id", deleteJob);

// Update a job
jobRoutes.put("/:id", updateJob);

export default jobRoutes;
