import Link from "next/link";
import RowProductCategoryCard from "../cards/RowProductCategoryCard";
import { CircularProgress } from "@mui/material";
import { ProductCategory } from "@src/types/product-category";

interface Props {
  loading: boolean;
  categories: ProductCategory[];
}

const ProductCategories = ({ loading, categories }: Props) => {
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        categories?.map((category, index) => (
          <Link
            shallow={true}
            key={category._id}
            href={`/admin/product-categories/${category._id}`}
          >
            <RowProductCategoryCard data={category} />
          </Link>
        ))
      )}
    </>
  );
};

export default ProductCategories;
