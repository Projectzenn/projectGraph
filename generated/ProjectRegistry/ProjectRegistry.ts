// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProjectCreated extends ethereum.Event {
  get params(): ProjectCreated__Params {
    return new ProjectCreated__Params(this);
  }
}

export class ProjectCreated__Params {
  _event: ProjectCreated;

  constructor(event: ProjectCreated) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get image(): string {
    return this._event.parameters[1].value.toString();
  }

  get details(): string {
    return this._event.parameters[2].value.toString();
  }

  get creator(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get projectAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class ProjectRegistry extends ethereum.SmartContract {
  static bind(address: Address): ProjectRegistry {
    return new ProjectRegistry("ProjectRegistry", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  projects(param0: BigInt): Address {
    let result = super.call("projects", "projects(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_projects(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("projects", "projects(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateProjectCall extends ethereum.Call {
  get inputs(): CreateProjectCall__Inputs {
    return new CreateProjectCall__Inputs(this);
  }

  get outputs(): CreateProjectCall__Outputs {
    return new CreateProjectCall__Outputs(this);
  }
}

export class CreateProjectCall__Inputs {
  _call: CreateProjectCall;

  constructor(call: CreateProjectCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _image(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _details(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class CreateProjectCall__Outputs {
  _call: CreateProjectCall;

  constructor(call: CreateProjectCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class TransferToDAOCall extends ethereum.Call {
  get inputs(): TransferToDAOCall__Inputs {
    return new TransferToDAOCall__Inputs(this);
  }

  get outputs(): TransferToDAOCall__Outputs {
    return new TransferToDAOCall__Outputs(this);
  }
}

export class TransferToDAOCall__Inputs {
  _call: TransferToDAOCall;

  constructor(call: TransferToDAOCall) {
    this._call = call;
  }

  get daoAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferToDAOCall__Outputs {
  _call: TransferToDAOCall;

  constructor(call: TransferToDAOCall) {
    this._call = call;
  }
}
