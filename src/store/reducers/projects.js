import * as allProjects from '../constants/projects';

export default function projects(state = allProjects.projects, action) {
  switch (action.type) {
    default:
      return state;
  }
}