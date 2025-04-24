import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";


export default async function Home({ searchParams } : {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;
  const params = { search: query || null }
  const { data: posts} = await sanityFetch( {query: STARTUPS_QUERY, params});

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
          posts.map((post: StartupTypeCard, index: number) => (
            <StartupCard key={post?._id} post={post} />
          )) 
        ) : (
          <p className="no-results">
            No stuff found
          </p>
          )}
      </ul>
    </section>

    <SanityLive />
    </>
  );
}
