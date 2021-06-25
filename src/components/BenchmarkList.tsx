import { BenchmarkItem } from './BenchmarkItem'

export const BenchmarkList = () => {
  const names: string[] = ["Bench1","Bench2","Bench3","Bench4"]
  return (
    <div>
      {names.map(element => <BenchmarkItem Name={element}/>)}
    </div>
  )
}