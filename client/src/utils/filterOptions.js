import { useTranslation } from "react-i18next";

export const useCategoryOptions = () => {
  const { t } = useTranslation();

  return [
    { value: "", label: t("Category") }, // Default option
    { value: "Space Literature", label: t("Space Literature") },
    { value: "Space Suits", label: t("Space Suits") },
    { value: "Space Decor", label: t("Space Decor") },
    { value: "Space Tech", label: t("Space Tech") },
    { value: "Space Food", label: t("Space Food") },
    { value: "Space Gear", label: t("Space Gear") },
  ];
};

export const useSortOptions = () => {
  const { t } = useTranslation();

  return [
    { value: "", label: t("Sorting") }, // Default option
    { value: "price_asc", label: t("Price ↑") }, // Arrow up for low to high
    { value: "price_desc", label: t("Price ↓") }, // Arrow down for high to low
    { value: "rating_asc", label: t("Rating ↑") }, // Arrow up for low to high
    { value: "rating_desc", label: t("Rating ↓") }, // Arrow down for high to low
  ];
};
