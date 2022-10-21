import { Server, ServerCredentials } from '@grpc/grpc-js'
import type * as grpc from '@grpc/grpc-js'
import { HogeService, IHogeServer } from './proto/hoge_grpc_pb'
import { HogeResponse } from './proto/hoge_pb'

class ServerImplement implements IHogeServer {
  [name: string]: grpc.UntypedHandleCall
  constructor(public hello: IHogeServer['hello']) {}
}

const hello: IHogeServer['hello'] = (call, callback) => {
  console.log('[start]: hello')

  const response = new HogeResponse()
  response.setResult(`hello ${call.request.getName()}`)

  callback(null, response)
  console.log('[end]: hello')
}

const startServer = () => {
  const server = new Server()

  server.addService(HogeService, new ServerImplement(hello))

  server.bindAsync(
    '0.0.0.0:8080',
    // SSLを利用しない場合の設定
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error)
        return
      }

      server.start()
      console.log(`server start, port: ${port}`)
    }
  )
}

startServer()
