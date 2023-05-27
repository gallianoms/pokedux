import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonDetailsQuery } from "../api/apiSlice";
import {
  selectPokemon,
  toggleFavorite,
} from "../features/pokemon/pokemonSlice";

const Card = ({ name }: { name: string }) => {
  const { data } = useGetPokemonDetailsQuery({ name });
  const dispatch = useDispatch();
  const favorites = useSelector(selectPokemon);

  return (
    <div className="border w-28 h-32 mt-4 bg-white text-slate-700 rounded shadow-sm">
      <div className="flex justify-between px-1">
        <p className="text-sm font-light pt-1 pl-1">{name}</p>
        <button onClick={() => dispatch(toggleFavorite(name))}>
          {!favorites.includes(name) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-amber-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-amber-300"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      <img
        src={data?.sprites.front_default}
        alt={name}
        className="mx-auto"
        width={82}
      />
      <div className="bg-slate-50 py-1">
        <p className="text-xs flex justify-center font-bold">
          {data?.abilities[0].ability.name}
        </p>
        <p className="text-xs flex justify-center font-mono">
          {data?.abilities[1]?.ability.name}
        </p>
      </div>
    </div>
  );
};

export default Card;
