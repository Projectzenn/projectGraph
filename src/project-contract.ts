import { store } from "@graphprotocol/graph-ts";
import { MemberAdded, MemberRemoved, NotificationUpdate, ProjectUpdated, WorkAdded, WorkRemoved } from '../generated/templates/ProjectContract/ProjectContract';


import { Member, NotificationSettings, ProjectCreated, Work } from '../generated/schema';
export function handleMemberAdded(event: MemberAdded): void {
  let project = ProjectCreated.load(event.address.toHex())
  if (!project) return;
  let memberId = event.params.member.toHex()
  let member = new Member(memberId)
  member.address = event.params.member
  member.tokenId = event.params.tokenId
  member.joinedAt = event.block.timestamp
  member.projectCreated = project.id
  member.save()
}

export function handleMemberRemoved(event: MemberRemoved): void {
  let memberId = event.params.member.toHex()
  store.remove('Member', memberId)
}
  

export function handleProjectUpdated(event: ProjectUpdated): void {
  let projectId = event.transaction.hash.toHex()
  
  let project = ProjectCreated.load(projectId)
  if (project) {
    project.name = event.params.name // Replace with actual param name
    project.deadline = event.params.deadline // Replace with actual param name
    project.details = event.params.description // Replace with actual param name
    project.url = event.params.url // Replace with actual param name
    project.save()
  }
}

export function handleWorkAdded(event: WorkAdded): void {
  let project = ProjectCreated.load(event.address.toHex())
  if (!project) return;
  let workId = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let work = new Work(workId)
  work.description = event.params.url // Replace with actual param name
  work.status = "PENDING" // Assuming a new work always starts as PENDING
  work.projectCreated = project.id
  work.save()
}

export function handleNotificationUpdate(event: NotificationUpdate): void {
  
  let projectId = event.transaction.hash.toHex()
  
  // Load the associated ProjectCreated entity
  let project = ProjectCreated.load(projectId)
  
  if (!project) { return }
    // Load or create the associated NotificationSettings entity
    let settingsId = projectId + "-settings"
    let settings = NotificationSettings.load(settingsId)
    if (!settings) {
      settings = new NotificationSettings(settingsId)
      settings.projectCreated = project.id
    }
    
    // Update the notification settings
    settings.onWorks = event.params.onWorks
    settings.onRewards = event.params.onRewards
    settings.onMember = event.params.onMember

    // Save the updated NotificationSettings entity
    settings.save()

}

export function handleWorkRemoved(event: WorkRemoved): void {
  let workId = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  store.remove('Work', workId)
} 

