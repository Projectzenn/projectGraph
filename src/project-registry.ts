import {
  ProjectCreated as ProjectCreatedEvent
} from "../generated/ProjectRegistry/ProjectRegistry"
import { ProjectCreated } from "../generated/schema"
import { ProjectContract } from "../generated/templates"



export function handleProjectCreated(event: ProjectCreatedEvent): void {
  let entity = new ProjectCreated(
   event.params.projectAddress.toHex()
  )
  entity.id = event.params.projectAddress.toHex()
  entity.name = event.params.name
  entity.image = event.params.image
  entity.details = event.params.details
  entity.creator = event.params.creator
  entity.projectAddress = event.params.projectAddress

  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
  
  ProjectContract.create(event.params.projectAddress)

}

