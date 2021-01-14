import { checkBucketName } from '../utils/checkBucketName';
import { RequestOptions } from '../../types/params';
import { GetBucketInfoReturnType } from '../../types/bucket';

export async function getBucketInfo(
  this: any,
  name: string,
  options: RequestOptions = {}
): Promise<GetBucketInfoReturnType> {
  checkBucketName(name);
  name = name || this.options.bucket;
  const params = this._bucketRequestParams('GET', name, 'bucketInfo', options);
  params.successStatuses = [200];
  params.xmlResponse = true;
  const result = await this.request(params);
  return {
    bucket: result.data.Bucket,
    res: result.res,
  };
}
