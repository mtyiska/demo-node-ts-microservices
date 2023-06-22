import { Publisher, Subjects, TicketUpdatedEvent } from "@michaeltyiska/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
