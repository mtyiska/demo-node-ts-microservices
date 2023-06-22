import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@michaeltyiska/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
