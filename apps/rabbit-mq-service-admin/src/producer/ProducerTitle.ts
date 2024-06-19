import { Producer as TProducer } from "../api/producer/Producer";

export const PRODUCER_TITLE_FIELD = "id";

export const ProducerTitle = (record: TProducer): string => {
  return record.id?.toString() || String(record.id);
};
