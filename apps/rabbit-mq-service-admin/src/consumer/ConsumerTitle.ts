import { Consumer as TConsumer } from "../api/consumer/Consumer";

export const CONSUMER_TITLE_FIELD = "id";

export const ConsumerTitle = (record: TConsumer): string => {
  return record.id?.toString() || String(record.id);
};
