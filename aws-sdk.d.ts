// The existing definition of aws-sdk does not support dynamodb yet.
declare module "aws-sdk" {
   var AWS:any;
   export = AWS;
}