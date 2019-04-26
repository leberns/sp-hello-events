import 'jest';
import { Items } from "@pnp/sp";
import * as sinon from 'sinon';
import { EventsListService } from './EventsListService';
import { MockEventsListService } from './MockEventsListService';

describe('EventsListService', () => {

  let pnpItemsGetAllStub: sinon.SinonStub;

  beforeEach(() => {
    pnpItemsGetAllStub = sinon.stub(Items.prototype, "getAll");
  });

  afterEach(() => {
    pnpItemsGetAllStub.restore();
  });

  it('should fetch 3 events', async () => {
    const mockEventItems = (new MockEventsListService()).getEventItems();
    pnpItemsGetAllStub.resolves(mockEventItems);
    const eventsListService = new EventsListService();

    const eventItems = await eventsListService.fetchEventItems();

    expect(eventItems.length).toBe(3);
    expect(eventItems[0].Id).toBe(MockEventsListService.evId);
    expect(eventItems[0].Title).toBe(MockEventsListService.evTitle);
    expect(eventItems[0].HEvDescription).toBe(MockEventsListService.evDescription);
    expect(eventItems[0].HEvStart).toBe(MockEventsListService.evStart);
    expect(eventItems[0].HEvEnd).toBe(MockEventsListService.evEnd);
    expect(eventItems[0].HEvCategoryRef).toBe(MockEventsListService.evCategoryRef);
    expect(eventItems[0].HEvImageRef).toBe(MockEventsListService.evImageRef);
    expect(eventItems[0].HEvLocation).toBe(MockEventsListService.evLocation);
  });
});
