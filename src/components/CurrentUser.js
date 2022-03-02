import { useDispatch, useSelector } from "react-redux";
import { testAction } from "../features/currentUser/currentUserSlice";

export const CurrentUser = () => {
  const { name, lastName, age, type, wishlistIDs, interestingCategories } =
    useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const handleAgeIncrease = () => {
    dispatch(testAction());
  };

  return (
    <>
      <h1>
        Hello {name} {lastName}
      </h1>
      <p>{type.toUpperCase()} user</p>
      <p>Age: {age}</p>
      <button onClick={handleAgeIncrease}>Increase age.</button>
      <p>Here are your favorite categories:</p>
      {interestingCategories.map((category, index) => {
        return (
          <div>
            <span key={index}>{category}</span>
            <br />
          </div>
        );
      })}
      <p>Here's your wishlist:</p>
      {wishlistIDs.map((product, index) => {
        return (
          <div key={index}>
            <span>{product}</span>
            <br />
          </div>
        );
      })}
    </>
  );
};
