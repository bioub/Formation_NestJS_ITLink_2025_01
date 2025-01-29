export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  categoryId: number; // On utilise l'ID plutôt que l'objet entier pour la création
}
