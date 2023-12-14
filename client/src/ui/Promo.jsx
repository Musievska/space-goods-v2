import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Promo = () => {
  const { t } = useTranslation();
  
  return (
    <Link to="/image-upload">
      <div className="mx-auto my-6 max-w-4xl rounded-md bg-gradient-to-r from-red-500 to-red-500 p-4 text-center text-lg leading-7 font-medium text-white">
        <div className="flex items-center justify-center gap-2 text-2xl font-extrabold filter drop-shadow-sm">
          {t("Upload your images")}
        </div>
        <div className="mt-2 text-sm font-bold uppercase">
          {t("Take 10% off your order")}
        </div>
        <div className="flex items-center justify-end gap-1 text-sm italic">
          {t("Click here to upload")}
        </div>
      </div>
    </Link>
  );
};
