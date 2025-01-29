export class CreateOrderDto {
  date: Date;
  productIds: number[]; // Liste des IDs des produits
  userId: number; // ID de l'utilisateur qui passe la commande
}
