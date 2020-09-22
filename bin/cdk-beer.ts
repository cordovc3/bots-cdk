#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BeerStack } from '../lib/beer-stack';

const app = new cdk.App();
new BeerStack(app, 'BeerStack');
