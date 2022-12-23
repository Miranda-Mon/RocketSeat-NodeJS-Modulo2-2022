import { v1 as uuidV1 } from "uuid";
class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV1();
  }
}

export { Category };
