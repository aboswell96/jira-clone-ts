export interface UsersRepresentation {
  total: number;
  data: UserRepresentation[];
}

export interface UserRepresentation {
  first_name: string;
  last_name: string;
  id: string;
  photo_url: string;
}
