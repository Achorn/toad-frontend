import { useEffect, useState } from "react";
import { CreateToadForm } from "../components/CreateToadForm";
import { useToadContext } from "../hooks/useToadContext";
import { UseAuthContext } from "../hooks/useAuthContext";

export const ToadPage = () => {
  const { toad } = useToadContext();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { dispatch } = useToadContext();
  const { user } = UseAuthContext();

  useEffect(() => {
    const fetchToad = async () => {
      console.log("fetching toad");
      setError(null);
      setLoading(true);
      const uri = "https://toad-api.onrender.com/api/toads/";
      const reqInit = {
        headers: {
          Authorization: `Bearer: ${user.token}`,
        },
      };
      const response = await fetch(uri, reqInit);
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      } else {
        dispatch({ type: "SET_TOAD", payload: json });
      }
      setLoading(false);
    };
    fetchToad();
  }, [dispatch, user]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>{!toad ? <CreateToadForm /> : <ToadPage />}</div>
      )}
    </div>
  );
};