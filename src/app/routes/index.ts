import { Router } from "express";
import { adminRouter } from "../modules/admin/admin.route";
import { blogRouter } from "../modules/blog/blog.route";
import { educationRouter } from "../modules/education/education.route";
import { projectRouter } from "../modules/project/project.route";
import { resumeRouter } from "../modules/resume/resume.route";
import { skillRouter } from "../modules/skill/skill.route";
import { contactRoutes } from "../modules/contact/contact.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/admin",
    route: adminRouter,
  },
  {
    path: "/blog",
    route: blogRouter,
  },
  {
    path: "/project",
    route: projectRouter,
  },
  {
    path: "/education",
    route: educationRouter,
  },
  {
    path: "/skills",
    route: skillRouter,
  },
  {
    path: "/resume",
    route: resumeRouter,
  },
  {
    path: "/contact",
    route: contactRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
