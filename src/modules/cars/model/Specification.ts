import { v1 as uuidV1 } from "uuid";
class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;
  constructor() {
    !this.id ? (this.id = uuidV1()) : null;
  }
}

export { Specification };
