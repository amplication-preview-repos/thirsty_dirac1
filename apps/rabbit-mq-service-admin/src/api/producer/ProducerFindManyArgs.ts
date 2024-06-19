import { ProducerWhereInput } from "./ProducerWhereInput";
import { ProducerOrderByInput } from "./ProducerOrderByInput";

export type ProducerFindManyArgs = {
  where?: ProducerWhereInput;
  orderBy?: Array<ProducerOrderByInput>;
  skip?: number;
  take?: number;
};
