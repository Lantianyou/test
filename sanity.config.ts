import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import { schemaTypes } from "./schemaTypes";


export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: "dix3f3aw",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});