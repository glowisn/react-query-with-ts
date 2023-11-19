import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
import './App.css'
import { fetchProjectsSuccess } from './queries';

const queryClient = new QueryClient()

const App : React.FC =() => {
  return (
    <QueryClientProvider client={queryClient}>
      <Projects />
    </QueryClientProvider>
  )
}



const Projects = () => {
const {data, isFetching, isLoading, isError} = useQuery({
  queryKey: ['projects'],
  queryFn: fetchProjectsSuccess
});

  return (
    <>
      <div>
        ${data}
      </div>
    </>
  )
}


export default App
