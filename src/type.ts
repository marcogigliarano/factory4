export enum ResourceType {
  ACCOUNTS = "accounts",
  ASSETS = "assets",
  CUSTOMERS = "customers",
  DATA_POINTS = "datapoints",
  DEVICES = "devices",
  DOCUMENTS = "documents",
  FORMS = "forms",
  INVITES = "invites",
  MEDIA = "media",
  MESSAGES = "messages",
  NAMESPACES = "namespaces",
  ORDERS = "orders",
  PATIENTS = "patients",
  RELATIONSHIPS = "relationships",
  RULES = "rules",
  TEMPLATES = "templates",
  USERS = "users",
  WORKFLOWS = "workflows",
}

export interface ApiList {
  id: string;
  type: ResourceType;
}

export interface HealthStatus {
  success: boolean;
  message: string;
  hostname: string;
  time: number;
}
