export interface EmployeeType {
  avatar: string;
  name: string;
  role?: string;
  about?: string;
  team: string;
  networks?: Record<string, string>;
}
