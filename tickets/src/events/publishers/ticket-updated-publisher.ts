import { Publisher, Subjects, TicketUpdatedEvent } from '@butickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
