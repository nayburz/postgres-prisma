import prisma from '../lib/prisma';
import { Project, Tag } from '../types';

const projects: Project[] = require('../data/projects.ts').projects;

const tags: Tag[] = require('../data/tags.ts').tags;




const load = async () => {
  try {
    // Delete existing records
    await prisma.tag.deleteMany()
    console.log('Deleted records in tag table')

    await prisma.project.deleteMany()
    console.log('Deleted records in project table')


    // Create Tag instances without the project relationship
    await prisma.tag.createMany({
      data: tags,
    });




  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();