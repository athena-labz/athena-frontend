import type Project from '../../types/project'

type Data = {
  projects: Project[]
}

const projectsData = {
  "projects": [
    {
      projectId: "81dc9bdb52d04dc20036dbd8313ed05fc",
      title: "Biped robot crowd-funding",
      publisher: {
        email: "carlos.augusto@email.com",
        name: "Carlos Augusto",
        cas: 60_000
      },
      budget: 20_000,
      category: "Blockchain & Cryptocurrency",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      judges: [
        {
          name: "Alice",
          email: "alice@email.com",
          address: "addr_test1qzmv9p53tvyf2jwd27qc22rryept6c5e70yc32pat29gqa26ujv7vsvhyy3anncme57jr6wj309w9dfganxqp2z2s63sm32wl3"
        },
        {
          name: "Bob",
          email: "bob@email.com",
          address: "addr_test1qzmv9p53tvyf2jwd27qc22rryept6c5e70yc32pat29gqa26ujv7vsvhyy3anncme57jr6wj309w9dfganxqp2z2s63sm32wl3"
        },
        {
          name: "Charlie",
          email: "charlie@email.com",
          address: "addr_test1qzmv9p53tvyf2jwd27qc22rryept6c5e70yc32pat29gqa26ujv7vsvhyy3anncme57jr6wj309w9dfganxqp2z2s63sm32wl3"
        },
      ],
      deliverables: [
        {
          promise: "Complete robot sketch",
          deadline: "Apr. 1 2022",
          reward: 1_000
        },
        {
          promise: "Create robot prototype able to walk",
          deadline: "May. 1 2022",
          reward: 4_000
        },
        {
          promise: "Improve robot to be able to track-follow a moving object",
          deadline: "Jun. 1 2022",
          reward: 5_000
        },
        {
          promise: "Robot with battery cycle before re-charging longer than 30 seconds under continuous walking condition",
          deadline: "Jul. 1 2022",
          reward: 5_000
        },
        {
          promise: "Robot will be able to track-following a moving object",
          deadline: "Apr. 1 2022",
          reward: 50
        },
      ]
    }
  ]
}

export function projects() {
  return projectsData
}


export function project(id: any) {
  try {
    let filtered = projectsData.projects.filter(project => project.projectId === id)

    if (filtered.length > 0)
      return filtered[0]
    else
      return null
  } catch (error) {
    console.log(error)
  }
}



