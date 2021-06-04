// https://observablehq.com/@fil/npyjs@180
import define1 from "./e93997d5089d7165@2303.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["10-float32.npy",new URL("./files/95b247385b687a6cf0dd9e70d2f3dd1562e1967be5182156bda9ec0d5c95349fdec3e2ebe1f2d64e5ea714e7fc022c2b96c4052435ee92460565bfcf954b11e7",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Hello, npyjs

[npyjs](https://github.com/jhuapl-boss/npyjs) is a library to read [numpy’s npy file format](https://docs.scipy.org/doc/numpy/reference/generated/numpy.lib.format.html#module-numpy.lib.format), made for node.js; to make it work in the browser, rather than loading it through bundle.run (which is possible), I copied its core function here.

You can also import and export npy files with [ndjs](https://observablehq.com/@fil/hello-ndjs).`
)});
  main.variable(observer("usage")).define("usage", ["md"], function(md){return(
md`Usage:

~~~{js}
import {npyjs} from "@fil/npyjs"

res = filereference.arrayBuffer()
  .then(d => new npyjs().parse(d))
~~~
`
)});
  main.variable(observer("npyjs")).define("npyjs", ["BigUint64Array","BigInt64Array"], function(BigUint64Array,BigInt64Array){return(
class npyjs {
  constructor(opts) {
    if (opts) {
      throw [
        "No arguments accepted to npyjs constructor.",
        "For usage, go to https://github.com/jhuapl-boss/npyjs."
      ].join(" ");
    }

    this.dtypes = {
      "<u1": {
        name: "uint8",
        size: 8,
        arrayConstructor: Uint8Array
      },
      "|u1": {
        name: "uint8",
        size: 8,
        arrayConstructor: Uint8Array
      },
      "|i1": {
        name: "int8",
        size: 8,
        arrayConstructor: Int8Array
      },
      "<u4": {
        name: "uint32",
        size: 32,
        arrayConstructor: Int32Array
      },
      "<i4": {
        name: "int32",
        size: 32,
        arrayConstructor: Int32Array
      },
      "<u8": {
        name: "uint64",
        size: 64,
        arrayConstructor: BigUint64Array
      },
      "<i8": {
        name: "int64",
        size: 64,
        arrayConstructor: BigInt64Array
      },
      "<f4": {
        name: "float32",
        size: 32,
        arrayConstructor: Float32Array
      },
      "<f8": {
        name: "float64",
        size: 64,
        arrayConstructor: Float64Array
      }
    };
  }

  parse(arrayBufferContents) {
    // const version = arrayBufferContents.slice(6, 8); // Uint8-encoded
    const headerLength = new DataView(
      arrayBufferContents.slice(8, 10)
    ).getUint8(0);
    const offsetBytes = 10 + headerLength;

    const hcontents = new TextDecoder("utf-8").decode(
      new Uint8Array(arrayBufferContents.slice(10, 10 + headerLength))
    );
    const header = JSON.parse(
      hcontents
        .replace(/'/g, '"')
        .replace("False", "false")
        .replace("(", "[")
        .replace(/,*\),*/g, "]")
    );
    const shape = header.shape;

    const dtype = this.dtypes[header.descr];

    const nums = new dtype["arrayConstructor"](
      arrayBufferContents,
      offsetBytes
    );

    return {
      dtype: dtype.name,
      data: nums,
      shape
    };
  }
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Examples`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`From a file attachment:`
)});
  main.variable(observer()).define(["FileAttachment","npyjs"], function(FileAttachment,npyjs){return(
FileAttachment("10-float32.npy")
  .arrayBuffer()
  .then(d => new npyjs().parse(d))
)});
  main.variable(observer()).define(["md"], function(md){return(
md`From a file upload form:`
)});
  const child1 = runtime.module(define1);
  main.import("file", child1);
  main.variable(observer("viewof f")).define("viewof f", ["file"], function(file){return(
file()
)});
  main.variable(observer("f")).define("f", ["Generators", "viewof f"], (G, _) => G.input(_));
  main.variable(observer()).define(["f","npyjs"], function(f,npyjs){return(
f.arrayBuffer().then(d => new npyjs().parse(d))
)});
  main.variable(observer()).define(["md"], function(md){return(
md`From a URL:`
)});
  main.variable(observer()).define(["npyjs"], function(npyjs){return(
fetch(
  "https://rawcdn.githack.com/aplbrain/npyjs/ba60a3a529f3210dd07d2ed05ab628939e18b6a7/test/data/4x4x4x4x4-float32.npy"
)
  .then(d => d.arrayBuffer())
  .then(d => new npyjs().parse(d))
)});
  main.variable(observer("LICENSE")).define("LICENSE", function(){return(
"apache-2.0"
)});
  return main;
}
