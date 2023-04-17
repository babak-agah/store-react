import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import ProductCategories from "@src/components/ProductCategories";
import ProductCategoryDetailsCard from "@src/components/cards/ProductCategoryDetailsCard";
import CreateProductCategory from "@src/components/forms/CreateProductCategory";
import CreateVariation from "@src/components/forms/CreateVriation";
import UpdateProductCategory from "@src/components/forms/UpdateProductCategory";
import { getProductCategories } from "@src/hooks/get/get-product-categories.api";

import { ProductCategory } from "@src/types/product-category";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";

type OpenType = "CREATE_CATEGORY" | "UPDATE_CATEGORY" | "CREATE_VARIANT";

const ProductCategoryDetails = () => {
  const router = useRouter();
  const categoryId = router.query.id ? (router.query.id as string) : "root";
  const isRoot = !categoryId || categoryId === "root";

  const [open, setOpen] = useState<OpenType>();

  const [categoreis, setCategories] = useState<ProductCategory[]>([]);

  useEffect(() => {
    if (!categoryId) return;

    const filter =
      categoryId === "root"
        ? { parent: { $exists: false } }
        : { parent: categoryId };

    getProductCategories({ filter }).then((res) => {
      setCategories(res.data);
    });
  }, [categoryId]);

  return (
    <>
      <Box mb={2}>
        {isRoot ? null : <Button onClick={router.back}>back</Button>}
      </Box>
      <Box>
        <ProductCategoryDetailsCard categoryId={categoryId} />
      </Box>
      <Box my={3}>
        <Button
          onClick={() => setOpen("CREATE_CATEGORY")}
          variant={"contained"}
        >
          add category
        </Button>
      </Box>

      <Box>
        <ProductCategories
          categories={categoreis}
          //   loading={statusCategories === "loading"}
          loading={false}
        />
      </Box>

      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={Boolean(open)}
        onClose={() => setOpen(undefined)}
      >
        {/* <DialogTitle>{category.name}</DialogTitle> */}
        <DialogContent>
          {open === "CREATE_CATEGORY" ? (
            <CreateProductCategory
              parentId={categoryId === "root" ? undefined : categoryId}
              created={(pc) => {
                // setCategories((pre) => [pc, ...pre]);
              }}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCategoryDetails;

// not working correctly! maybe there is a problem in my package installation
// const t = useQueries({
//     queries: [
//       {
//         queryKey: ["get-category", categoryId],
//         queryFn: () =>
//           getProductCategoryById(categoryId).then((res) => {
//             setCategory(res.data);
//             return res.data;
//           }),
//         enabled: Boolean(!isRoot && categoryId),
//       },
//       {
//         queryKey: ["get-categories", categoryId],
//         queryFn: () => {
//           const filter =
//             categoryId === "root"
//               ? { parent: { $exists: false } }
//               : { parent: categoryId };
//           return getProductCategories({ filter }).then((res) => {
//             setCategories(res.data);
//             return res.data;
//           });
//         },
//         enabled: Boolean(categoryId),
//       },
//     ],
//   });
