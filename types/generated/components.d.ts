import type { Schema, Attribute } from '@strapi/strapi';

export interface EventDailyScheduleDay extends Schema.Component {
  collectionName: 'components_event_daily_schedule_days';
  info: {
    displayName: 'Daily Schedule Day';
    icon: 'clock';
  };
  attributes: {
    eventHeader: Attribute.String;
    daySchedule: Attribute.Blocks;
  };
}

export interface EventDailySchedules extends Schema.Component {
  collectionName: 'components_event_daily_schedules';
  info: {
    displayName: 'Daily Schedules';
    icon: 'clock';
  };
  attributes: {
    day: Attribute.Component<'event.daily-schedule-day', true>;
  };
}

export interface EventEventDetail extends Schema.Component {
  collectionName: 'components_event_event_details';
  info: {
    displayName: 'Event Detail';
    icon: 'information';
  };
  attributes: {
    detailTitle: Attribute.String;
    eventDetails: Attribute.Blocks;
  };
}

export interface EventEventDetails2 extends Schema.Component {
  collectionName: 'components_event_event_details_2s';
  info: {
    displayName: 'Event Details 2';
    icon: 'information';
    description: '';
  };
  attributes: {
    detailTitle: Attribute.String;
    eventDetails: Attribute.Blocks;
  };
}

export interface EventImportantEventDetails extends Schema.Component {
  collectionName: 'components_event_important_event_details';
  info: {
    displayName: 'Important Event Details';
    icon: 'information';
    description: '';
  };
  attributes: {
    eventDetails: Attribute.Component<'event.event-detail', true>;
  };
}

export interface EventSection0Hero extends Schema.Component {
  collectionName: 'components_event_section_0_heroes';
  info: {
    displayName: 'Section 0 Hero';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    showSection: Attribute.Boolean;
    eventName: Attribute.String;
    eventPayout: Attribute.String;
    eventLocation: Attribute.String;
    eventDates: Attribute.String;
    eventHost: Attribute.String;
    backgroundImageURL: Attribute.String;
    showRegistrationButton: Attribute.Boolean;
    eventCountryImg: Attribute.String;
    resultsUrl: Attribute.String;
  };
}

export interface EventSection1Links extends Schema.Component {
  collectionName: 'components_event_section_1_links';
  info: {
    displayName: 'Section 1 Links';
    icon: 'cursor';
  };
  attributes: {
    eventRegisterLink: Attribute.String;
    eventPreviewLink: Attribute.String & Attribute.DefaultTo<'#'>;
    eventBracketsLink: Attribute.String & Attribute.DefaultTo<'#'>;
    eventScorezoneLink: Attribute.String;
    eventWatchLink: Attribute.String;
    eventResultsLink: Attribute.String & Attribute.DefaultTo<'#'>;
  };
}

export interface EventSection2SponsorsAndSummary extends Schema.Component {
  collectionName: 'components_event_section_2_sponsors_and_summaries';
  info: {
    displayName: 'Section 2 Sponsors & Summary';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    sponsorLogos: Attribute.Component<'event.sponsor-logos', true>;
    eventTitle: Attribute.String;
    eventDates: Attribute.String;
    eventLocation: Attribute.String;
    eventHost: Attribute.String;
    eventPayout: Attribute.String;
    eventAttention: Attribute.String;
    eventInfo: Attribute.Text;
    locationLogo: Attribute.String;
    locationLogo2: Attribute.Media;
    eventHostLogo: Attribute.String;
    eventHostLogo2: Attribute.Media;
  };
}

export interface EventSection4EventSchedule extends Schema.Component {
  collectionName: 'components_event_section_4_event_schedules';
  info: {
    displayName: 'Section 4 Event Schedule';
    icon: 'clock';
    description: '';
  };
  attributes: {
    dailySchedule: Attribute.Component<'event.daily-schedule-day', true>;
  };
}

export interface EventSection5AdditionalInfo extends Schema.Component {
  collectionName: 'components_event_section_5_additional_infos';
  info: {
    displayName: 'Section 5 Additional Info';
    icon: 'information';
    description: '';
  };
  attributes: {
    tournamentDirectorImg: Attribute.String;
    tournamentDirectorName: Attribute.String;
    tournamentDirectorEmail: Attribute.String;
    tournamentInfo: Attribute.Text;
  };
}

export interface EventSection6 extends Schema.Component {
  collectionName: 'components_event_section_6_s';
  info: {
    displayName: 'Section 6 ';
    icon: 'question';
  };
  attributes: {
    additionalInfoHeader1: Attribute.String;
    additionalInfoHeader2: Attribute.String;
    additionalInfoHeader3: Attribute.String;
  };
}

export interface EventSection7VenueInfo extends Schema.Component {
  collectionName: 'components_event_section_7_venue_infos';
  info: {
    displayName: 'Section 7 Venue Info';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    venueImg: Attribute.String;
    venueHost: Attribute.String;
    venueLocation: Attribute.String;
    venueAttention: Attribute.String;
    venueInfo: Attribute.Text;
    venuePhoneImg: Attribute.String;
    venuePhoneImg2: Attribute.Media;
    venuePhone: Attribute.String;
    venueWebsiteLinkImg: Attribute.String;
    venueWebsiteLinkImg2: Attribute.Media;
    venueWebsiteLink: Attribute.String;
    venueWebsite: Attribute.String;
  };
}

export interface EventSection8ViewHotels extends Schema.Component {
  collectionName: 'components_event_section_8_view_hotels';
  info: {
    displayName: 'Section 8 View Hotels';
    icon: 'house';
    description: '';
  };
  attributes: {
    hotelMultipleAclHotels: Attribute.Text;
    hotelImg: Attribute.String;
    hotelName: Attribute.String;
    hotelAddress: Attribute.String;
    hotelInfo: Attribute.Text;
    hotelPhoneImg: Attribute.String;
    hotelPhone: Attribute.String;
    hotelWebsiteLinkImg: Attribute.String;
    hotelWebsiteLink: Attribute.String;
    hotelWebsite: Attribute.String;
    hotelBookNow: Attribute.String;
  };
}

export interface EventSection9ShowShootout extends Schema.Component {
  collectionName: 'components_event_section_9_show_shootouts';
  info: {
    displayName: 'Section 9 Show Shootout';
    icon: 'moon';
  };
  attributes: {
    showShootOutSection: Attribute.Boolean;
  };
}

export interface EventSponsorLogos extends Schema.Component {
  collectionName: 'components_event_sponsor_logos';
  info: {
    displayName: 'Sponsor Logos';
    icon: 'picture';
    description: '';
  };
  attributes: {
    logo: Attribute.String;
    url: Attribute.String;
    logo2: Attribute.Media;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'event.daily-schedule-day': EventDailyScheduleDay;
      'event.daily-schedules': EventDailySchedules;
      'event.event-detail': EventEventDetail;
      'event.event-details-2': EventEventDetails2;
      'event.important-event-details': EventImportantEventDetails;
      'event.section-0-hero': EventSection0Hero;
      'event.section-1-links': EventSection1Links;
      'event.section-2-sponsors-and-summary': EventSection2SponsorsAndSummary;
      'event.section-4-event-schedule': EventSection4EventSchedule;
      'event.section-5-additional-info': EventSection5AdditionalInfo;
      'event.section-6': EventSection6;
      'event.section-7-venue-info': EventSection7VenueInfo;
      'event.section-8-view-hotels': EventSection8ViewHotels;
      'event.section-9-show-shootout': EventSection9ShowShootout;
      'event.sponsor-logos': EventSponsorLogos;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
