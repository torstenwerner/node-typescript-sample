// There is no definition for node-fetch yet. But there is whatwg-fetch.
declare module "node-fetch" {
    var fetch: any;
    export = fetch;
}
