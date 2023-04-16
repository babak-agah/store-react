import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import AdminProductCategoryCard from "@src/components/cards/AdminProductCategoryCard";
import CreateProductCategory from "@src/components/forms/createProductCategory";
import CreateVariation from "@src/components/forms/createVriation";
import AdminLayout from "@src/components/layouts/AdminLayout";
import { getProductCategories } from "@src/hooks/get/get-product-categories.api";
import { getProductCategoryById } from "@src/hooks/get/get-product-category-by-id.api";
import { ProductCategory } from "@src/types/product-category";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

const ROOT_CATEGORY: ProductCategory = {
  name: "root",
  _id: "root",
  ancestors: [],
  parent: undefined,
  variations: [],
};

const ProductCategoriesPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [openCreateVariantion, setOpenCreateVariantion] =
    useState<boolean>(false);

  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [category, setCategory] = useState<ProductCategory>(ROOT_CATEGORY);
  const parentId = router.query.id;
  useEffect(() => {
    setCategories([]);
    let filter = {};
    if (parentId === ROOT_CATEGORY._id) {
      setCategory(ROOT_CATEGORY);
      filter = { parent: { $exists: false } };
    } else {
      if (!parentId) return;
      getProductCategoryById(parentId as string).then((res) => {
        setCategory(res.data);
      });
      filter = { parent: parentId };
    }
    getProductCategories({ filter })
      .then((res) => {
        setCategories(res.data);
      })
      .catch(console.log);
  }, [parentId]);

  return (
    <>
      <Box>
        {parentId === "root" ? null : (
          <Button onClick={router.back}>back</Button>
        )}
      </Box>
      <Box>
        <Grid container gap={1}>
          <Grid item xs={12} md={4}>
            <Typography variant={"h2"}>{category.name}</Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button onClick={() => setOpen(true)} variant={"contained"}>
                add category
              </Button>

              <Button
                onClick={() => setOpenCreateVariantion(true)}
                variant={"contained"}
              >
                add variantion
              </Button>
            </Box>
          </Grid>
          <Grid item container xs={12} md={"auto"} gap={2}>
            {category.variations.map((v) => (
              <Grid item key={v._id}>
                <Box>name: {v.name}</Box>
                <Box>model: {v.model}</Box>
                <Box>
                  options:{" "}
                  {v.options.map((o, index) => (
                    <Box component={"span"} key={index}>
                      {JSON.stringify(o)}/
                    </Box>
                  ))}
                </Box>
                <Box>
                  units:
                  {v.units.map((u) => u.name)}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Box p={1}>
        {categories.map((category, index) => (
          <Link
            key={category._id}
            href={`/admin/product-categories/${category._id}`}
          >
            <AdminProductCategoryCard data={category} />
          </Link>
        ))}
      </Box>

      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={openCreateVariantion}
        onClose={() => setOpenCreateVariantion(false)}
      >
        <DialogTitle>{category.name}</DialogTitle>
        <DialogContent>
          <CreateVariation
            categoryId={parentId as string}
            created={(pc) => {
              // setVariations((pre) => [pc, ...pre]);
              setOpenCreateVariantion(false);
            }}
          />
        </DialogContent>
      </Dialog>

      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>{category.name}</DialogTitle>
        <DialogContent>
          <CreateProductCategory
            parentId={parentId === "root" ? undefined : (parentId as string)}
            created={(pc) => {
              setCategories((pre) => [pc, ...pre]);
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

ProductCategoriesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AdminLayout>{page}</AdminLayout>
    </>
  );
};

export default ProductCategoriesPage;
