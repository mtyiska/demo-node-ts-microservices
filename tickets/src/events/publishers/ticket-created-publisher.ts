import { Publisher, Subjects, TicketCreatedEvent } from "@michaeltyiska/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
