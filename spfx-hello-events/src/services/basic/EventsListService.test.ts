import 'jest';
import { EventsListService } from './EventsListService';
import { MockEventsListService } from './MockEventsListService';

let countEventItems = 0;

const fakeEventsList = {
  items: {
    orderBy: () => {
      return {
        select: () => {
          return {
            expand: () => {
              return {
                getAll: async () => {
                  const mockEventsListService = new MockEventsListService();
                  const eventItems = await mockEventsListService.fetchEventItems();
                  countEventItems = eventItems.length;
                  return eventItems;
                }
              };
            }
          };
        }
      };
    }
  }
};

jest.mock('@pnp/sp', () => {
  return {
    sp: {
      web: {
        lists: {
          getByTitle: () => { return fakeEventsList; }
        }
      }
    }
  };
});

describe('ImagesLibService', () => {

  it('should fetch the events', async () => {
    const eventsListService = new EventsListService();

    const eventItems = await eventsListService.fetchEventItems();

    expect(eventItems.length).toBe(countEventItems);
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
