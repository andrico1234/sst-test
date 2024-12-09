import { Resource } from "sst";
import { Example } from "@sst-test/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
