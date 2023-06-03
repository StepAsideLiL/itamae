export const loader = async ({ params }) => {
  const chefData = await fetch(
    `https://itamae-server.vercel.app/chef-data/${params.id}`
  );
  const chef = await chefData.json();

  const chefRecipeData = await fetch(
    `https://itamae-server.vercel.app/recipes/chef/${params.id}`
  );
  const chefRecipe = await chefRecipeData.json();

  return { chef, chefRecipe };
};
