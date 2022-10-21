import { HogeClient } from './proto/hoge_grpc_pb'
import { credentials, ServiceError } from '@grpc/grpc-js'
import { HogeRequest, HogeResponse } from './proto/hoge_pb'
import { Result } from '@badrap/result'

const createClient = () => {
  return new HogeClient(
    'localhost:8080',
    credentials.createInsecure() // SSLを利用しない場合の設定
  )
}

const invokeHello = async (client: HogeClient) => {

  const req = new HogeRequest()
  req.setName('namedesuyo')

  const res = await new Promise<Result<HogeResponse, ServiceError>>(resolve => {
    client.hello(req, (error, response) => {
      resolve(error !== null ? Result.err(error) : Result.ok(response))
    })
  })

  if (res.isErr) {
    console.error('error!')
    console.error(res.error.message)
    return
  }

  console.log('res ok')

  console.log(res.value.getResult())
}

async function main() {
  const client = createClient()

  await invokeHello(client)

  await client.close()
}

main()
