#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkBeerStack } from '../lib/cdk-beer-stack';

const app = new cdk.App();
new CdkBeerStack(app, 'CdkBeerStack');
