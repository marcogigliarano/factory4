import { ResourceType, ApiList } from "./type";

export const API_BASE_URL: string = "https://api.factoryfour.com/";
export const POLLING_MS: number = 15000;

export const API_RESOURCE_LIST: ApiList[] = [
  { id: "1", type: ResourceType.ACCOUNTS },
  { id: "2", type: ResourceType.ASSETS },
  { id: "3", type: ResourceType.CUSTOMERS },
  { id: "4", type: ResourceType.DATA_POINTS },
  { id: "5", type: ResourceType.DEVICES },
  { id: "6", type: ResourceType.DOCUMENTS },
  { id: "7", type: ResourceType.FORMS },
  { id: "8", type: ResourceType.INVITES },
  { id: "9", type: ResourceType.MEDIA },
  { id: "10", type: ResourceType.MESSAGES },
  { id: "11", type: ResourceType.NAMESPACES },
  { id: "12", type: ResourceType.ORDERS },
  { id: "13", type: ResourceType.PATIENTS },
  { id: "14", type: ResourceType.RELATIONSHIPS },
  { id: "15", type: ResourceType.RULES },
  { id: "16", type: ResourceType.TEMPLATES },
  { id: "17", type: ResourceType.USERS },
  { id: "18", type: ResourceType.WORKFLOWS },
];
