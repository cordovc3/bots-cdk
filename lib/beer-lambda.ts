import * as lambda from "@aws-cdk/aws-lambda";
import * as core from "@aws-cdk/core";

export class BeerLambda extends core.Construct {
  constructor(handlerName: string, scope: core.Construct, id: string) {
    super(scope, id);

    const handler = new lambda.Function(this, `${handlerName}Lambda`, {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.asset("resources"),
      handler: `${handlerName}.handler`,
    });
  }
}