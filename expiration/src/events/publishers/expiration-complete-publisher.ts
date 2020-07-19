import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from '@butickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
