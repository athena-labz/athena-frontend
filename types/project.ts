export type Judge = {
  name: string,
  email: string,
  address: string,
}

export type Deliverable = {
  promise: string,
  deadline: string,
  reward: number
}

export type User = {
  email: string,
  name: string,
  cas: number
}

type Project = {
  projectId: string,
  title: string,
  publisher: User,
  budget: number,
  category: string,
  description: string,
  judges: [Judge],
  deliverables: [Deliverable]
}

export default Project;