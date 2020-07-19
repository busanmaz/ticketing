import { Publisher, Subjects, TicketCreatedEvent } from '@butickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
