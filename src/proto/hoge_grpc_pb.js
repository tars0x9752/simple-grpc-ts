// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hoge_pb = require('./hoge_pb.js');

function serialize_HogeRequest(arg) {
  if (!(arg instanceof hoge_pb.HogeRequest)) {
    throw new Error('Expected argument of type HogeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HogeRequest(buffer_arg) {
  return hoge_pb.HogeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HogeResponse(arg) {
  if (!(arg instanceof hoge_pb.HogeResponse)) {
    throw new Error('Expected argument of type HogeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HogeResponse(buffer_arg) {
  return hoge_pb.HogeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HogeService = exports.HogeService = {
  hello: {
    path: '/Hoge/hello',
    requestStream: false,
    responseStream: false,
    requestType: hoge_pb.HogeRequest,
    responseType: hoge_pb.HogeResponse,
    requestSerialize: serialize_HogeRequest,
    requestDeserialize: deserialize_HogeRequest,
    responseSerialize: serialize_HogeResponse,
    responseDeserialize: deserialize_HogeResponse,
  },
};

exports.HogeClient = grpc.makeGenericClientConstructor(HogeService);
