import type Project from '../../types/project'

type Data = {
  projects: Project[]
}

const projectsData = {
  "projects": [
    {
      projectId: "43e3627c6b2b63dc3ff9fdfb4b7af4231416eeb8688a31ed0cbfd8d5f13b03cf",
      title: "Biped robot",
      publisher: {
        email: "carlos.augusto@email.com",
        name: "Carlos Augusto",
        cas: 60_000
      },
      budget: 20_000,
      category: "Programming & Tech",
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
          promise: "Finish and test robot with compact design",
          deadline: "Aug. 1 2022",
          reward: 5_000
        },
      ]
    },
    {
      projectId: "9c757ae7140e2b8e9bdf92f375ab4554d6b0c131f4fffe5130bf4b3363e90c91",
      title: "Website development",
      publisher: {
        email: "parker.peter@email.com",
        name: "Peter Parker",
        cas: 82_315
      },
      budget: 2_000,
      category: "Programming & Tech",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean vel. Natoque penatibus et magnis dis parturient montes nascetur.",
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
          promise: "Make presentable front-page with company details",
          deadline: "Apr. 1 2022",
          reward: 400
        },
        {
          promise: "Create log-in and register pages",
          deadline: "May. 1 2022",
          reward: 600
        },
        {
          promise: "Create user account dashboard",
          deadline: "Jun. 1 2022",
          reward: 700
        },
        {
          promise: "Website should be responsive (work on mobile)",
          deadline: "Jul. 1 2022",
          reward: 300
        }
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



