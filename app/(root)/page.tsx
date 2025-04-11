import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";



export default async function Home({ searchParams } : {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;

  const posts = [{ 
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'Dirk'},
    _id: 1,
    description: "This is a description",
    image: "https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Flower",
    title: "This is a flower",
  }];

  return (
    <>
    <section className="w-full  bg-[#EE2B69] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
      <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
        get stuff done
      </h1>
      <p className="font-medium text-[20px] text-white text-center break-words max-w-3xl">
        do this, do that, get shit done
      </p>
      <SearchForm query={query}/>
    </section>

    <section className="section_container px-6 py-10 max-w-7xl mx-auto">
      <p className="text-30-semibold font-semibold text-[30px] text-black">
        {query ? `Search results for "${query}"` : `All Cards`}
      </p>

      <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
        {posts?.length > 0 ? (
          posts.map((post: StartupCardType, index: number) => (
            <StartupCard key={post?._id} post={post} />
          )) 
        ) : (
          <p className="no-results">
            No stuff found
          </p>
          )}
      </ul>
    </section>
    </>
  );
}
