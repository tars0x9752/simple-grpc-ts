// package: 
// file: hoge.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as hoge_pb from "./hoge_pb";

interface IHogeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    hello: IHogeService_Ihello;
}

interface IHogeService_Ihello extends grpc.MethodDefinition<hoge_pb.HogeRequest, hoge_pb.HogeResponse> {
    path: "/Hoge/hello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<hoge_pb.HogeRequest>;
    requestDeserialize: grpc.deserialize<hoge_pb.HogeRequest>;
    responseSerialize: grpc.serialize<hoge_pb.HogeResponse>;
    responseDeserialize: grpc.deserialize<hoge_pb.HogeResponse>;
}

export const HogeService: IHogeService;

export interface IHogeServer extends grpc.UntypedServiceImplementation {
    hello: grpc.handleUnaryCall<hoge_pb.HogeRequest, hoge_pb.HogeResponse>;
}

export interface IHogeClient {
    hello(request: hoge_pb.HogeRequest, callback: (error: grpc.ServiceError | null, response: hoge_pb.HogeResponse) => void): grpc.ClientUnaryCall;
    hello(request: hoge_pb.HogeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hoge_pb.HogeResponse) => void): grpc.ClientUnaryCall;
    hello(request: hoge_pb.HogeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hoge_pb.HogeResponse) => void): grpc.ClientUnaryCall;
}

export class HogeClient extends grpc.Client implements IHogeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public hello(request: hoge_pb.HogeRequest, callback: (error: grpc.ServiceError | null, response: hoge_pb.HogeResponse) => void): grpc.ClientUnaryCall;
    public hello(request: hoge_pb.HogeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hoge_pb.HogeResponse) => void): grpc.ClientUnaryCall;
    public hello(request: hoge_pb.HogeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hoge_pb.HogeResponse) => void): grpc.ClientUnaryCall;
}
