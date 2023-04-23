import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Img from "@src/components/core/Img";
import { IProductCategory } from "@src/types/IProduct-category";
import VariaitionCard from "../VariaitionCard";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import UpdateProductCategory from "@src/components/forms/UpdateProductCategory";
import { useEffect, useState } from "react";
import { getProductCategoryByIdApi } from "@src/hooks/get/get-product-category-by-id.api";
import CreateVariation from "@src/components/forms/CreateVriation";

interface Props {
  categoryId: string;
}

const ROOT_CATEGORY: IProductCategory = {
  name: "root",
  _id: "root",
  ancestors: [],
  parent: undefined,
  variations: [],
};

const ProductCategoryDetailsCard = ({ categoryId }: Props) => {
  const [category, setCategory] = useState<IProductCategory>(ROOT_CATEGORY);
  const [open, setOpen] = useState<
    "ADD_VARIATION" | "UPDATE_CATEGORY" | "ADD_PRODUCT"
  >();

  const { icon, name, variations, _id, parent, ancestors } = category;

  const isRoot = !categoryId || categoryId === "root";

  useEffect(() => {
    if (!categoryId) return;
    if (isRoot) {
      setCategory(ROOT_CATEGORY);
    } else {
      getProductCategoryByIdApi(categoryId).then((res) => {
        setCategory(res.data);
      });
    }
  }, [categoryId]);

  return (
    <>
      <Card sx={{ p: 2, position: "relative" }}>
        <IconButton
          sx={{ position: "absolute", right: 14 }}
          onClick={() => setOpen("UPDATE_CATEGORY")}
        >
          <CiEdit />
        </IconButton>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Img
            sx={{ width: "50px", height: "50px", borderRadius: "10px" }}
            src={icon}
          />

          <Box>
            <Typography display={"inline"} variant={"h3"}>
              {name}
            </Typography>{" "}
            in{" "}
            <Link href={`/admin/product-categories/${parent?._id || "root"}`}>
              <Typography display={"inline"} color={"#999"}>
                {parent?.name || "root"}
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box>
          {ancestors.map((a) => (
            <Link
              href={`/admin/product-categories/${a?._id || "root"}`}
              key={a._id}
            >
              <Typography variant={"caption"}>{a.name} / </Typography>
            </Link>
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />
        <Box>
          {isRoot ? null : (
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                size={"small"}
                onClick={() => setOpen("ADD_VARIATION")}
                variant={"outlined"}
              >
                + add variation
              </Button>
              <Link href={`/admin/products/create/${_id}`}>
                <Button variant={"outlined"} size={"small"}>
                  add product
                </Button>
              </Link>
            </Box>
          )}
          {variations.map((v) => (
            <Box key={v._id} mt={2}>
              <VariaitionCard data={v} />
            </Box>
          ))}
        </Box>
      </Card>
      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={Boolean(open)}
        onClose={() => setOpen(undefined)}
      >
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          {open === "UPDATE_CATEGORY" ? (
            <UpdateProductCategory
              category={category}
              updated={(v) => {
                setCategory(v);
                setOpen(undefined);
              }}
            />
          ) : null}

          {open === "ADD_VARIATION" ? (
            <CreateVariation
              categoryId={categoryId}
              created={(pc) => {
                //   setOpen(undefined);
              }}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCategoryDetailsCard;
