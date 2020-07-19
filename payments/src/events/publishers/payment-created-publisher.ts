import { Subjects, PaymentCreatedEvent, Publisher } from '@butickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
