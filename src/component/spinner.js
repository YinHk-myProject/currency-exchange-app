import MoonLoader from "react-spinners/MoonLoader";

const css = {
    display: "block",
    margin: "0 auto"
};

export default function Spinner({isLoading, size}) {
   return (
    <MoonLoader 
      color='#06466b'
      loading={isLoading}
      cssOverride={css}
      size={size}
    />
   );
}