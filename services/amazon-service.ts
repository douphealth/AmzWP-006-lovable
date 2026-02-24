import { injectable, inject } from 'inversify';
import { TYPES } from '../di/types';
import { ISerpApiService } from './serpapi-service';
import { ILoggerService } from './logger-service';

export interface IAmazonService {
  buildAffiliateUrl(asin: string, tag: string): string;
  // Future: direct PA-API integration here
}

@injectable()
export class AmazonService implements IAmazonService {
  constructor(
    @inject(TYPES.SerpApiService) private serp: ISerpApiService,
    @inject(TYPES.LoggerService) private logger: ILoggerService
  ) {}

  buildAffiliateUrl(asin: string, tag: string): string {
    const cleanTag = tag || 'amzwp-20';
    this.logger.debug('Building affiliate URL', { asin, tag: cleanTag });
    return `https://www.amazon.com/dp/${asin}?tag=${cleanTag}`;
  }
}
