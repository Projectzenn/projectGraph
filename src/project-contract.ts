import { store } from "@graphprotocol/graph-ts";
import { Milestone, ProjectContract, Worker } from '../generated/schema';
import {
  MemberAdded,
  MemberRemoved,
  MilestoneAdded,
  MilestoneCompleted,
  ProjectUpdated,
  WorkAdded
} from '../generated/templates/ProjectContractTemplate/ProjectContract';

  
export function handleMemberAdded(event: MemberAdded): void {
  let workerID = event.address.toHexString() + "-" + event.params.member.toHexString();
  let worker = new Worker(workerID)
  worker.address = event.params.member;
  worker.project = event.address.toHexString();  // Linking the worker to the project
  worker.save();
}
  
export function handleMemberRemoved(event: MemberRemoved): void {
  let workerID = event.address.toHexString() + "-" + event.params.member.toHexString();
  let worker = Worker.load(workerID)
  if (worker) {
    store.remove("Worker", workerID);
  }
}
  
  export function handleProjectUpdated(event: ProjectUpdated): void {
    let entity = new ProjectContract(event.address.toHexString())
    entity.name = event.params.name
    entity.description = event.params.description
    entity.url = event.params.url
    entity.deadline = event.params.deadline
    entity.save()
  }
  
  export function handleMilestoneAdded(event: MilestoneAdded): void {
    let milestoneID = event.address.toHexString() + "-" + event.params.description;
    let milestone = new Milestone(milestoneID)
    milestone.description = event.params.description;
    milestone.deadline = event.params.deadline;
    milestone.completed = false;
    milestone.project = event.address.toHexString();  // Linking the milestone to its project
    milestone.save();
  }
  
  export function handleMilestoneCompleted(event: MilestoneCompleted): void {
    let milestoneID = event.address.toHexString() + "-" + event.params.milestoneIndex.toString()
    let milestone = Milestone.load(milestoneID)
    if (milestone) {
      milestone.completed = true
      milestone.save()
    }
  }
  
  
  
  export function handleWorkAdded(event: WorkAdded): void {
    let entity = new ProjectContract(event.address.toHexString())
    entity.description = event.params.description
    entity.save()
  }
  