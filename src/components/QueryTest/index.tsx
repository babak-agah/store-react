import { getProductCategoriesApi } from "@src/hooks/get/get-product-categories.api";
import { useQuery } from "@tanstack/react-query";


interface Props {
  parentId: string;
  isRoot: boolean;
}

const QueryTest = ({ parentId, isRoot }: Props) => {
  const { status: statusCategories, data: categories } = useQuery({
    queryKey: ["categories", parentId],
    queryFn: () => {
      const filter = isRoot
        ? { parent: { $exists: false } }
        : { parent: parentId };
      return getProductCategoriesApi({ filter }).then((res) => res.data);
    },
  });
  return <div>QueryTest</div>;
};

export default QueryTest;
