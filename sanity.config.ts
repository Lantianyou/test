import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'


export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: "dix3f3aw",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
});