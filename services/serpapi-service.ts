import { injectable, inject } from 'inversify';
import { TYPES } from '../di/types';
import { ApiClient } from '../lib/api-client';
import { ICacheService } from './cache-service';
import { ILoggerService } from './logger-service';

const SERP_CLIENT = new ApiClient({
  retries: 2,
  backoffMs: 800,
  timeoutMs: 12000,
});

export interface ISerpApiService {
  searchAmazon(query: string, apiKey: string): Promise<any | null>;
}

@injectable()
export class SerpApiService implements ISerpApiService {
  constructor(
    @inject(TYPES.CacheService) private cache: ICacheService,
    @inject(TYPES.LoggerService) private logger: ILoggerService
  ) {}

  async searchAmazon(query: string, apiKey: string): Promise<any | null> {
    if (!apiKey) return null;

    const cacheKey = `serp:search:${query.toLowerCase()}`;
    const cached = await this.cache.get<any>(cacheKey);
    if (cached) {
      this.logger.debug('SerpAPI cache hit', { query });
      return cached;
    }

    const url = `https://serpapi.com/search.json?engine=amazon&amazon_domain=amazon.com&k=${encodeURIComponent(query)}&api_key=${apiKey}`;

    try {
      this.logger.info('Calling SerpAPI', { query });
      const data = await SERP_CLIENT.getJson<any>(url);
      await this.cache.set(cacheKey, data, 24 * 60 * 60 * 1000); // 24h
      return data;
    } catch (error: any) {
      this.logger.warn('SerpAPI search failed', { query, error: error.message });
      return null;
    }
  }
}
