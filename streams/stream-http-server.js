import http from 'node:http';
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;

    console.log(transformed);

    // about params -> 1º Error, 2º Data if Success
    callback(null, Buffer.from(transformed.toString()));
  }
}

// Req => ReadableStream
// Res => WriteableStream

const server = http.createServer(async (req, res) => {
  // return req
  //   .pipe(new InverseNumberStream())
  //   .pipe(res);

  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  console.log(fullStreamContent);

  return res.end(fullStreamContent);
});

server.listen(3334);