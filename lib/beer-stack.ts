import * as cdk from '@aws-cdk/core';
import { BeerLambda } from './beer-lambda';

export class BeerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const beerLambda = new BeerLambda('homo', this, 'beerLambda');
  }
}
