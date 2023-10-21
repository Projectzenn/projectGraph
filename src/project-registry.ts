import {
  OwnershipTransferred as OwnershipTransferredEvent,
  ProjectCreated as ProjectCreatedEvent
} from "../generated/ProjectRegistry/ProjectRegistry"
import { OwnershipTransferred, ProjectCreated } from "../generated/schema"
import { ProjectContract } from "../generated/templates"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProjectCreated(event: ProjectCreatedEvent): void {
  let entity = new ProjectCreated(
   event.params.projectAddress.toHexString()
  )
  entity.id = event.params.projectAddress.toHexString()
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

