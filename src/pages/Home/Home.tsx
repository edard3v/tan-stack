import css from "./Home.module.css";
import Layout from "@layouts/Layout/Layout";
import { HOME } from "./config";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "./getCharacters.fetch";

export default function Home() {
  const { isError, isSuccess, isLoading } = useQuery({
    queryKey: ["ram"],
    queryFn: getCharacters,
  });

  return (
    <Layout title={HOME.display}>
      <main className={css.home}>
        {isLoading && <h1>Cargando...</h1>}
        {isError && <h1>Error</h1>}

        {isSuccess && <h1>¡Hola mundo!</h1>}
      </main>
    </Layout>
  );
}
