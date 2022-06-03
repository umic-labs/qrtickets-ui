import { http } from "../config/http";
import { TICKETS_URL, TICKETS_FIND_ONE_URL } from "./endpoints";
import urlcat from "urlcat";

export const TicketsApi = {
  find({ eventId, params }: { eventId: number, params?: any }) {
    const url = urlcat('', TICKETS_URL, { eventId })
    return http.get(url, { params });
  },

  findOne({ eventId, id }: { eventId: number, id: number }) {
    const url = urlcat('', TICKETS_FIND_ONE_URL, { eventId, id });
    return http.get(url);
  },
};
