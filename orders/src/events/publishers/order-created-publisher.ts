import { Publisher, OrderCreatedEvent, Subjects } from "@michaeltyiska/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
