import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../common/components/Header/Header"
import SearchResults from "../common/components/SearchResults/SearchResults"
import Response from "../common/utils/Response"

interface searchProps {
  results: {
    searchInformation: {
      formattedTotalResults: string
      formattedSearchTime: string
    },
    items: []
  }
}
const API_KEY = process.env.API_KEY
const CONTEXT_KEY = process.env.CONTEXT_KEY

const Search = ({ results }: searchProps) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term}-Google Search</title>
        <meta name="description" content="Google Search Results" />
      </Head>
      {/* Header */}
      <Header />
      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  )
}
export default Search

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = false
  const startIndex = context.query.start || "0"
  const term = context.query.term as string
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${startIndex}`)
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { results: data }
  }
}