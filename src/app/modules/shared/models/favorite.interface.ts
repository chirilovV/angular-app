import {EntitiesEnum} from "../../core/Enums/entities.enum";

export interface Favorite {
  itemId: string,
  discriminator: EntitiesEnum
}
