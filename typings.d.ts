interface MembersSuccessResponse {
  id: string;
  email_address: string;
  unique_email_id: string;
  contact_id: string;
  full_name: string;
  web_id: number;
  email_type: string;
  status: string;
  unsubscribe_reason: string;
  consents_to_one_to_one_messaging: boolean;
  merge_fields: Record<string, any>;
  interests: Record<string, any>;
  ip_signup: string;
  timestamp_signup: string;
  ip_opt: string;
  timestamp_opt: string;
  member_rating: string;
  last_changed: string;
  language: string;
  vip: boolean;
  email_client: string;
  source: string;
  tags_count: number;
  list_id: string;
}
