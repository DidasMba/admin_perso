type EventTranslation = {
  id: number;
  eventId: number;
  language: string;
  theme: string;
  description: string;
};

export type EventType = {
  id: number;
  slug: string;
  theme: string;
  description: string;
  start_date: string;
  end_date: string;
  location: "ONSITE";
  price: number;
  coordinates: null;
  images: string[];
  thumbnail: string;
  isPublished: boolean;
  eventType: "HACKATHON";
  createdAt: string;
  updatedAt: string;
  creatorId: number;
  EventTranslation: EventTranslation[];
};
