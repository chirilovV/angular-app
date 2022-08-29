import {EntitiesEnum} from "../Enums/entities.enum";

export interface Favorite {
  itemId: string,
  discriminator: EntitiesEnum
}
