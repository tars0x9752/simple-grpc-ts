// package: 
// file: hoge.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HogeRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HogeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HogeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HogeRequest): HogeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HogeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HogeRequest;
    static deserializeBinaryFromReader(message: HogeRequest, reader: jspb.BinaryReader): HogeRequest;
}

export namespace HogeRequest {
    export type AsObject = {
        name: string,
    }
}

export class HogeResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): HogeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HogeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HogeResponse): HogeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HogeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HogeResponse;
    static deserializeBinaryFromReader(message: HogeResponse, reader: jspb.BinaryReader): HogeResponse;
}

export namespace HogeResponse {
    export type AsObject = {
        result: string,
    }
}
