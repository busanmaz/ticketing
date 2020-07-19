import { Subjects, OrderCancelledEvent, Publisher } from '@butickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
