import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = 'MyFavorites';


export default function FavoritesProvider({children}) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider value={{favorite, setFavorite}}>
            {children};
        </FavoritesContext.Provider>
    );
}

// hook personalizado
export function useFavoriteContext(){
    const {favorite, setFavorite} = useContext(FavoritesContext);

    function addFavorite(newFavorite){
        // verificar se existem algum item repitido no favoritos
         const reapeatFavorite = favorite.some((item) => item.id === newFavorite.id);

        // // nova lista, recebe lista anterior
         let newList = [...favorite];

        // // verificar se não tem favorito repetido e adicionar o item na nova lista
         if(!reapeatFavorite) {
             newList.push(newFavorite);
             return setFavorite(newList)
         }

        // // Se o item for repetido será removido da lista
         newList = favorite.filter((fav) => fav.id !== newFavorite.id);
         return setFavorite(newList)
    }

    return {
        favorite, 
        addFavorite
    }
}