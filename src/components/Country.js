import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "../features/Country/countrySlice";

export const Country = () => {
  const countryData = useSelector((state) => state.country.country);
  const dispatch = useDispatch();

  const countryStatus = useSelector((state) => state.country.status);
  const error = useSelector((state) => state.country.error);

  useEffect(() => {
    if (countryStatus === "idle") {
      dispatch(fetchCountry());
    }
  }, [countryStatus, dispatch]);

  const { name } = countryData;
  return <>{name}</>;
};
