import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
/**
 * [] - Definir o tipo de retorno
 * [] - Alterar o retorno de erro
 * [] - Aceder o repositorio
 * [] - retornar algo, se fizer sentido
 */
class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest) {
    const categoriesRepository = new CategoriesRepository();
    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error("Category Already exists");

    categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryService };
